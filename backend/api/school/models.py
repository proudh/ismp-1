from django.db import models
from api.mentor.models import Mentor


# Create your models here.
class School(models.Model):
    class Meta:
        ordering = ['-id']
    name = models.CharField(max_length=40, null=False)
    profile_picture_url = models.CharField(max_length=100, null=True)
    page_description = models.TextField(blank=True)  # for showing on the school page
    director = models.ForeignKey(
        Mentor, related_name="schools_directed", on_delete=models.SET_NULL, null=True)
    mentors = models.ManyToManyField(Mentor, related_name="schools_mentored")

    def __str__(self):
        return "{} - {}".format(self.id, self.name)
