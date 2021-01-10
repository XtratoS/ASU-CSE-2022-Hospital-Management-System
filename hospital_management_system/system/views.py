from django.shortcuts import HttpResponse, render

"""Home page"""
def home_view(request):
    return HttpResponse('home')

"""Register a new patient"""
def register_view(request):
    pass

"""Login as a patient or an employee"""
def login_view(request):
    pass

def logout_view(request):
    pass

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
def appointments_view(request):
    pass

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
def services_view(request):
    pass

"""List all hospital employees"""
def show_employees_view(request):
    pass

"""Get professional information for an employee"""
def show_employee_information_view(request):
    pass

"""Modify professional information for an employee"""
def edit_employee_information_view(request):
    pass