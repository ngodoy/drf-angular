from django.shortcuts import render
from rest_framework import generics, permissions

from .serializers import *
from .models import *

# Create your views here.

class UserList(generics.ListAPIView):
    model = User
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [
        permissions.AllowAny
    ]

class UserDetail(generics.RetrieveAPIView):
    model = User
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'

class UserPostList(generics.ListAPIView):
    model = Post
    serializer_class = PostSerializer

    def get_queryset(self):
        username = self.kwargs['username']
        return Post.objects.filter(author__username=username)



class PhotoList(generics.ListCreateAPIView):
    model = Photo
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    permission_classes = [
        permissions.AllowAny
    ]

class PhotoDetail(generics.RetrieveUpdateDestroyAPIView):
    model = Photo
    serializer_class = PhotoSerializer
    permission_classes = [
        permissions.AllowAny
    ]

class PostPhotoList(generics.ListAPIView):
    model = Photo
    serializer_class = PhotoSerializer
    def get_queryset(self):
        pk = self.kwargs['pk']
        return Photo.objects.filter(post__pk=pk)

class PostMixin(object):
    model = Post
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [
        permissions.AllowAny #Custom
    ]

    def pre_save(self, obj):
        """Force author to the current user on save"""
        obj.author = self.request.user
        return super(PostMixin, self).pre_save(obj)


class PostList(PostMixin, generics.ListCreateAPIView):
    pass


class PostDetail(PostMixin, generics.RetrieveUpdateDestroyAPIView):
    pass
