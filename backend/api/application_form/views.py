from datetime import date
from hashlib import md5
from mailchimp3 import MailChimp
from rest_framework import viewsets, views
from rest_framework.response import Response
from django.conf import settings
from api.application_form.serializers import ApplicationFormSerializer
from api.application_form.models import ApplicationForm


class ApplicationFormViewSet(viewsets.ModelViewSet):
    """
    The ViewSet for the ApplicationForm.
    """
    queryset = ApplicationForm.objects.all()
    serializer_class = ApplicationFormSerializer


class SubscribeNewsletterView(views.APIView):
    """
    This view handles subscribing to the newsletter.
    """
    permission_classes = []

    def post(self, request, *args, **kwargs):
        if not settings.USE_MAILCHIMP:
            return Response({
                "status": "error",
                "error": "Mailchimp is currently disabled."
            })
        new_user_data = {
            'email_address': request.data['email'],
            'status_if_new': 'subscribed',
            'merge_fields': {
                'N_SIGNUP_D': str(date.today())
            }
        }
        mailchimp_client = MailChimp(
            settings.MAILCHIMP_API_KEY,
            settings.MAILCHIMP_USERNAME)
        utf8_email = request.data['email'].lower().encode('utf-8')
        email_hash = md5(utf8_email)
        try:
            # add the new user to the mailchimp list
            mailchimp_client.lists.members.create_or_update(
                settings.MAILCHIMP_LIST_ID,
                email_hash.hexdigest(),  # subscriber_hash
                new_user_data)

            # due to the way the mailchimp API works, if we use create_or_update above we
            # have to set the tags for the user separately in another API call.
            tags_to_add = ['newsletter', 'mentee']
            # To add a tag, you have to send a dict with the 'name': TAG_NAME and also
            # 'status':'active'. Good luck finding this in any documentation about mailchimp3.
            tag_list = [{'name': tag_name, 'status': 'active'} for tag_name in tags_to_add]
            mailchimp_client.lists.members.tags.update(
                settings.MAILCHIMP_LIST_ID,
                email_hash.hexdigest(),
                {'tags': tag_list}
            )
            return Response({
                "status": "success",
                "request": str(new_user_data)
            })
        # TODO: Look into best practices for returning errors.
        except ValueError as value_error:
            return Response({
                "status_if_new": "error",
                "error": str(value_error)
            })
        except Exception as e:
            if e.args[0].get('title') == "Member Exists":
                error_msg = "Email is already subscribed to newsletter."
            else:
                error_msg = "Unknown error. Please try again later."
            return Response({
                "status": "error",
                "error": error_msg
            })
