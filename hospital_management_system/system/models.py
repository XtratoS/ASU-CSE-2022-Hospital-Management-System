from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
import datetime 


class Person(models.Model):
    user        = models.OneToOneField(User, on_delete=models.CASCADE)
    birthDay    = models.DateField('Birthday',default=None)
    phoneNumber = models.PositiveBigIntegerField(default=0)
    # Abstract Class
    class Meta:
        abstract = True


class Hospital(models.Model):
    pass
 

class Service(models.Model):
    hospital      = models.ForeignKey('Service',on_delete=models.CASCADE) 
    service_name  = models.CharField(max_length=50)
    service_price = models.IntegerField(default=0)

class Appointment(models.Model):
    schedule   = models.ForeignKey('Schedule',related_name='appointments',on_delete=models.CASCADE)
    service    = models.OneToOneField('Service',on_delete=models.CASCADE,null=True)
    patient    = models.ForeignKey('Patient',on_delete=models.CASCADE,null=True)
    date       = models.DateField('Appointment Date',default=None)
    startTime  = models.TimeField('start time',default=datetime.time(8,0,0))
    is_booked  = models.BooleanField(default=False)
    is_payed   = models.BooleanField(default=False)
    class Meta:
        ordering = ['startTime']



class MedicalRecord(models.Model):
    doctor_describtion = models.TextField(max_length=1000)
    medical_problems   = models.TextField(max_length=1000)
    patient            = models.ForeignKey('Patient',on_delete=models.CASCADE)


class Schedule(models.Model):
    last_modified = models.DateField("schedule day",auto_now=True)
    start_time    = models.TimeField('',default=datetime.time(8,0,0))
    end_time      = models.TimeField('',default=datetime.time(2,0,0))
    
    def get_appointments(self,date=timezone.now(),booked=True):
        if self.appointment_set.count() == 0:
            for i in range(8):
                self.appointment_set.create(date=date,startTime=datetime.time(self.start_time.hour+i,0,0))
                self.appointment_set.create(date=date,startTime=datetime.time(self.start_time.hour+i,30,0))
            self.save()
        appointments = self.appointment_set.filter(date=date,is_booked=booked)
        return appointments

class Patient(Person):
    height = models.IntegerField()
    weight = models.FloatField()





class StaffMember(Person):
    salary         = models.IntegerField(default=0)
    schedule       = models.OneToOneField('Schedule', on_delete=models.CASCADE)
    # Abstract class
    class Meta:
        abstract = True


class HospitalManager(StaffMember):
    pass


class Doctor(StaffMember):
    specialization = models.CharField(default='',max_length=100)

class FinanceEmployee(StaffMember):
    pass


class EmergencyEmployee(StaffMember):
    pass


class FrontdeskEmployee(StaffMember):
    pass


class RadiologySpecialist(StaffMember):
    specialization = models.CharField(default='',max_length=100)

class LabSpecialist(StaffMember):
    specialization = models.CharField(default='',max_length=100)