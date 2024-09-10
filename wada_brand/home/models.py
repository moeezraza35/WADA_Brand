from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class user(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	profile_img = models.ImageField(default="/static/media/user/profile.png")
	phone = models.CharField(max_length=15, blank=True, null=True)
	email_verify = models.BooleanField()
	phone_verify = models.BooleanField()