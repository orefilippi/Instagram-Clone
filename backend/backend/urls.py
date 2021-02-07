from django.contrib import admin
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/profiles/<int:pk>/', views.ProfileList.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
