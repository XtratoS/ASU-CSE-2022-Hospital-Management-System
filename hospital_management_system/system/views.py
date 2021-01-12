from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.contrib.auth import authenticate,login,logout
from system.models import *
from system.serializers import *
from django.http import Http404
from django.contrib.auth.decorators import login_required
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,AllowAny


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

def home_view(request):
    return HttpResponse('home')

"""Register a new patient"""
#assuming json like this 
'''{
"username":
"first_name":
"last_name":
"password1":
"password2":
"weight":
"height":
"birthdate":
"phone_number":
""
} '''

@api_view(["POST"])
@permission_classes([AllowAny])
def register_view(request):
	data = request.data
	username = data["username"]
	first_name = data["first_name"]
	last_name = data["last_name"]
	password1 = data["password1"]
	password2 = data["password2"]
	weight = data["weight"]
	height = data["height"]
	birthdate = data["birthdate"]
	phone_number = data["phone_number"]
	if password1 == password2:
		user = User.create_user(username=username,first_name=first_name,last_name=last_name,password=password1)
		user.save()
		patient = Patient(birthday = birthdate,weight=weight,height=height,phoneNumber=phone_number,user=user,account_type="Patient")
		patient.save()






    

"""Login as a patient or an employee"""
# @csrf_exempt 
# def login_view(request):
# 	if request.method == 'POST':
# 		login_info = JSONParser().parse(request)
# 		user = authenticate(request,username=login_info["username"],password=login_info["password"])
# 		if user is not None:
# 			login(request,user=user)
# 			account = user.person
# 			account = account.account_type

# 			return JsonResponse({"account_type":account},status=status.HTTP_200_OK)
# 		else:
# 			return JsonResponse(status=status.HTTP_404_NOT_FOUND)

