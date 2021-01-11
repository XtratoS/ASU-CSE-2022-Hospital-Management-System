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


# def doctor_list(request):
# 	if request.method == 'GET':
# 		doc = Doctor.objects.all()
# 		serializer = DoctorSerializer(doc,many=True)
# 		return JsonResponse(serializer.data,safe=False)
# 	elif request.method == 'POST':
# 		data=JSONParser().parse(request)
# 		serializer = DoctorSerializer(data=data)
# 		if serializer.is_valid:
# 			serializer.save()
# 			return JsonResponse(serializer.data,status=201)
# 		return JsonResponse(serializer.errors, status=400)

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
def reports_view(request):
    pass

"""Add a new report"""
def add_report_view(request):
    pass

"""modify a report"""
def edit_report_view(request):
    pass

"""remove a report"""
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
	return JsonResponse(serializer.data,)
	



"""Add a new appointment"""
def add_appointment_view(request):
    pass

"""modify appointment"""
def edit_appointment_view(request):
    pass

"""remove appointment"""
def delete_appointment_view(request):
    pass

"""Get an employee's schedule"""
def schedule_view(request):
    pass

"""Get available services along with information about them"""

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





    

"""Get professional information for an employee"""
@api_view(["GET"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def show_employee_information_view(request):
	user = request.user
	account = user.person.account_type
	pk = user.person.pk
	try:
		if account =="Doctor":
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
@api_view(["POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def edit_employee_information_view(request):
	user = request.user
	account = user.person.account_type
	pk = user.person.pk
	data=JSONParser().parse(request)
	try:
		if account =="Doctor":
			serializer = DoctorSerializer(data=data,partial=True)
			return JsonResponse(serializer.data,status=201)
		elif account =="RadiologySpecialist":
			serializer = RadiologySpecialistSerializer(data=data,partial=True)
			return JsonResponse(serializer.data)
		elif account =="LabSpecialist":
			serializer = LabSpecialistSerializer(data=data,partial=True)
			return JsonResponse(serializer.data)
		elif account =="FinanceEmployee":
			serializer = FinanceEmployeeSerializer(data=data,partial=True)
			return JsonResponse(serializer.data)
		elif account =="EmergencyEmployee":
			serializer = EmergencyEmployeeSerializer(data=data,partial=True)
			return JsonResponse(serializer.data)
		elif account =="FrontdeskEmployee":
			serializer = DoctorSerializer(data=data,partial=True)
			return JsonResponse(serializer.data)
		elif account =="HospitalManager":
			serializer = DoctorSerializer(data=data,partial=True)
			return JsonResponse(serializer.data)
	except:
		return JsonResponse(serializer.errors, status=400)

    