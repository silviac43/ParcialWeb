from django.urls import path
from . import views

urlpatterns = [
    path('', views.index,name='index'),
    path('recibido/', views.recibido,name='recibido'),
]