from django.contrib import admin
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from app import views

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/profiles/<int:pk>/', views.ProfileList.as_view()),
    path('api/posts/<int:pk>/', views.PostList.as_view()),
    path('api/trends/<int:pk>/', views.TrendList.as_view()),
    path('api/categories/<int:pk>/', views.CategoryList.as_view()),
    path('api/brands/<int:pk>/', views.BrandList.as_view()),
    path('api/images/', views.ImageList.as_view()),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = format_suffix_patterns(urlpatterns)

