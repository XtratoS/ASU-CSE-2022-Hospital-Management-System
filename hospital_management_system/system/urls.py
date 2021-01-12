from django.urls import path
from . import views

# including the app_name to make it easier to namespace the routes
app_name = 'system'

urlpatterns = [
	path('', views.home_view),
    # Patient
    path('API/doctors/<str:dep>',views.doctor_list),

    path('API/patient/register', views.register_view),

    
    path('API/patient/reports', views.reports_view),
    path('API/patient/reports/add', views.add_report_view),
    path('API/patient/reports/edit', views.edit_report_view),


    path('API/patient/appointments', views.appointments_view),
    path('API/patient/appointments/add', views.add_appointment_view),


    path('API/hospital', views.Hospital_view),
    # Hospital Manage
    path('API/employees', views.show_employees_view),
    # Employees
    path('API/employee/schedule', views.schedule_view),
    path('API/user/information/view', views.show_user_information_view),
    path('API/user/information/edit', views.edit_user_information_view),
    path('API/patient/add_report', views.add_report_view),

]