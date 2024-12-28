from django.urls import path
from . import views



urlpatterns = [
    path('', views.home, name="point" ),
    path('room/<int:id>/', views.single_room, name="point")

]