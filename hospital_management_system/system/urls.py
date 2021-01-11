from django.urls import path
from . import views

# including the app_name to make it easier to namespace the routes
app_name = 'system'

urlpatterns = [
	path('doctors/',views.doctor_list),
	path('', views.home_view),
    # Patient
    path('API/patient/register', views.register_view),
    path('API/patient/reports', views.reports_view),
    path('API/patient/appointments', views.appointments_view),
    path('API/patient/appointments/add', views.add_appointment_view),
    path('API/hospital', views.Hospital_view),
    # Hospital Manage
    path('API/employees', views.show_employees_view),
    # Employees
    path('API/employee/schedule', views.schedule_view),
    path('API/employee/information/view', views.show_employee_information_view),
    path('API/employee/information/edit', views.edit_employee_information_view),
    path('API/patient/add_report', views.add_report_view),



]