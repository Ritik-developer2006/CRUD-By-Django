# Generated by Django 5.1.7 on 2025-03-16 08:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myForm', '0002_alter_studentsform_course_alter_studentsform_sports'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentsform',
            name='studyCenter',
            field=models.CharField(choices=[('MERIT', 'MERIT'), ('DU', 'DU'), ('JNU', 'JNU')], max_length=50),
        ),
    ]
