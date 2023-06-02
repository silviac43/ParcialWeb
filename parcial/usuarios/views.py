from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse,HttpResponseRedirect
from django.template import loader
from django.contrib import messages
from django.urls import reverse
from .models import Usuario

# Create your views here.
def index(request):
    template=loader.get_template('parcial.html')
    context={
    }
    return HttpResponse(template.render(context,request))

def recibido(request):
    template=loader.get_template('recibido.html')
    context={
    }
    return HttpResponse(template.render(context,request))