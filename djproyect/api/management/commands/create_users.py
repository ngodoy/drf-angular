from django.core.management.base import BaseCommand

from api.models import User
from faker.providers import person
faker = person.Provider
from faker import Faker
fake = Faker()


# then add new provider to faker instance
fake.add_provider(person)
fake.seed(4321)

class Command(BaseCommand):
    def handle(self, *args, **options):
        users = ['Bob', 'Sally', 'Joe', 'Rachel']
        for _ in range(0,20):
            username = fake.first_name()
            print username.lower()
            #User.objects.create(username=username.lower(), email="{}@example.com".format(username), first_name=username)