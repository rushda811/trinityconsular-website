from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers
from django.views.static import serve
from django.conf import settings
from main.views import ServiceViewSet, ContactViewSet, EnquiryCreateAPIView, index
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# DRF router
router = routers.DefaultRouter()
router.register(r'services', ServiceViewSet, basename='service')
router.register(r'contacts', ContactViewSet, basename='contact')

urlpatterns = [
    path('admin/', admin.site.urls),

    # API endpoints
    path('api/', include(router.urls)),
    path('api/enquiry/', EnquiryCreateAPIView.as_view(), name='enquiry-create'),

    # Serve React root files
    path('manifest.json', lambda request: serve(request, 'manifest.json', document_root=settings.FRONTEND_BUILD_DIR)),
    path('favicon.ico', lambda request: serve(request, 'favicon.ico', document_root=settings.FRONTEND_BUILD_DIR)),
    path('logo192.png', lambda request: serve(request, 'logo192.png', document_root=settings.FRONTEND_BUILD_DIR)),

    # JWT token endpoints
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


]

# ✅ Catch-all for React routes, EXCLUDING /static/
urlpatterns += [
     re_path(r'^.*$', index),
]
