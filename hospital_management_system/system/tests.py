from django.test import TestCase
from django.contrib.auth.models import User
from django.utils import timezone

from system.models import *
from random import random
from math import floor

# Create your tests here.
class HospitalTestCase(TestCase):
	def setUp(self):

user = User.objects.create_user(username="HospitalManager")
manager = HospitalManager.objects.create(account_type="HospitalManager",user=user)
hospital = Hospital.objects.create(hospital_manager=manager,hospital_name="masr")

dep =[ Department.objects.create(hospital=hospital,department_name="Cardiology"),
	Department.objects.create(hospital=hospital,department_name="Diagnostic imaging"),
	Department.objects.create(hospital=hospital,department_name="Ear nose and throat"),
	Department.objects.create(hospital=hospital,department_name="General surgery"),
	Department.objects.create(hospital=hospital,department_name="Microbiology"),
	Department.objects.create(hospital=hospital,department_name="Neurology")]

ser1 = Service.objects.create(hospital=hospital,service_name="book doctor appointment",service_price=100)
ser2 = Service.objects.create(hospital=hospital,service_name="book lab test",service_price=100)
ser3 = Service.objects.create(hospital=hospital,service_name="book radiology test",service_price=100)

for i in range(100):
	Room.objects.create(hospital=hospital)

user = User.objects.create_user(username="FinanceEmployee")
FinanceEmployee.objects.create(user=user,account_type="FinanceEmployee")

user = User.objects.create_user(username="EmergencyEmployee")
EmergencyEmployee.objects.create(user=user,account_type="EmergencyEmployee")

user = User.objects.create_user(username="FrontdeskEmployee")
FrontdeskEmployee.objects.create(user=user,account_type="FrontdeskEmployee")

for i in range(5):
	username='DOC'+str(i)+'_TEST'+str(i)
	user = User.objects.create_user(username=username,password=username+'password')
	user.first_name='First'+str(i)
	user.last_name='last'+str(i)
	user.email = 'example@gmail.com'
	sch = Schedule()
	sch.save()
	doc = Doctor(department=dep[i],user=user,
					  birthDay=timezone.now(),phoneNumber=00,schedule=sch,salary=1000,account_type="Doctor")
	doc.save()
	doc.schedule.get_appointments(booked=False)
	doc.save()
	user.save()

username=['ahmed','mohamed','said_kanka','asm3el','ma7maden']
for i in range(5):
	user = User.objects.create_user(username=username[i],password=username[i]+'password')
	patient = Patient(height=160,weight=70,user=user,
					  birthDay=timezone.now(),phoneNumber=00,account_type="Patient")
	patient.save()
	patient.doctor_set.add(Doctor.objects.get(user__username__startswith="DOC"+str(i)))
	FeedBack(doctor=Doctor.objects.get(user__username__startswith="DOC"+str(i)),feedback ="ffffeeeeddddback")
	med=MedicalRecord(patient=patient,doctor_describtion="describtion",medical_problems="problems")
	med.save()
	user.save()
	patient.save()

for i in range(5):
	username='LAB'+str(i)+'_TEST'+str(i)
	user = User.objects.create_user(username=username,password=username+'password')
	user.first_name='First'+str(i)
	user.last_name='last'+str(i)
	user.email = 'example@gmail.com'
	sch = Schedule()
	sch.save()
	lab = LabSpecialist(user=user,
					  birthDay=timezone.now(),phoneNumber=00,schedule=sch,salary=1000,account_type="LabSpecialist")
	lab.save()
	lab.schedule.get_appointments(booked=False)
	lab.save()
for i in range(5):
	username='Radio'+str(i)+'_TEST'+str(i)
	user = User.objects.create_user(username=username,password=username+'password')
	user.first_name='First'+str(i)
	user.last_name='last'+str(i)
	user.email = 'example@gmail.com'
	sch = Schedule()
	sch.save()
	radio = RadiologySpecialist(user=user,
					  birthDay=timezone.now(),phoneNumber=00,schedule=sch,salary=1000,account_type="RadiologySpecialist")
	radio.save()
	radio.schedule.get_appointments(booked=False)
	radio.save()	



class SanityCheck(TestCase):
	def setUp(self):
		pass
	def test(self):
		self.assertEqual(5, 5)

class PatientTEST(TestCase):
	def setUp(self):
		user = User.objects.create_user(username = "TESTUSERNAME",first_name="Mamdouh", last_name="Waleed")
		Patient.objects.create(user=user,account_type="Patient")
	def testPatientCreated(self):
		patient = Patient.objects.get(user__first_name="Mamdouh")
		self.assertEqual(patient.user.last_name, "Waleed")

class HospitalCreationTEST(TestCase):
	def setUp(self):
		Hospital.objects.create(hospital_name="Amal Hospital")
	def testHospitalCreated(self):
		hosp_count = Hospital.objects.filter(hospital_name="Amal Hospital").count()
		self.assertEqual(hosp_count, 1)
		

class DepartmentTEST(TestCase):
	def setUp(self):
		Department.objects.create(department_name="Neurology")
	def testDepartmentCreated(self):
		dep_count = Department.objects.get(department_name="Neurology")
	def testDepartmentGetDoctors(self):
		department = Department.objects.get(department_name="Neurology")
		rn = floor(random()*10) + 3
		for i in range(0, rn):
			user = User.objects.create_user(username = "TESTUSERNAME"+str(i),first_name=f"a{i}", last_name="b{i}",)
			Doctor.objects.create(user=user,department=department)
		doctor_count = department.doctor_set.count()
		self.assertEqual(doctor_count, rn)
	

class DoctorTEST(TestCase):
	def setUp(self):
		user = User.objects.create_user(username = "TESTUSERNAME515151",first_name="Mariam", last_name="Adel")
		Doctor.objects.create(user=user)
	def testDoctorCreated(self):
		doc = Doctor.objects.get(user__first_name="Mariam")
		self.assertEqual(doc.user.last_name, "Adel")
	def testAttachDoctorToPatient(self):
		user = User.objects.create_user(username = "TESTUSERNAME515151545454",first_name="A", last_name="B")
		patient = Patient.objects.create(user=user)
		doctor = Doctor.objects.get(user__first_name="Mariam", user__last_name="Adel")
		patient.doctor_set.add(doctor)
		self.assertEqual((patient.doctor_set.get(pk=doctor.pk).pk) == doctor.pk,True)