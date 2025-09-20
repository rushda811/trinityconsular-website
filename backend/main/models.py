from django.db import models

# Create your models here.

from django.db import models

from django.utils.text import slugify

from django.utils.text import slugify

class Service(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    icon = models.CharField(
        max_length=50,
        blank=True,
        help_text="FontAwesome icon name (e.g., FaCertificate, FaGlobe, FaPenFancy)"
    )
    slug = models.SlugField(max_length=255, unique=True, blank=True)  # <-- add this



    def __str__(self):
        return self.title

SERVICE_CHOICES = [
    ("UK Apostille", "UK Apostille"),
    ("Embassy Legalisation", "Embassy Legalisation"),
    ("Shuttle Services", "Shuttle Services"),
]

ATTESTED_CHOICES = [
    ("Original", "Original"),
    ("True Copy", "True Copy"),
]

class Enquiry(models.Model):
    service = models.CharField(max_length=50, choices=SERVICE_CHOICES)
    
    # Step 2
    document_type = models.CharField(max_length=255)
    attested_as = models.CharField(max_length=20, choices=ATTESTED_CHOICES)
    quantity = models.PositiveIntegerField()
    additional_info = models.TextField(blank=True, null=True)

    # Step 3
    first_name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField()
    calling_code = models.CharField(max_length=10)
    contact_no = models.CharField(max_length=20)
    address1 = models.CharField(max_length=255)
    postcode = models.CharField(max_length=20)
    city = models.CharField(max_length=100)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f"{self.service} enquiry by {self.first_name} {self.surname}"


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name