from django.db import models


class Person(models.Model):

    # Abstract Class
    class Meta:
        abstract = True


class Hospital(models.Model):
    pass


class Service(models.Model):
    pass


class Appointment(models.Model):
    pass


class MedicalRecord(models.Model):
    pass


class Schedule(models.Model):
    pass


class Patient(Person):
    pass


class StaffMember(Person):


    # Abstract class
    class Meta:
        abstract = True


class HospitalManager(StaffMember):
    pass


class Doctor(StaffMember):
    pass


class FinanceEmployee(StaffMember):
    pass


class EmergencyEmployee(StaffMember):
    pass


class FrontdeskEmployee(StaffMember):
    pass


class RadiologySpecialist(StaffMember):
    pass


class LabSpecialist(StaffMember):
    pass
class df2 (models.Model):
    room = models.IntegerField(max_length = 1000)
    type = models.IntegerField(max_length = 1000)
    currcapacity = models.IntegerField(max_length = 1000)
    maxcapacity = models.IntegerField(max_length = 1000)
       
class df1(models.Model):
    jobtittle = models.CharField(max_length=1000)
    workinghours =()   #mfrod a7na nktb 7aga fixed
    salary =    #mfrod 7aga fixed 
                    
                                        