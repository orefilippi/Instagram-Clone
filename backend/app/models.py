from django.db import models


COUNTRIES = (
    ('GR', 'GREECE'),
    ('US', 'UNITED STATES'),
    ('EN', 'ENGLAND')
)


class Profile(models.Model):

    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    country = models.CharField(max_length=100, choices=COUNTRIES)

    def __str__(self):
        return self.username
