from .models import *
from .serializers import *
from rest_framework import generics


class ProfileList(generics.RetrieveUpdateDestroyAPIView):

    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer



class PostList(generics.RetrieveUpdateDestroyAPIView):

    queryset = Post.objects.all()
    serializer_class = PostSerializer


class TrendList(generics.RetrieveUpdateDestroyAPIView):

    queryset = Trend.objects.all()
    serializer_class = TrendSerializer


class CategoryList(generics.RetrieveUpdateDestroyAPIView):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class BrandList(generics.RetrieveUpdateDestroyAPIView):

    queryset = Brand.objects.all()
    serializer_class = BrandSerializer


class ImageList(generics.RetrieveUpdateDestroyAPIView):

    queryset = Post.objects.all()
    serializer_class = ImageSerializer
