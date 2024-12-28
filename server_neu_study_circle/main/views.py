from django.shortcuts import render

from .models import Room
# Create your views here.


def home(req):
    rooms = Room.objects.all()
    data = {
        'rooms': rooms,
    }
    return render(req, 'main/home.html', data)

def single_room(req, id):

    room = Room.objects.get(id=id)
    context = {
        'room': room
    }
    return render(req, "main/single_room.html", context)