"""Get logged in patient reports or a single one"""
@api_view(["GET"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def reports_view(request):
	user = request.user
	patient = user.person.patient
	account = user.person.account_type
	app = patient.medicalRecord.all()
	serializers = MedicalRecordSerializer(app,many=True)
	return JsonResponse(serializer.data,status=200)
    

"""Add a new report"""
'''assumes json 
{
	"patient_id":""
	"doctor_describtion":""
	"medical_problems":""
} 
'''
@api_view(["POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def add_report_view(request):
	user = request.user
	try:
		staff = user.person.staffmember
		data = request.data 
		doctor_describtion = data["doctor_describtion"]
		medical_problems = data["medical_problems"]
		patient_id = data["patient_id"]
		medicalRecord = MedicalRecord(patient=Patient.objects.get(pk=patient_id),doctor_describtion=doctor_describtion,medical_problems=medical_problems)
		serializers = MedicalRecordSerializer(data=data)
		if serializers.is_valid():
			serializers.save()
	except:
		return JsonResponse(status= 404)





"""modify a report"""
@api_view(["POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def edit_report_view(request):
	user = request.user
	try:
		staff = user.person.staffmember
		request.data 
		serializers = MedicalRecordSerializer(data=data)
		if serializers.is_valid():
			serializers.save()
	except:
		return JsonResponse(status= 404)

"""remove a report"""
@api_view(["POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def delete_report_view(request):
    pass




"""Get logged in patient appointments or a single one"""

@api_view(["GET"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def appointments_view(request):
	user = request.user
	patient = user.person.patient
	account = user.person.account_type
	app = patient.appointments.all()
	serializers = AppointmentSerializer(app,many=True)
	return JsonResponse(serializer.data,status=200)
	



"""Add a new appointment"""

def add_appointment_view(request):
    pass

"""modify appointment"""
@api_view(["POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def edit_appointment_view(request):
	data=JSONParser().parse(request)
	serializer = AppointmentSerializer(data=data)
	if serializer.is_valid():
		serializer.save()
	return JsonResponse(status=201)

"""remove appointment"""
@api_view(["POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def delete_appointment_view(request):
	request.data
	request.data["is_booked"]=False
	request.data["patient"]=None
	serializer = AppointmentSerializer(data=data)
	if serializer.is_valid():
		serializer.save()
	return JsonResponse(status=200)



"""Get an employee's schedule"""
@api_view(["GET","POST"])
@csrf_exempt
def schedule_view(request):
	data = request.data
	pk = data["id"]
	staff = StaffMember.objects.get(pk=pk)
	serializer = ScheduleSerializer(staff)
	return JsonResponse(serializer.data)

"""Get available services along with information about them"""
@api_view(["GET","POST"])
@csrf_exempt
def Hospital_view(request):
	hospital = Hospital.objects.filter(hospital_name__startswith ="HOSPITAL")
	serializer = HospitalSerializer(hospital)
	return JsonResponse(serializer.data,safe=False)

"""List all hospital employees"""
@api_view(["GET"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def show_employees_view(request):
	user = request.user
	account = user.person.account_type
	pk = user.person.pk
	if account == "HospitalManager":
		docs              = Doctor.objects.all()
		lab               = LabSpecialist.objects.all()
		radio             = RadiologySpecialist.objects.all()
		FinanceEmployee   = FinanceEmployee.objects.all()
		EmergencyEmployee = EmergencyEmployee.objects.all()
		FrontdeskEmployee = FrontdeskEmployee.objects.all()

		DoctorSerializer = DoctorSerializer(docs,many=True)
		RadiologySpecialistserializer = RadiologySpecialistSerializer(radio,many=True)
		LabSpecialistserializer = LabSpecialistSerializer(lab,many=True)
		FinanceEmployeeserializer = FinanceEmployeeSerializer(FinanceEmployee,many=True)
		EmergencyEmployeeserializer = EmergencyEmployeeSerializer(EmergencyEmployee,many=True)
		FrontdeskEmployeeserializer = FrontdeskEmployeeSerializer(FrontdeskEmployee,many=True)
		return JsonResponse({"Doctor":DoctorSerializer.data,
		"RadiologySpecialist":RadiologySpecialistserializer.data,
		"LabSpecialist":LabSpecialistserializer.data,
		"FinanceEmployee":FinanceEmployeeserializer.data,
		"EmergencyEmployee":EmergencyEmployeeserializer.data,
		"FrontdeskEmployee":FrontdeskEmployeeserializer.data
		},status=201)
	else:
		return JsonResponse(status=status.HTTP_404_NOT_FOUND)





    

"""Get professional information for an user"""
# gets all the information about logged in user 
@api_view(["GET"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def show_user_information_view(request):
	user = request.user
	account = user.person.account_type
	pk = user.person.pk
	try:
		if account == "Patient":
			patient = patient.objects.get(pk=pk)
			serializer = PatientSerializer(patient)
			return JsonResponse(serializer.data)
		elif account =="Doctor":
			doc = Doctor.objects.get(pk=pk)
			serializer = DoctorSerializer(doc)
			return JsonResponse(serializer.data)
		elif account =="RadiologySpecialist":
			RadiologySpecialist = RadiologySpecialist.objects.get(pk=pk)
			serializer = RadiologySpecialistSerializer(RadiologySpecialist)
			return JsonResponse(serializer.data)
		elif account =="LabSpecialist":
			LabSpecialist = LabSpecialist.objects.get(pk=pk)
			serializer = LabSpecialistSerializer(LabSpecialist)
			return JsonResponse(serializer.data)
		elif account =="FinanceEmployee":
			FinanceEmployee = FinanceEmployee.objects.get(pk=pk)
			serializer = FinanceEmployeeSerializer(FinanceEmployee)
			return JsonResponse(serializer.data)
		elif account =="EmergencyEmployee":
			EmergencyEmployee = EmergencyEmployee.objects.get(pk=pk)
			serializer = EmergencyEmployeeSerializer(EmergencyEmployee)
			return JsonResponse(serializer.data)
		elif account =="FrontdeskEmployee":
			FrontdeskEmployee = FrontdeskEmployee.objects.get(pk=pk)
			serializer = DoctorSerializer(FrontdeskEmployee)
			return JsonResponse(serializer.data)
		elif account =="HospitalManager":
			HospitalManager = HospitalManager.objects.get(pk=pk)
			serializer = DoctorSerializer(HospitalManager)
			return JsonResponse(serializer.data)
	except:
		return JsonResponse(status=status.HTTP_404_NOT_FOUND)

"""Modify professional information for an employee"""
# edits all the information about logged in user 
@api_view(["POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def edit_user_information_view(request):
	user = request.user
	account = user.person.account_type
	pk = user.person.pk
	data=JSONParser().parse(request)
	try:
		if account == "Patient":
			serializer = PatientSerializer(data=data)
		elif account =="Doctor":
			serializer = DoctorSerializer(data=data,partial=True)
		elif account =="RadiologySpecialist":
			serializer = RadiologySpecialistSerializer(data=data,partial=True)
		elif account =="LabSpecialist":
			serializer = LabSpecialistSerializer(data=data,partial=True)
		elif account =="FinanceEmployee":
			serializer = FinanceEmployeeSerializer(data=data,partial=True)
		elif account =="EmergencyEmployee":
			serializer = EmergencyEmployeeSerializer(data=data,partial=True)
		elif account =="FrontdeskEmployee":
			serializer = DoctorSerializer(data=data,partial=True)
		elif account =="HospitalManager":
			serializer = DoctorSerializer(data=data,partial=True)
		if serializer.is_valid():
			serializer.save()
		return JsonResponse(serializer.data,status=201)
	except:
		return JsonResponse(serializer.errors, status=400)

## Missing proper decorators to give permission to front desk agents only
def show_available_rooms_view(request):
	try:
		available_rooms = hospital.objects.all().first()
		serliazed_rooms = RoomSerializer(available_rooms)
		return JsonResponse(serliazed_rooms)
	except:
		return JsonResponse(RoomSerializer(Room.objects.all()))