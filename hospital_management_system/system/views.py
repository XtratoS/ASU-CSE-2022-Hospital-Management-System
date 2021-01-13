from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.contrib.auth import authenticate,login,logout
from system.models import *
from system.serializers import *
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,AllowAny
from django.contrib.auth.models import User

""" 
doctor_list:does not need authintication
returns doctor in department dep
examble 
request :http GET http://127.0.0.1:8000/API/doctors/Cardiology
JSONresponce
[
    {
        "account_type": "Doctor",
        "birthDay": "2021-01-12",
        "department": {
            "department_name": "Cardiology",
            "id": 1
        },
        "id": 5,
        "phoneNumber": 0,
        "salary": 1000,
        "schedule": {
            "end_time": "02:00:00",
            "id": 1,
            "last_modified": "2021-01-12",
            "start_time": "08:00:00"
        },
        "user": {
            "email": "example@gmail.com",
            "first_name": "First0",
            "id": 5,
            "last_name": "last0"
        }
    }
]



"""
@api_view(["GET"])
@csrf_exempt
@permission_classes([AllowAny])
def doctor_list(request,dep):
	doc = Doctor.objects.filter(department__department_name=dep)
	serializer = DoctorSerializer(doc,many=True)
	return JsonResponse(serializer.data,safe=False)
	
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
} '''
'''
tested with
{
 "username":"aminatef33" ,
 "password1":"aminatef33" ,
 "password2":"aminatef33" ,
 "weight":80 ,
 "height":175 , 
 "phoneNumber":65 ,
 "first_name":"amin" ,
 "last_name":"atef"
}
'''
@api_view(["POST"])
@csrf_exempt
@permission_classes([AllowAny])
def register_view(request):
	data=JSONParser().parse(request)
	try:
		username = data.get("username")
		first_name = data.get("first_name")
		last_name = data.get("last_name")
		password1 = data.get("password1")
		password2 = data.get("password2")
		weight = data.get("weight")
		height = data.get("height")
		birthdate = data["birthday"]
		phone_number = data["phoneNumber"]
		if password1 == password2:
			try:
				user = User.objects.create_user(username=username,first_name=first_name,last_name=last_name,password=password1)
				user.save()
			except:
				return JsonResponse({"error":"username is taken"},status=406)

			patient = Patient(weight=weight,height=height,phoneNumber=phone_number,user=user,account_type="Patient")
			patient.save()
			serializer=PatientSerializer(patient)
			return JsonResponse(serializer.data,status=201)
	except :
		return JsonResponse(data,status=406)
	return JsonResponse({"error":"passwords are not the same"},status=406)






"""Get logged in patient reports or a single one"""
"""
patient must be logged in 
example :
logges in  
echo '{"username":"ahmed","password":"ahmedpassword"}'|http POST http://127.0.0.1:8000/login/
api sends an authrization token :
{
    "key": "bcd1d0c9c71538183a4d12a447e8b2adb18fdbeb"
}
get request :
curl -X GET -H 'Authorization: Token 556f562f03a9f57d155163c740854826896f6197' localhost:8000/API/patient/reports
returns :
[
{
"id": 1, # thats record id
 "doctor_describtion": "describtion",
  "medical_problems": "problems",
   "patient": 10 #patient id
}
]

"""
@api_view(["GET"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def reports_view(request):
	user = request.user
	patient = user.person.patient
	app = MedicalRecord.objects.filter(patient__pk=patient.pk)
	serializer = MedicalRecordSerializer(app,many=True)
	return JsonResponse(serializer.data,status=200,safe=False)
    

"""Add a new report"""

'''assumes json 
{
	"patient":
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
		data=JSONParser().parse(request)
		doctor_describtion = data["doctor_describtion"]
		medical_problems = data["medical_problems"]
		patient_id = data["patient"]
		medicalRecord = MedicalRecord(patient=Patient.objects.get(pk=patient_id),doctor_describtion=doctor_describtion,medical_problems=medical_problems)
		serializers = MedicalRecordSerializer(medicalRecord)
		if serializers.is_valid():
			serializers.save()
		return JsonResponse(serializers.data,status=201)
	except:
		return JsonResponse(status= 404)





"""modify a report"""
""" 
must be Authenticated and a staff member
{
 "id": 9,
 "doctor_describtion": "",
 "medical_problems": "",
 "patient": 10
 }

"""
@api_view(["POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def edit_report_view(request):
	user = request.user
	#try:
	staff = user.person.staffmember
	data=JSONParser().parse(request)
	pk = data["id"]
	record = MedicalRecord.objects.get(pk=pk)
	#record.doctor_describtion = data["doctor_describtion"]
	#record.medical_problems=data["medical_problems"]
	#record.save()
	serializer = MedicalRecordSerializer(record,data,partial=True)
	if serializer.is_valid():
		serializer.save()
	return JsonResponse(serializer.data,status=201)
	#except:
	#	return JsonResponse(data,status= 404)

"""remove a report"""
@api_view(["POST","DELETE"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def delete_report_view(request):
	user = request.user
	data=JSONParser().parse(request)
	try:
		staff = user.person.staffmember
		pk = data["id"]
		record = MedicalRecord.objects.get(pk=pk)
		record.delete(keep_parents=True)
		return JsonResponse(data,status= 200)
	except:
		return JsonResponse(data,status= 404)

@api_view(["POST","DELETE"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def deleteByID_report_view(request,pk):
	user = request.user
	try:
		staff = user.person.staffmember
		record = MedicalRecord.objects.get(pk=pk)
		record.delete(keep_parents=True)
		return JsonResponse({"id":pk},status= 200)
	except:
		return JsonResponse({"id":pk},status= 404)




"""Get logged in patient appointments or a single one"""

@api_view(["GET"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def appointments_view(request):
	user = request.user
	patient = user.person.patient
	app = patient.appointment_set.all()
	serializer = AppointmentSerializer(app,many=True)
	return JsonResponse(serializer.data,safe=False,status=200)
	

"""
Add a new appointment
expecting 
books appointment to the logged in patient
{
	id: 	 #appointment id

}

{
   "id": 15,
   "service": null,
   "patient": 10,
   "date": "2021-01-12",
   "startTime": "15:00:00",
   "is_booked": true,
   "is_payed": false
}

"""
@api_view(["POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def book_appointment_view(request):
	data=JSONParser().parse(request)
	try:
		appID= data["id"]
		pk = request.user.person.patient.pk
	except:
		return JsonResponse(data,status=400)

	try:
		app = Appointment.objects.get(pk=appID)
		app.patient = Patient.objects.get(pk=pk)
		app.is_booked=True
		app.save()
		serializer = AppointmentSerializer(app)
		return JsonResponse(serializer.data,safe=False,status=200)
	except:
		return JsonResponse(data,status=404)


    

"""modify appointment"""
'''
exepecting something like this
{
   "id": 15,
   "service": null,
   "patient": 10,
   "date": "2021-01-12",
   "startTime": "15:00:00",
   "is_booked": true,
   "is_payed": false
}
'''

@api_view(["POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def edit_appointment_view(request):
	data=JSONParser().parse(request)
	try:
		app = Appointment.objects.get(pk=data["id"])
	except:
		return JsonResponse(data,status=404)
	serializer = AppointmentSerializer(app,data=data,partial=True)
	if serializer.is_valid():
		serializer.save()
		return JsonResponse(serializer.data,status=201)
	else:
		return JsonResponse(serializer.data,status=400)


"""remove appointment"""
# {
# 	id:#appointment id
# }
@api_view(["POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def delete_appointment_view(request):
	data=JSONParser().parse(request)
	try:
		app = Appointment.objects.get(pk=data["id"])
		app.is_booked=False
		app.patient=None
	except:
		return JsonResponse(data,status=406)

	app.save()
	serializer = AppointmentSerializer(Appointment.objects.get(pk=data["id"]))
	return JsonResponse(serializer.data,status=200)



"""Get an employee's schedule"""
'''

{
	id: #doctor/lab spcialst/radiology id
} 
'''
@api_view(["GET","POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def schedule_view(request):
	data=JSONParser().parse(request)
	pk = data["id"]
	try:
		staff = StaffMember.objects.get(pk=pk)
	except:
		return JsonResponse(serializer.data,status=404)

	serializer = ScheduleSerializer(staff.schedule)
	return JsonResponse(serializer.data,status=200)

"""Get available services along with information about them"""

'''
RETURNS
{
"id": 1, 
"hospital_name": "masr", 
"service_set": [
				{"id": 1, "service_name": "book doctor appointment", "service_price": 100, "hospital": 1},
				{"id": 2, "service_name": "book lab test", "service_price": 100, "hospital": 1},
				{"id": 3, "service_name": "book radiology test", "service_price": 100, "hospital": 1}
			   ],
"department_set": [
 					{"id": 1, "department_name": "Cardiology", "hospital": 1},
 					{"id": 2, "department_name": "Diagnostic imaging", "hospital": 1},
 					{"id": 3, "department_name": "Ear nose and throat", "hospital": 1},
 					{"id": 4, "department_name": "General surgery", "hospital": 1},
 					{"id": 5, "department_name": "Microbiology", "hospital": 1},
 					{"id": 6, "department_name": "Neurology", "hospital": 1}
 				   ]
}
 '''
@api_view(["GET"])
@csrf_exempt
@permission_classes([AllowAny])
def Hospital_view(request):
	hospital = Hospital.objects.all()
	serializer = HospitalSerializer(hospital[0])
	return JsonResponse(serializer.data)

"""List all hospital employees"""
''' {"Doctor": 
				[
				{"id": 5,
				 "user": {
				 		  "id": 5,
				 		  "first_name": "First0",
				 	      "last_name": "last0",
				 		  "email": "example@gmail.com"
				 		 },
				 "salary": 1000,
				 "account_type": "Doctor",
				 "department": {
				 				 "id": 1,
				 				 "department_name": "Cardiology"
				 				},
				 "birthDay": "2021-01-13",
				 "phoneNumber": 0
				 				},
				{"id": 6, "user": {"id": 6, "first_name": "First1", "last_name": "last1", "email": "example@gmail.com"}, "salary": 1000, "account_type": "Doctor", "department": {"id": 2, "department_name": "Diagnostic imaging"}, "birthDay": "2021-01-13", "phoneNumber": 0}, 
				{"id": 7, "user": {"id": 7, "first_name": "First2", "last_name": "last2", "email": "example@gmail.com"}, "salary": 1000, "account_type": "Doctor", "department": {"id": 3, "department_name": "Ear nose and throat"}, "birthDay": "2021-01-13", "phoneNumber": 0},
				{"id": 8, "user": {"id": 8, "first_name": "First3", "last_name": "last3", "email": "example@gmail.com"}, "salary": 1000, "account_type": "Doctor", "department": {"id": 4, "department_name": "General surgery"}, "birthDay": "2021-01-13", "phoneNumber": 0},
				{"id": 9, "user": {"id": 9, "first_name": "First4", "last_name": "last4", "email": "example@gmail.com"}, "salary": 1000, "account_type": "Doctor", "department": {"id": 5, "department_name": "Microbiology"}, "birthDay": "2021-01-13", "phoneNumber": 0}
				], 
	 "RadiologySpecialist": [{"id": 20, "user": {"id": 20, "first_name": "", "last_name": "", "email": ""}, "salary": 1000, "account_type": "RadiologySpecialist", "birthDay": "2021-01-13", "phoneNumber": 0}, {"id": 21, "user": {"id": 21, "first_name": "", "last_name": "", "email": ""}, "salary": 1000, "account_type": "RadiologySpecialist", "birthDay": "2021-01-13", "phoneNumber": 0}, {"id": 22, "user": {"id": 22, "first_name": "", "last_name": "", "email": ""}, "salary": 1000, "account_type": "RadiologySpecialist", "birthDay": "2021-01-13", "phoneNumber": 0}, {"id": 23, "user": {"id": 23, "first_name": "", "last_name": "", "email": ""}, "salary": 1000, "account_type": "RadiologySpecialist", "birthDay": "2021-01-13", "phoneNumber": 0}, {"id": 24, "user": {"id": 24, "first_name": "", "last_name": "", "email": ""}, "salary": 1000, "account_type": "RadiologySpecialist", "birthDay": "2021-01-13", "phoneNumber": 0}],
	 "LabSpecialist": [{"id": 15, "user": {"id": 15, "first_name": "", "last_name": "", "email": ""}, "salary": 1000, "account_type": "LabSpecialist", "birthDay": "2021-01-13", "phoneNumber": 0}, {"id": 16, "user": {"id": 16, "first_name": "", "last_name": "", "email": ""}, "salary": 1000, "account_type": "LabSpecialist", "birthDay": "2021-01-13", "phoneNumber": 0}, {"id": 17, "user": {"id": 17, "first_name": "", "last_name": "", "email": ""}, "salary": 1000, "account_type": "LabSpecialist", "birthDay": "2021-01-13", "phoneNumber": 0}, {"id": 18, "user": {"id": 18, "first_name": "", "last_name": "", "email": ""}, "salary": 1000, "account_type": "LabSpecialist", "birthDay": "2021-01-13", "phoneNumber": 0}, {"id": 19, "user": {"id": 19, "first_name": "", "last_name": "", "email": ""}, "salary": 1000, "account_type": "LabSpecialist", "birthDay": "2021-01-13", "phoneNumber": 0}],

	 "FinanceEmployee": [
	 						{
	 						  "id": 2,
	 						  "user": {"id": 2, "first_name": "", "last_name": "", "email": ""},
	 						  "account_type": "FinanceEmployee", 
	 						  "salary": 0, 
	 						  "birthDay": null,
	 						  "phoneNumber": 0
	 						 }
	                    ],
	 "EmergencyEmployee": [{"id": 3, "user": {"id": 3, "first_name": "", "last_name": "", "email": ""}, "salary": 0, "account_type": "EmergencyEmployee", "birthDay": null, "phoneNumber": 0}],
	 "FrontdeskEmployee": [{"id": 4, "user": {"id": 4, "first_name": "", "last_name": "", "email": ""}, "account_type": "FrontdeskEmployee", "salary": 0, "birthDay": null, "phoneNumber": 0}]}
'''

@api_view(["GET"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def show_employees_view(request):
	user = request.user
	account = user.person.account_type
	if account == "HospitalManager":
		docs       = Doctor.objects.all()
		lab        = LabSpecialist.objects.all()
		radio      = RadiologySpecialist.objects.all()
		fainance   = FinanceEmployee.objects.all()
		emergency  = EmergencyEmployee.objects.all()
		frontdesk  = FrontdeskEmployee.objects.all()

		Serializer = DoctorSerializer(docs,many=True)
		RadiologySpecialistserializer = RadiologySpecialistSerializer(radio,many=True)
		LabSpecialistserializer = LabSpecialistSerializer(lab,many=True)
		FinanceEmployeeserializer = FinanceEmployeeSerializer(fainance,many=True)
		EmergencyEmployeeserializer = EmergencyEmployeeSerializer(emergency,many=True)
		FrontdeskEmployeeserializer = FrontdeskEmployeeSerializer(frontdesk,many=True)
		return JsonResponse({"Doctor":Serializer.data,
		"RadiologySpecialist":RadiologySpecialistserializer.data,
		"LabSpecialist":LabSpecialistserializer.data,
		"FinanceEmployee":FinanceEmployeeserializer.data,
		"EmergencyEmployee":EmergencyEmployeeserializer.data,
		"FrontdeskEmployee":FrontdeskEmployeeserializer.data
		},status=201)
	else:
		return JsonResponse({"error":"unauthorized"},status=401)


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
			patient = Patient.objects.get(pk=pk)
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
			serializer = FrontdeskEmployeeSerializer(FrontdeskEmployee)
			return JsonResponse(serializer.data)
		elif account =="HospitalManager":
			HospitalManager = HospitalManager.objects.get(pk=pk)
			serializer = HospitalManagerSerializer(HospitalManager)
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
			obj = Patient.objects.get(pk=pk)
			serializer = PatientSerializer(obj,data=data,partial=True)
			if serializer.is_valid():
				serializer.save()
		elif account =="Doctor":
			obj = Patient.objects.get(pk=pk)
			serializer = DoctorSerializer(obj,data=data,partial=True)
			if serializer.is_valid():
				serializer.save()
		elif account =="RadiologySpecialist":
			obj = Patient.objects.get(pk=pk)
			serializer = RadiologySpecialistSerializer(obj,data=data,partial=True)
			if serializer.is_valid():
				serializer.save()
		elif account =="LabSpecialist":
			obj = Patient.objects.get(pk=pk)
			serializer = LabSpecialistSerializer(obj,data=data,partial=True)
			if serializer.is_valid():
				serializer.save()
		elif account =="FinanceEmployee":
			obj = Patient.objects.get(pk=pk)
			serializer = FinanceEmployeeSerializer(obj,data=data,partial=True)
			if serializer.is_valid():
				serializer.save()
		elif account =="EmergencyEmployee":
			obj = Patient.objects.get(pk=pk)
			serializer = EmergencyEmployeeSerializer(obj,data=data,partial=True)
			if serializer.is_valid():
				serializer.save()
		elif account =="FrontdeskEmployee":
			obj = Patient.objects.get(pk=pk)
			serializer = DoctorSerializer(obj,data=data,partial=True)
			if serializer.is_valid():
				serializer.save()
		elif account =="HospitalManager":
			obj = Patient.objects.get(pk=pk)
			serializer = DoctorSerializer(obj,data=data,partial=True)
			if serializer.is_valid():
				serializer.save()
		if serializer.is_valid():
			serializer.save()
		return JsonResponse(serializer.data,status=201)
	except:
		return JsonResponse(serializer.errors, status=400)
		
def show_available_rooms_view(request):
	try:
		available_rooms = hospital.objects.all().first()
		serliazed_rooms = RoomSerializer(available_rooms)
		return JsonResponse(serliazed_rooms)
	except:
		return JsonResponse(RoomSerializer(Room.objects.all()))

    