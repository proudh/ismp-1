from rest_framework import generics, viewsets, status
from rest_framework.response import Response
from api.mentor.models import Mentor
from api.mentor.serializers import MentorSerializer


class ListMentorView(generics.ListAPIView):
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer


class MentorDetailView(generics.ListAPIView):
    queryset = Mentor.objects.all()

    def get(self, request, *args, **kwargs):
        try:
            a_mentor = self.queryset.get(pk=kwargs["pk"])
            return Response(MentorSerializer(a_mentor).data)
        except Mentor.DoesNotExist:
            return Response(
                data={
                    "message": "Mentor with id: {} does not exist".format(kwargs["pk"])
                },
                status=status.HTTP_404_NOT_FOUND
            )


class MentorViewSet(viewsets.ModelViewSet):
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer

    def get_queryset(self):
        result = Mentor.objects.all()
        queried_school_mentored = self.request.query_params.get('school', None)
        queried_school_mentored_id = self.request.query_params.get('school_id', None)
        queried_school_directed = self.request.query_params.get('school_directed', None)
        queried_school_directed_id = self.request.query_params.get('school_directed_id', None)
        if queried_school_mentored is not None:
            result = result.filter(schools_mentored__name=queried_school_mentored)
        if queried_school_mentored_id is not None:
            result = result.filter(schools_mentored__id=queried_school_mentored_id)
        if queried_school_directed is not None:
            result = result.filter(schools_directed__name=queried_school_directed)
        if queried_school_directed_id is not None:
            result = result.filter(schools_directed__id=queried_school_directed_id)

        return result
