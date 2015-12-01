# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='email',
            field=models.EmailField(default=datetime.datetime(2015, 12, 1, 14, 30, 48, 347788, tzinfo=utc), unique=True, max_length=100),
            preserve_default=False,
        ),
    ]
