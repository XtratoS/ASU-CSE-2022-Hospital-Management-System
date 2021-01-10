from rest_framework import serializers
from system.models import Person ,Service,Appointment,MedicalRecord,Schedule,Patient,Doctor
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
        fields = ['id', 'user', 'weight', 'height','birthDay','phoneNumber']  

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
        fields = ['id', 'user', 'salary', 'schedule','specialization','birthDay','phoneNumber']  


