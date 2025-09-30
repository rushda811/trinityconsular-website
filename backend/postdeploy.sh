#!/bin/bash

# Load your existing fixture
python manage.py loaddata services.json

# Run migrations to ensure database is up-to-date
python manage.py migrate --noinput

# Ensure the admin superuser exists
python manage.py shell -c "
from django.contrib.auth.models import User
user, created = User.objects.get_or_create(username='admin', defaults={'email':'admin@example.com'})
user.is_active = True
user.is_staff = True
user.is_superuser = True
user.set_password('Tri123')
user.save()
"
