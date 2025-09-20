"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers
from main.views import ServiceViewSet, ContactViewSet, EnquiryCreateAPIView, index

# DRF routers for your API endpoints
router = routers.DefaultRouter()
router.register(r'services', ServiceViewSet)
router.register(r'contacts', ContactViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/enquiry/', EnquiryCreateAPIView.as_view(), name='enquiry-create'),
]

# React frontend fallback (catch-all)
# Any URL not starting with /api/ or /admin/ will serve React index.html
urlpatterns += [
    re_path(r'^.*$', index),
]
