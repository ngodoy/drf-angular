from django.db import models
from django.contrib.auth.models import AbstractBaseUser, UserManager
# Create your models here.
from model_utils.models import TimeStampedModel


class User(AbstractBaseUser,TimeStampedModel):
    username = models.CharField(max_length=100, unique=True)
    first_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)

    USERNAME_FIELD = 'username' #Indica cual campo se debe usar como username (para el login)

    objects = UserManager() #UserManager a usar por este modelo (se debe especificar)

    def __str__(self):
        return self.username

class Post(TimeStampedModel):
    author = models.ForeignKey(User, related_name='posts')
    title = models.CharField(max_length=255)
    body = models.TextField(blank=True, null=True)


class Photo(TimeStampedModel):
    post = models.ForeignKey(Post, related_name='photos')
    image = models.ImageField(upload_to="%Y/%m/%d")
