from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import EmailMessage, get_connection, send_mail
from django.conf import settings
from django.http import HttpResponse, Http404
import os
import threading
from django.views.decorators.cache import never_cache
from .models import Service, Contact
from .serializers import EnquirySerializer, ServiceSerializer, ContactSerializer

# Send email async
def send_email_async(subject, message, from_email, recipient_list):
    def send():
        connection = get_connection()
        email = EmailMessage(subject, message, from_email, recipient_list, connection=connection)
        email.send(fail_silently=False)
    threading.Thread(target=send).start()

# Serve React index.html
@never_cache
def index(request):
    index_file_path = os.path.join(settings.FRONTEND_BUILD_DIR, "index.html")
    if os.path.exists(index_file_path):
        with open(index_file_path, encoding="utf-8") as f:
            return HttpResponse(f.read())
    else:
        raise Http404("React build index.html not found")

# API ViewSets
class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()
            # Admin Email
            send_email_async(
                subject=f"New Contact Form Submission from {contact.name}",
                message=f"Name: {contact.name}\nEmail: {contact.email}\nMessage:\n{contact.message}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.ADMIN_EMAIL]
            )
            # Auto-Reply
            send_email_async(
                subject="Thank you for contacting us",
                message=f"Hi {contact.name},\n\nThank you for reaching out to {settings.SITE_NAME}. Our team will get back to you shortly.\n\nBest regards,\n{settings.SITE_NAME} Team",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[contact.email]
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EnquiryCreateAPIView(APIView):
    def post(self, request):
        serializer = EnquirySerializer(data=request.data)
        if serializer.is_valid():
            enquiry = serializer.save()
            data = serializer.validated_data

            # Admin Email
            admin_subject = f"New Enquiry Received: {data.get('service')}"
            admin_message = f"""
New enquiry submitted:

Service: {data.get('service')}
Document Type: {data.get('document_type')}
Attested As: {data.get('attested_as')}
Quantity: {data.get('quantity')}
Additional Info: {data.get('additional_info')}

Name: {data.get('first_name')} {data.get('surname')}
Email: {data.get('email')}
Contact: {data.get('calling_code')} {data.get('contact_no')}
Address: {data.get('address1')}, {data.get('city')}, {data.get('postcode')}
"""
            send_mail(
                subject=admin_subject,
                message=admin_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.ADMIN_EMAIL],
                fail_silently=False
            )

            # User Email
            user_subject = "Your enquiry has been submitted"
            user_message = f"""
Hi {data.get('first_name')},

Thank you for submitting your enquiry to {settings.SITE_NAME}.
Our team will contact you shortly. For urgent queries, call us at {settings.CONTACT_NUMBER}.

Best regards,
{settings.SITE_NAME} Team
"""
            send_mail(
                subject=user_subject,
                message=user_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[data.get('email')],
                fail_silently=False
            )

            return Response({"message": "Enquiry submitted successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
