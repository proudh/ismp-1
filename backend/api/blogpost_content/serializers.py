from rest_framework import serializers
from api.blogpost.serializers import BlogpostSerializer
from .models import BlogpostContent


class BlogpostContentSerializer(serializers.ModelSerializer):
    """
    The serializer for blogpostcontent. Fairly basic, but has been slightly
    modified so that the blogpost within it will show the tag_set and topic_set.
    """
    # read_only must be set to true for many-to-many fields (tag_set, topic_set)
    # to show up.
    blogpost = BlogpostSerializer(read_only=True)

    class Meta:
        model = BlogpostContent
        fields = (
            'id',
            'blogpost',
            'title_content',
            'body_content',
            'language',
            'is_draft',
            'created_at',
            'updated_at',
            'publish_at'
        )
        depth = 2
