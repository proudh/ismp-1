from rest_framework import serializers
from api.application_form.models import ApplicationForm, InterestTopic


class ApplicationFormSerializer(serializers.ModelSerializer):
    """Serialize an application"""

    # currently can set interest topics through post but cannot yet read (other than from db query)
    topics_of_interest = serializers.ListField(child=serializers.CharField(), write_only=True)

    class Meta:
        """define fields and model"""
        model = ApplicationForm
        fields = (
            'first_name',
            'last_name',
            'preferred_name',
            'birth_date',
            'gender',
            'country_of_origin',
            'email',
            'phone',
            'grade_level',
            'school_name',
            'school_city',
            'school_state',
            'school_country',
            'destination_school',
            'major',
            'referral',
            'additional_input',
            'topics_of_interest')
    
    def create(self, validated_data):
        """
        Override of serializer create
        Here we additionally create topics of interest and map them to the ApplicationForm as needed
        reading in from the topics_of_interest data
        """

        topics_of_interest = validated_data.pop('topics_of_interest')
        application_form = ApplicationForm.objects.create(**validated_data)

        for topic in topics_of_interest:
            topic_model, _created = InterestTopic.objects.get_or_create(topic=topic)
            application_form.interest_topic.add(topic_model.id)
        return application_form
