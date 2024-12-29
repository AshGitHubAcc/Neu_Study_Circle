from django.shortcuts import render, redirect
from .forms import RoomForm
from .models import Room
# Create your views here.


def home(req):
    rooms = Room.objects.all()
    data = {
        'rooms': rooms,
    }
    return render(req, 'home.html', data)

def single_room(req, id):

    room = Room.objects.get(id=id)
    context = {
        'room': room
    }
    return render(req, "single_room.html", context)

def create_room(req):
    form = RoomForm()

    form = RoomForm(req.POST)

    if form.is_valid():
        form.save()
        return redirect('/')
    return render(req, 'create_room.html', {'form': form})
