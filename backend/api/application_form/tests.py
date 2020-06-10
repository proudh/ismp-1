from rest_framework.test import APITestCase
from rest_framework.views import status
from api.application_form.models import ApplicationForm, InterestTopic
from api.application_form.serializers import ApplicationFormSerializer


class ApplicationFormViewSetTest(APITestCase):
    def setUp(self):
        ApplicationForm.objects.create(
            first_name="Bobby",
            last_name="Bass",
            birth_date='2000-01-01',
            gender="M",
            country_of_origin='USA',
            email="bbass@rocketmail.com",
            phone="18002254452",
            grade_level="undergraduate",
            school_name="UCSD",
            school_city="La Jolla",
            school_state="California",
            school_country="USA",
            destination_school="Princeton",
            major="Science",
            referral="friend"
        )

    def test_post_application_form(self):
        self.client.post("/api/v1/application/", {
            "first_name": "Krikor",
            "last_name": "Ailanjian",
            "birth_date": "2020-05-07",
            "gender": "M",
            "country_of_origin": "USA",
            "email": "kailanjian@gmail.com",
            "phone": "6268251906",
            "grade_level": "undergraduate",
            "school_name": "UCSD",
            "school_city": "La Jolla",
            "school_state": "California",
            "school_country": "USA",
            "destination_school": "Harvard",
            "major": "Science",
            "referral": "friend",
            "topics_of_interest": ["one", "two", "three"]
        })

        self.assertEqual(2, len(ApplicationForm.objects.all()))
        self.assertEqual(3, len(InterestTopic.objects.all()))

    def test_post__interest_topics_not_duplicated(self):
        self.client.post("/api/v1/application/", {
            "first_name": "Krikor",
            "last_name": "Ailanjian",
            "birth_date": "2020-05-07",
            "gender": "M",
            "country_of_origin": "USA",
            "email": "kailanjian@gmail.com",
            "phone": "6268251906",
            "grade_level": "undergraduate",
            "school_name": "UCSD",
            "school_city": "La Jolla",
            "school_state": "California",
            "school_country": "USA",
            "destination_school": "Harvard",
            "major": "Science",
            "referral": "friend",
            "topics_of_interest": ["one", "two", "three"]
        })

        self.client.post("/api/v1/application/", {
            "first_name": "Krikor",
            "last_name": "Ailanjian",
            "birth_date": "2020-05-07",
            "gender": "M",
            "country_of_origin": "USA",
            "email": "kailanjian@gmail.com",
            "phone": "6268251906",
            "grade_level": "undergraduate",
            "school_name": "UCSD",
            "school_city": "La Jolla",
            "school_state": "California",
            "school_country": "USA",
            "destination_school": "Harvard",
            "major": "Science",
            "referral": "friend",
            "topics_of_interest": ["one", "two", "four"]
        })

        self.assertEqual(3, len(ApplicationForm.objects.all()))
        self.assertEqual(4, len(InterestTopic.objects.all()))


    def test_get_application_form(self):
        response = self.client.get("/api/v1/application/")

        expected = ApplicationForm.objects.all()
        serialized = ApplicationFormSerializer(expected, many=True)
        self.assertEqual(response.data['results'], serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
