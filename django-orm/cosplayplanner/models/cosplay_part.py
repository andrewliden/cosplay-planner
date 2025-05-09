from django.db import models
from .cosplay import Cosplay

class Cosplay(models.Model):
    cosplay_id = models.ForeignKey(Cosplay)
    name = models.TextField()
    description = models.TextField()
    reference_image = models.ImageField()
    build_steps = models.TextField()
    time_estimate = models.DurationField()
    store_link = models.URLField()
    is_done = models.BooleanField()