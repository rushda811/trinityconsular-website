from django.contrib import admin
from .models import Service, Contact,Enquiry

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'description','icon')
    search_fields = ('title', 'description')

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')
    search_fields = ('name', 'email', 'message')
    readonly_fields = ('created_at',)  # users cannot edit timestamps
@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('service', 'first_name', 'surname', 'email', 'created_at',"contact_no","city")
    list_filter=('service', 'attested_as', 'created_at')
    search_fields = ( 'first_name', 'surname', 'email', 'contact_no','city')
    ordering = ('-created_at',)
    readonly_fields=('created_at','updated_at')  # users cannot edit timestamps
    def has_add_permission(self, request):
        return False