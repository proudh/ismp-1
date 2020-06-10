from rest_framework.test import APITestCase, APIClient
from api.mentor.models import Mentor
from api.mentor.serializers import MentorSerializer
from api.school.models import School


class BaseViewTest(APITestCase):
    client = APIClient()

    def create_mentor(self, display_name="", picture_url="", degrees=None, fun_facts=None,
                      contact_email="", job_title="", company_name=""):
        return Mentor.objects.create(
            display_name=display_name, picture_url=picture_url, degrees=degrees,
            fun_facts=fun_facts, contact_email=contact_email, job_title=job_title,
            company_name=company_name)

    def setUp(self):
        self.mentor1 = self.create_mentor(
            display_name="bobby tables",
            degrees=['I am a degree'],
            fun_facts=['fact'])
        self.mentor2 = self.create_mentor(
            display_name="display name", contact_email="a@b.com", job_title='a')
        self.school = School.objects.create(
            name="UCSD", director=self.mentor1)
        self.school.mentors.add(self.mentor1)
        self.school.mentors.add(self.mentor2)


class GetAllMentorsTest(BaseViewTest):

    def test_get_all_mentors(self):
        """
        A simple test of a get command.
        :return: nothing
        """
        response = self.client.get("/api/v1/mentor/")
        expected = Mentor.objects.all()
        serialized = MentorSerializer(expected, many=True)
        self.assertEqual(response.data['results'], serialized.data)

    def test_get_director_of_school(self):
        """
        Test filtering for mentors who are the campus director for a school.
        :return: nothing
        """
        response = self.client.get("/api/v1/mentor/", {'school_directed': self.school.name})
        expected = self.mentor1
        serialized = MentorSerializer(expected)
        self.assertEqual(response.data['results'][0], serialized.data)

    def test_get_director_of_school_by_id(self):
        """
        Test filtering for mentors who are director of a school by passing in an id.
        :return: nothing.
        """
        response = self.client.get("/api/v1/mentor/", {'school_directed_id': self.school.id})
        expected = self.mentor1
        serialized = MentorSerializer(expected)
        self.assertEqual(response.data['results'][0], serialized.data)
