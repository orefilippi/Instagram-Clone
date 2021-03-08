from django.db import models


COUNTRIES = (
    ('GREECE', 'GREECE'),
    ('UNITED STATES', 'UNITED STATES'),
    ('ENGLAND', 'ENGLAND')
)

LOCATIONS = (
    ('ATHENS', 'ATHENS'),
    ('NEW YORK', 'NEW YORK'),
    ('LONDON', 'LONDON')
)

TYPES = (
    ('USER', 'USER'),
    ('PROFESSIONAL', 'PROFESSIONAL'),
    ('COMPANY', 'COMPANY')
)


class Profile(models.Model):

    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    country = models.CharField(max_length=100, choices=COUNTRIES)
    type = models.CharField(max_length=100, choices=TYPES)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username


class Trend(models.Model):

    trend_name = models.CharField(max_length=100, null=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.trend_name)


# TAGS!!

class Category(models.Model):

    category_name = models.CharField(max_length=100, null=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.category_name)


class Brand(models.Model):

    brand_name = models.CharField(max_length=100, null=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.brand_name)


class Post(models.Model):

    post_id = models.ForeignKey(Profile, null=True, on_delete=models.SET_NULL)
    image = models.ImageField(upload_to='media/images')
    description = models.CharField(max_length=100, blank=True, null=True)
    location = models.CharField(
        max_length=100, blank=True, null=True, choices=LOCATIONS)
    trend = models.ManyToManyField(Trend)
    category = models.ManyToManyField(Category)
    brand = models.ManyToManyField(Brand)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.post_id)
