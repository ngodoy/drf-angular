import os
import os.path

from django.core.management.base import BaseCommand
from django.conf import settings
from api.models import Photo, Post

class Command(BaseCommand):
    sample_dir = 'samples'
    def handle(self, *args, **options):
        sample_images = [os.path.join(self.sample_dir, fn) for fn in os.listdir(os.path.join(settings.MEDIA_ROOT, self.sample_dir))]

        posts = Post.objects.all()

        for i, post in enumerate(posts):
            Photo.objects.create(post=post, image=sample_images[i % len(sample_images)])

