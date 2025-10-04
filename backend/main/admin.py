from django.contrib import admin
from .models import Service, Contact, Enquiry

# ---------------- Service Admin ----------------
@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'icon')
    search_fields = ('title', 'description')


# ---------------- Contact Admin (View-only) ----------------
@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')
    search_fields = ('name', 'email', 'message')
    readonly_fields = [field.name for field in Contact._meta.fields]  # all fields read-only

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False


# ---------------- Enquiry Admin (View-only) ----------------
@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('service', 'first_name', 'surname', 'email', 'created_at', 'contact_no', 'city')
    list_filter = ('service', 'attested_as', 'created_at')
    search_fields = ('first_name', 'surname', 'email', 'contact_no', 'city')
    ordering = ('-created_at',)
    readonly_fields = [field.name for field in Enquiry._meta.fields]  # all fields read-only

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False
