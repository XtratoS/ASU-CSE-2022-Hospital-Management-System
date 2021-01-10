from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from system.models import Person,Service,Appointment,MedicalRecord,Schedule,Patient,Doctor,LabSpecialist,RadiologySpecialist
from system.serializers import ServiceSerializer,AppointmentSerializer,PatientSerializer,ScheduleSerializer,DoctorSerializer
# Create your views here.
# def get_first_available_doctor_appointments(self,specialization):
#         doctors = Doctor.objects.filter(doctor__specialization=specialization)
#         date = datetime.datetime.now()
#         appointments=[]
#         for doctor in doctors:
#             while doc_appoint != 0:
#                 doc_appoint = doctor.schdule.get_appointments(date=date, booked=False)
#                 date = date.replace(day=date.day +1)
#             docs_free_appointments.append(doc_appoint)
#         for free_appoints in docs_free_appointments:
@csrf_exempt
def doctor_list(request):
	if request.method == 'GET':
		doc = Doctor.objects.all()
		serializer = DoctorSerializer(doc,many=True)
		return JsonResponse(serializer.data,safe=False)
	elif request.method == 'POST':
		data=JSONParser().parse(request)
		serializer = DoctorSerializer(data=data)
		if serializer.is_valid:
			serializer.save()
			return JsonResponse(serializer.data,status=201)
		return JsonResponse(serializer.errors, status=400)

