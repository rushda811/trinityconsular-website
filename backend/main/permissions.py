from rest_framework.permissions import BasePermission
from rest_framework.exceptions import NotFound

class AdminOnlyOr404(BasePermission):
    """
    Only allows access to admin users.
    Returns 404 for non-admins to hide the endpoint.
    """
    def has_permission(self, request, view):
        if request.user and request.user.is_staff:
            return True
        raise NotFound()  # returns 404 instead of 401/403
