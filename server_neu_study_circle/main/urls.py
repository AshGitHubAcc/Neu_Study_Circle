from django.urls import path
from . import views



urlpatterns = [
    path('login/', views.for_login, name="login"),
    path('logout/', views.for_logout, name="logout"),
    path('register/', views.for_register, name="register"),


    path('', views.home, name="home"),
    path('room/<int:id>/', views.single_room, name="room"),
    path('create-room/', views.create_room, name="create_room"),
    path('update-room/<int:id>', views.update_room, name="update_room"),
    path('delete-room/<int:id>', views.delete_room, name="delete_room"),
    

]