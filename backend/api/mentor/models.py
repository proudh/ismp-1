from django.contrib.postgres.fields import ArrayField
from django.db import models


class Mentor(models.Model):
    """
    This class contains information about mentors. Mentors can be associated with
    many schools. Until we implement authentication and user creation, though,
    mentors will not be associated with users.
    """
    class Meta:
        ordering = ['-id']

    picture_url = models.CharField(max_length=200, null=True)
    # sorry; if you have more than 4 degrees you have to choose the top 4.
    degrees = ArrayField(models.CharField(max_length=200), size=4, null=True)
    fun_facts = ArrayField(models.CharField(max_length=200), size=3, null=True)
    job_title = models.CharField(max_length=100, blank=True)
    company_name = models.CharField(max_length=100, blank=True)
    contact_email = models.EmailField(null=True)
    # keep a changeable display name so you can list yourself as something like
    # Sir Bobby Tables III Esq. JD MD PhD if you want.
    display_name = models.CharField(max_length=100)

    def __str__(self):
        return "{} - {} - {} - {} - {} - {} at {} - {}"\
            .format(self.id,
                    self.display_name,
                    self.picture_url,
                    self.degrees,
                    self.fun_facts,
                    self.job_title,
                    self.company_name,
                    self.contact_email)

    def create(self, validated_data):
        return Mentor.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.save()
        return instance

    def save(self, *args, **kwargs):
        super(Mentor, self).save(*args, **kwargs)
