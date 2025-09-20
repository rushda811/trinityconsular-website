from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .models import Service, Contact
from .serializers import  EnquirySerializer,ServiceSerializer, ContactSerializer


def index(request):
    return render(request, 'index.html')

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

            # --- Email to Admin ---
            admin_subject = f"New Contact Form Submission from {contact.name}"
            admin_message = f"""
            Name: {contact.name}
            Email: {contact.email}
            Message:
            {contact.message}
            """
            send_mail(
                subject=admin_subject,
                message=admin_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.ADMIN_EMAIL],  # set this in settings.py
                fail_silently=False,
            )

            # --- Auto-Reply to User ---
            user_subject = "Thank you for contacting us"
            user_message = f"""
            Hi {contact.name},

            Thank you for reaching out to {settings.SITE_NAME}.
            Our team will get back to you as soon as possible.

            Best regards,
            {settings.SITE_NAME} Team
            """
            send_mail(
                subject=user_subject,
                message=user_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[contact.email],
                fail_silently=False,
            )

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EnquiryCreateAPIView(APIView):
    """
    Create a new enquiry and send emails to admin and user
    """

    def post(self, request):
        serializer = EnquirySerializer(data=request.data)
        if serializer.is_valid():
            enquiry = serializer.save()
            data = serializer.validated_data

            # --- Email to Admin ---
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

            # --- Email to User ---
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