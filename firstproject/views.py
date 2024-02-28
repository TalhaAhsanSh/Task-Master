from django.http import HttpResponse
from django.shortcuts import render

def aboutUs(request):
    return HttpResponse("Welcome to My First Django Page")

def aboutUsPart(request, id):
    return HttpResponse(f"You Type {id} with about us url")

def loginPage(request):
    data = {
        'title': "Log In Page",
        '2dlist': [[1,2,3],[2,3,4],[4,5,5]]
    }
    return render(request, "login.html", data)

def signUpPage(request):
    return render(request, 'signup.html')

def todoPage(request):
    return render(request, 'index.html')