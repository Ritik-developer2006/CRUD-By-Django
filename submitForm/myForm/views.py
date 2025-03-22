from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.contrib import messages
from myForm.models import studentsForm
from django.core import serializers
import random
import string


def index(request):
    return render(request, "myForm.html")


def records(request):
    data = studentsForm.objects.all()
    return render(request, "allUsers.html", {"data": data})


def submitForm(request):
    if request.method == "POST":
        Id = "".join(random.choices(string.digits, k=10))
        firstName = request.POST["firstName"]
        lastName = request.POST["lastName"]
        email = request.POST["email"]
        number = request.POST["number"]
        photo = request.FILES["photo"]
        email = request.POST["email"]
        course = request.POST["course"]
        studyCenter = request.POST["studyCenter"]
        gender = request.POST["gender"]
        sportsActivity = request.POST["sportsActivity"]
        description = request.POST["description"]
        studentsForm(
            Id=Id,
            firstName=firstName,
            lastName=lastName,
            email=email,
            number=number,
            photo=photo,
            course=course,
            studyCenter=studyCenter,
            gender=gender,
            sportsActivity=sportsActivity,
            description=description,
        ).save()
        messages.success(request, "Data inserted successfully!")
        return redirect("myForm")
    else:
        messages.error(request, "Route does not exist!")
        return redirect("myForm")


def deleteRecord(request):
    if request.method == "POST":
        record_id = request.POST.get("Id")
        studentsForm.objects.filter(Id=record_id).delete()
        return JsonResponse(
            {"status": "success", "message": "Data deleted successfully!"}
        )
    else:
        return JsonResponse({"status": "error", "message": "Invalid request method"})


def editRecord(request):
    if request.method == "POST":
        record_id = request.POST.get("Id")
        try:
            student = studentsForm.objects.get(Id=record_id)
            data = {
                "Id": student.Id,
                "firstName": student.firstName,
                "lastName": student.lastName,
                "number": student.number,
                "studyCenter": student.studyCenter,
                "email": student.email,
                "course": student.course,
                "sportsActivity": student.sportsActivity,
                "gender": student.gender,
                "description": student.description,
                "photo": student.photo.url if student.photo else None,
            }
            return JsonResponse(
                {"status": "success", "message": "Record found!", "data": data}
            )
        except:
            return JsonResponse({"status": "error", "message": "Record not found!"})
    else:
        return JsonResponse({"status": "error", "message": "Invalid request method!"})


def updateRecord(request):
    if request.method == "POST":
        record_id = request.POST["id"]
        firstName = request.POST["firstName"]
        lastName = request.POST["lastName"]
        email = request.POST["email"]
        number = request.POST["number"]
        photo = request.FILES.get("photo")
        course = request.POST["course"]
        studyCenter = request.POST["studyCenter"]
        gender = request.POST["gender"]
        sportsActivity = request.POST["sportsActivity"]
        description = request.POST["description"]

        try:
            student = studentsForm.objects.get(Id=record_id)

            # Update the fields of the record
            student.firstName = firstName
            student.lastName = lastName
            student.email = email
            student.number = number
            student.photo = (
                photo if photo else student.photo
            )  # If no new photo, keep the existing one
            student.course = course
            student.studyCenter = studyCenter
            student.gender = gender
            student.sportsActivity = sportsActivity
            student.description = description
            student.save()
            messages.success(request, "Record updated successfully!")
        except studentsForm.DoesNotExist:
            messages.error(request, "Record not found!")
        return redirect("myStudents")

    else:
        messages.error(request, "Route does not exist!")
        return redirect("myForm")
