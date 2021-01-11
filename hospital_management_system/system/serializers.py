from rest_framework import serializers
from system.models import *
from django.contrib.auth.models import User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email']

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'hospital', 'service_name', 'service_price']

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        service = ServiceSerializer()
        fields = ['id', 'service', 'patient','date','startTime','is_booked','is_payed']

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        user  = UserSerializer()
        depth = 1
        fields = ['id', 'user', 'weight', 'height','account_type','birthDay','phoneNumber','medicalrecord_set']  

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        depth=1
        model = Schedule
        appointments = AppointmentSerializer()
        fields = ['id', 'appointments','last_modified', 'start_time', 'end_time']     

class DoctorSerializer(serializers.ModelSerializer):
    schedule = ScheduleSerializer()
    user     = UserSerializer()
    class Meta:
        model = Doctor
        fields = ['id', 'user', 'salary', 'account_type','schedule','department','birthDay','phoneNumber']  

class MedicalRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalRecord
        fields = ['id', 'doctor_describtion', 'medical_problems']  


class RadiologySpecialistSerializer(serializers.ModelSerializer):
    schedule = ScheduleSerializer()
    user     = UserSerializer()
    class Meta:
        model = RadiologySpecialist
        fields = ['id', 'user', 'salary', 'account_type','schedule','birthDay','phoneNumber']  

class LabSpecialistSerializer(serializers.ModelSerializer):
    schedule = ScheduleSerializer()
    user     = UserSerializer()
    class Meta:
        model = LabSpecialist
        fields = ['id', 'user', 'salary','account_type', 'schedule','birthDay','phoneNumber']  



class EmergencyEmployee(serializers.ModelSerializer):
    user     = UserSerializer()
    class Meta:
        model = EmergencyEmployee
        fields = ['id', 'user', 'salary','account_type','birthDay','phoneNumber']  

class FinanceEmployeeSerializer(serializers.ModelSerializer):
    user     = UserSerializer()
    class Meta:
        model = FinanceEmployee
        fields = ['id', 'user', 'account_type','salary','birthDay','phoneNumber']  

class FrontdeskEmployeeSerializer(serializers.ModelSerializer):
    user     = UserSerializer()
    class Meta:
        model = FrontdeskEmployee
        fields = ['id', 'user', 'account_type','salary','birthDay','phoneNumber']  

class HospitalManagerSerializer(serializers.ModelSerializer):
    user     = UserSerializer()
    class Meta:
        model = HospitalManager
        fields = ['id', 'user', 'account_type','salary','birthDay','phoneNumber']  

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        depth = 1
        fields = ['id', 'hospital_name', 'service_set','department_set']  

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = HospitalManager
        fields = ['id', 'department_name']  









