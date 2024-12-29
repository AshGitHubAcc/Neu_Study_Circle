from django.shortcuts import render, redirect
from .forms import RoomForm
from .models import Room,Topic, Message
from django.db.models import Q
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
# Create your views here.


def for_login(req):

    page = 'login'

    if req.method == "POST":

        username = req.POST.get('username').lower()
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

    if req.method == 'GET':
        page = 'register'
        form = UserCreationForm()

        context = {
            'form': form,
            'page': page
        }
        return render(req, 'login_register.html', context)
    elif req.method == 'POST':
        form = UserCreationForm(req.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            login(req, user)
            return redirect('home')
        else:
            messages.error(req, "ERROR resigerting")
            return redirect('register')




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
    room_messages = room.message_set.all().order_by('created')

    
    if req.method == "GET":

        users = room.participants.all()


        context = {
            'room': room,
            'room_messages': room_messages,
            'users': users
        }
        return render(req, "single_room.html", context)
    
    elif req.method == 'POST':

        room_message = Message.objects.create(
            user=req.user,
            room=room,
            body=req.POST.get('body'),
        )

        room.participants.add(req.user)
        # context = {
        #     'room': room,
        #     'room_messages': room_messages
        # }
        return redirect('room', id=id)





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
            
