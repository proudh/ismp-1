from rest_framework import serializers
from api.mentor.models import Mentor


class MentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentor
        fields = (
            'id',
            'display_name',
            'contact_email',
            'degrees',
            'fun_facts',
            'schools_mentored',
            'schools_directed'
        )
