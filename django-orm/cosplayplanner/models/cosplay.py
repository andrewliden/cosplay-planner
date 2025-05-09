from django.db import models

class Cosplay(models.Model):
    name = models.TextField()
    description = models.TextField()
    reference_image = models.ImageField()