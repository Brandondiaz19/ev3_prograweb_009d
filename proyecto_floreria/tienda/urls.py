# tienda/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('mas_vendidos/', views.mas_vendidos, name='mas_vendidos'),
    path('rosas/', views.rosas, name='rosas'),
    path('tulipanes/', views.tulipanes, name='tulipanes'),
    path('girasoles/', views.girasoles, name='girasoles'),
    path('amor/', views.amor, name='amor'),
    path('cumpleanios/', views.cumpleanios, name='cumpleanios'),
    path('aniversario/', views.aniversario, name='aniversario'),
]
