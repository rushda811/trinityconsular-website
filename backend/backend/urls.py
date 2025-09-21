from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers
from main.views import ServiceViewSet, ContactViewSet, EnquiryCreateAPIView, index

# --- DRF router ---
router = routers.DefaultRouter()
router.register(r'services', ServiceViewSet, basename='service')
router.register(r'contacts', ContactViewSet, basename='contact')  # explicit basename ensures URL exists

urlpatterns = [
    path('admin/', admin.site.urls),

    # --- API Endpoints ---
    path('api/', include(router.urls)),
    path('api/enquiry/', EnquiryCreateAPIView.as_view(), name='enquiry-create'),
]

# --- React frontend fallback (catch-all) ---
# Any URL not starting with /api/ or /admin/ will serve React index.html
urlpatterns += [
    re_path(r'^.*$', index),
]
