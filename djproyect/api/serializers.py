from rest_framework import serializers

from .models import User, Post, Photo


class AlbumSerializer(serializers.HyperlinkedModelSerializer):
    pass

class UserSerializer(serializers.HyperlinkedModelSerializer):
    posts = serializers.HyperlinkedIdentityField(view_name='userpost-list', lookup_field='username')

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'posts', )

class PostSerializer(serializers.HyperlinkedModelSerializer):
    photos = serializers.HyperlinkedIdentityField(view_name='postphoto-list',lookup_field='pk')
    author = serializers.HyperlinkedRelatedField(view_name='user-detail', lookup_field='username', read_only=True)

    def get_validation_exclusions(self, *args, **kwargs):
        # Need to exclude `user` since we'll add that later based off the request
        exclusions = super(PostSerializer, self).get_validation_exclusions(*args, **kwargs)
        return exclusions + ['author']

    class Meta:
        model = Post


class PhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photo