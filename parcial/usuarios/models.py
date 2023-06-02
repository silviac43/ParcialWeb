from django.db import models

# Create your models here.
class Usuario(models.Model):
    nombre=models.CharField(max_length=30)
    email=models.CharField(max_length=30)
    telefono=models.CharField(max_length=20)
    gusto=models.CharField(max_length=20)
    porc=models.IntegerField()
