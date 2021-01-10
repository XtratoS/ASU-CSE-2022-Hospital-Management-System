from django.test import TestCase
from django.contrib.auth.models import User
from django.utils import timezone
from system.models import Person,Service,Appointment,MedicalRecord,Schedule,Patient,Doctor,LabSpecialist,RadiologySpecialist
# Create your tests here.
class UserTestCase(TestCase):
	def setUp(self):
		username=['ahmed','mohamed','said_kanka','asm3el','ma7maden']
		for i in range(5):
			user = User.objects.create_user(username=username[i],password=username[i]+'Password')
			patient = Patient(height=160,weight=70,user=user,
				              birthDay=timezone.now(),phoneNumber=00)
			user.save()
			patient.save()

		for i in range(5):
			username='DOC'+str(i)+'_TEST'+str(i)
			user = User.objects.create_user(username=username,password=username+'password')
			user.first_name='First'+str(i)
			user.last_name='last'+str(i)
			user.email = 'example@gmail.com'
			sch = Schedule()
			sch.save()
			doc = Doctor(specialization='spec',user=user,
				              birthDay=timezone.now(),phoneNumber=00,schedule=sch,salary=1000)
			doc.save()
			doc.schedule.get_appointments(booked=False)
			doc.save()
			user.save()

		for i in range(5):
			username='LAB'+str(i)+'_TEST'+str(i)
			user = User.objects.create_user(username=username,password=username+'password')
			user.first_name='First'+str(i)
			user.last_name='last'+str(i)
			user.email = 'example@gmail.com'
			sch = Schedule()
			sch.save()
			lab = LabSpecialist(user=user,
				              birthDay=timezone.now(),phoneNumber=00,schedule=sch,salary=1000)
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
				              birthDay=timezone.now(),phoneNumber=00,schedule=sch,salary=1000)
			radio.save()
			radio.schedule.get_appointments(booked=False)
			radio.save()	










