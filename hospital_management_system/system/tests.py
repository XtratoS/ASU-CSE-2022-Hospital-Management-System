from django.test import TestCase
from system.models import *
from random import random
from math import floor

class SanityCheck(TestCase):
    def setUp(self):
        pass
    def test(self):
        self.assertEqual(5, 5)

class Patient(TestCase):
    def setUp(self):
        Patient.objects.create(firstname="Mamdouh", lastname="Waleed")
    def testPatientCreated(self):
        patient = Patient.objects.get(firstname="Mamdouh")
        self.assertEqual(patient.lastname, "Waleed")

class HospitalCreation(TestCase):
    def setUp(self):
        Hospital.objects.create(name="Amal Hospital")
    def testHospitalCreated(self):
        hosp_count = Hospital.objects.get(name="Amal Hospital").count()
        self.assertEqual(hosp_count, 1)
        

class Department(TestCase):
    def setUp(self):
        Department.objects.create(name="Neurology")
    def testDepartmentCreated(self):
        dep_count = Department.objects.get(name="Neurology")
    def testDepartmentGetDoctors(self):
        department = Department.objects.get(name="Neurology")
        rn = floor(random()*10) + 3
        for i in range(0, rn):
            Doctor.objects.create(firstname=f"a{i}", lastname="b{i}", department=department)
        doctor_count = department.get_doctors().count()
        self.assertEqual(doctor_count, rn)
    

class Doctor(TestCase):
    def setUp(self):
        Doctor.objects.create(firstname="Mariam", lastname="Adel", department="")
    def testDoctorCreated(self):
        doc = Doctor.objects.get(firstname="Mariam")
        self.assertEqual(doc.lastname, "Adel")
    def testAttachDoctorToPatient(self):
        patient = Patient.objects.create(firstname="A", lastname="B")
        doctor = Doctor.objects.get(firstname="Mariam", lastname="Adel")
        patient.addDoctor(doctor)
        self.assertEqual(patient.doctor.id == doctor.id)