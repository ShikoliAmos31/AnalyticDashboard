from django.db import models
from datetime import datetime
# Create your models here.

class totalViewModel(models.Model):
    label= models.CharField(max_length=10)
    views = models.IntegerField()

class MostwatchedVideos(models.Model):
    title = models.CharField(max_length=50)
    published_date = models.DateTimeField(default=datetime.now())
    views_count = models.IntegerField(default=0)