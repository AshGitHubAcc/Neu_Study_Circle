# Generated by Django 4.2.17 on 2024-12-29 04:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_tag_room_host_message_room_tag'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Tag',
            new_name='Topic',
        ),
        migrations.AlterModelOptions(
            name='room',
            options={'ordering': ['-created']},
        ),
        migrations.RenameField(
            model_name='room',
            old_name='tag',
            new_name='topic',
        ),
    ]