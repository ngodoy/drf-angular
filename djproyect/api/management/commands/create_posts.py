from django.core.management.base import BaseCommand

from api.models import Post, User
bodies = ['This is a great post', 'Another thing I wanted to share']

from faker.providers import lorem
from faker import Faker
fake = Faker()
# then add new provider to faker instance
fake.add_provider(lorem)
fake.seed(4321)

class Command(BaseCommand):
    def handle(self, *args, **options):
        users = User.objects.all()
        for x in range(0,20):
            body = fake.text()
            title=fake.sentence()
            Post.objects.create(author=users[x % users.count()], title=title, body=body)
