from rest_framework import serializers
from .models import *


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ['id', 'username', 'email',
                  'password', 'country', 'type', 'date']


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ['id', 'post_id', 'image', 'description', 'location',
                  'trend', 'category', 'brand', 'date']


class TrendSerializer(serializers.ModelSerializer):

    class Meta:
        model = Trend
        fields = ['id', 'trend_name', 'date']


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ['id', 'category_name', 'date']


class BrandSerializer(serializers.ModelSerializer):

    class Meta:
        model = Brand
        fields = ['id', 'brand_name', 'date']


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ['id', 'image', 'date']
