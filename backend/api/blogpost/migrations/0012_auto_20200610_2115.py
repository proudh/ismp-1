# Generated by Django 3.0.7 on 2020-06-10 21:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogpost', '0011_blogpost_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='type',
            field=models.CharField(choices=[('blogpost', 'blogpost'), ('webinar', 'webinar')], default='blogpost', max_length=20),
        ),
    ]
