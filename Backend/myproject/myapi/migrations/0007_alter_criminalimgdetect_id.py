# Generated by Django 4.2.4 on 2023-11-23 15:06

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0006_alter_appusers_image_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='criminalimgdetect',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
