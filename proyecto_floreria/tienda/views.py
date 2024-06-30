from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'tienda/index.html')

def login(request):
    return render(request, 'tienda/login.html')

def register(request):
    return render(request, 'tienda/register.html')

def mas_vendidos(request):
    return render(request, 'tienda/mas_vendidos.html')

def rosas(request):
    return render(request, 'tienda/rosas.html')

def tulipanes(request):
    return render(request, 'tienda/tulipanes.html')

def girasoles(request):
    return render(request, 'tienda/girasoles.html')

def amor(request):
    return render(request, 'tienda/amor.html')

def cumpleanios(request):
    return render(request, 'tienda/cumpleanios.html')

def aniversario(request):
    return render(request, 'tienda/aniversario.html')
