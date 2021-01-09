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
    def get_available_appointments(specialization,date):
        doctors = Doctor.objects.filter(doctor__specialization=specialization)
        for doctor in doctors:

        return None


class Appointment(models.Model):
    schedule   = models.ForeignKey('Schedule',on_delete=models.CASCADE)
    patient    = models.ForeignKey('Patient',on_delete=models.CASCADE)
    date       = models.DateField('Appointment Date',default=None)
    startTime  = models.TimeField('start time',default=datetime.time(8,0,0))
    is_booked  = models.BoolenField(default=False)



class MedicalRecord(models.Model):
    patient = models.ForeignKey('Patient',on_delete=models.CASCADE)


class Schedule(models.Model):
    last_modified = models.DateField("schedule day",auto_now=True)
    start_time    = models.TimeField('',default=datetime.time(8,0,0))
    end_time      = models.TimeField('',default=datetime.time(2,0,0))
    
    def get_appointments(self,date=timezone.now(),booked=True):
        appointments = self.appointment_set.filter(appointment__date=date).filter(appointment__is_booked=booked)
        return appointments




class Patient(Person):
    

class StaffMember(Person):
    salary = models.IntegerField(default=0)
    # Abstract class
    class Meta:
        abstract = True


class HospitalManager(StaffMember):
    pass


class Doctor(StaffMember):
    specialization = models.CharField(default='',max_length=100)
    schedule       = models.OneToOneField('Schedule', on_delete=models.CASCADE)
    


class FinanceEmployee(StaffMember):
    pass


class EmergencyEmployee(StaffMember):
    pass


class FrontdeskEmployee(StaffMember):
    pass


class RadiologySpecialist(StaffMember):
    schedule = models.OneToOneField('Schedule', on_delete=models.CASCADE)


class LabSpecialist(StaffMember):
    schedule = models.OneToOneField('Schedule', on_delete=models.CASCADE)