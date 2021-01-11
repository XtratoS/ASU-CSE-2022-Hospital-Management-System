# Generated by Django 3.1.4 on 2021-01-11 14:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('system', '0003_auto_20210111_1357'),
    ]

    operations = [
        migrations.AlterField(
            model_name='department',
            name='hospital',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='system.hospital'),
        ),
        migrations.AlterField(
            model_name='room',
            name='hospital',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='system.hospital'),
        ),
        migrations.AlterField(
            model_name='service',
            name='hospital',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='system.hospital'),
        ),
    ]
