from django.db import models

class Cosplay(models.Model):
    name = models.TextField()
    description = models.TextField()
    reference_image = models.ImageField()

class CosplayPart(models.Model):
    cosplay_id = models.ForeignKey(Cosplay, on_delete=models.CASCADE)
    name = models.TextField()
    description = models.TextField()
    reference_image = models.ImageField()
    build_steps = models.TextField()
    time_estimate = models.DurationField()
    store_link = models.URLField()
    is_done = models.BooleanField()