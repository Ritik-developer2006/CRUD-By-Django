from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="myForm"),
    path('submit-form/', views.submitForm, name="submit"),
    path('records/', views.records, name="myStudents"),
    path('delete-record/', views.deleteRecord, name="deleteRecord"),
    path('edit-record/', views.editRecord, name="editRecord"),
    path('update-record/', views.updateRecord, name="updateRecord"),
]
