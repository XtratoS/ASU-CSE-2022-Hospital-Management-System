# Generated by Django 3.1.4 on 2021-01-11 17:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('system', '0004_auto_20210111_1403'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicalrecord',
            name='patient',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='system.patient'),
        ),
    ]