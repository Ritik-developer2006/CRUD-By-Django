from django.db import models


class studentsForm(models.Model):
    STUDY_CENTER_CHOICES = [
        ("MERIT", "MERIT"),
        ("DU", "DU"),
        ("JNU", "JNU"),
    ]
    COURSE_CHOICES = [
        ("BCA", "BCA"),
        ("MCA", "MCA"),
        ("BA", "BA"),
        ("MA", "MA"),
    ]
    Id = models.CharField(max_length=10, primary_key=True, editable=False)
    firstName = models.CharField(max_length=15)
    lastName = models.CharField(max_length=15)
    number = models.CharField(max_length=10)
    studyCenter = models.CharField(max_length=50, choices=STUDY_CENTER_CHOICES)
    email = models.EmailField(max_length=30)
    course = models.CharField(max_length=5, choices=COURSE_CHOICES)
    sportsActivity = models.CharField(max_length=50)
    gender = models.CharField(max_length=1)
    photo = models.ImageField(upload_to="images/")
    description = models.TextField(max_length=300)

    def __str__(self):
        return f"{self.firstName} {self.lastName} ({self.Id})"
