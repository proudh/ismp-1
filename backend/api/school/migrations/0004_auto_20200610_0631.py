# Generated by Django 3.0.7 on 2020-06-10 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mentor', '0002_auto_20200609_1912'),
        ('school', '0003_auto_20200609_2154'),
    ]

    operations = [
        migrations.AlterField(
            model_name='school',
            name='mentors',
            field=models.ManyToManyField(related_name='schools_mentored', to='mentor.Mentor'),
        ),
    ]
