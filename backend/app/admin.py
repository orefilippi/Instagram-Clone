from django.contrib import admin
from .models import *

admin.site.register(Profile)
admin.site.register(Post)
admin.site.register(Trend)
admin.site.register(Category)
admin.site.register(Brand)


# python3 manage.py migrate --run-syncdb
