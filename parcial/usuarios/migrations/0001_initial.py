# Generated by Django 4.2.1 on 2023-06-02 01:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=30)),
                ('telefono', models.CharField(max_length=20)),
                ('gusto', models.CharField(max_length=20)),
                ('porc', models.IntegerField()),
            ],
        ),
    ]