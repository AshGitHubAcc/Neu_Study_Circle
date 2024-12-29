from django.shortcuts import render, redirect
from .forms import RoomForm
from .models import Room,Topic
from django.db.models import Q
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
# Create your views here.


def for_login(req):

    page = 'login'

    if req.method == "POST":

        username = req.POST.get('username')
        password = req.POST.get('password')

        try:
            user = User.objects.get(username=username)

        except Exception as e:
            print(f"___________Error: {e}_____________")

        user = authenticate(req, username=username, password=password)

        if user is not None:
            login(req, user)
            return redirect("home")
    elif req.method == "GET":

        if req.user.is_authenticated:
            return redirect('home')

        context = {
            'page': page
        }
        return render(req, 'login_register.html', context)

def for_logout(req):
    logout(req)
    return redirect("home")


def for_register(req):
    page = 'register'
    context = {
        'page': page
    }
    return render(req, 'login_register.html', context)

def home(req):

    query = req.GET.get('query') if req.GET.get('query') != None else ''

    rooms = Room.objects.filter(
        Q(topic__name__icontains=query) |
        Q(header__icontains=query) |
        Q(description__icontains=query)
    )

    topics = Topic.objects.all()



    context = {
        'rooms': rooms,
        'topics':topics,
        'numOfRooms': rooms.count() 
    }
    return render(req, 'home.html', context)

def single_room(req, id):

    room = Room.objects.get(id=id)
    context = {
        'room': room
    }
    return render(req, "single_room.html", context)


@login_required(login_url='login')
def create_room(req):


    if req.method == 'GET':
        form = RoomForm()
        return render(req, 'create_room.html', {'form': form})
    elif req.method == 'POST':
        form = RoomForm(req.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
        else:
            print("=================Error=============")

@login_required(login_url='login')
def update_room(req, id):
    room = Room.objects.get(id=id)

    if req.user != room.host:
        return HttpResponse("Dont have acess")

    if req.method == "GET":
        form = RoomForm(instance=room)

        return render(req, 'create_room.html', {'form': form})
    elif req.method == "POST":
        form = RoomForm(req.POST, instance=room)

        if form.is_valid():
            form.save()
            return redirect("/")
        else:
            print("=================Error=============")
    
            
@login_required(login_url='login')
def delete_room(req, id):

    room = Room.objects.get(id=id)
    if req.user != room.host:
        return HttpResponse("Dont have acess")

    if req.method == "GET":
        return render(req, 'delete.html', {'var': room})
    elif req.method == "POST":
        room.delete()
        return redirect("/")
            
