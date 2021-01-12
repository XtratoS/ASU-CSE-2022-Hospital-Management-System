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

"""Get professional information for an employee"""
def show_doctor_view(request):
    pass
def check(request):
    aviroom = df2.objects.filter(type = reqtype)&(df2.objects.filter(currentcapacity<maxcapacity))

    if 
        len(aviroom) == 0
         print("no room available")
    else:
    return (aviroom)    
def allocate(room):
    
     
     #df2[(df2.room)== room]["currentcapacity"] = df2[(df2.room)== room]["currentcapacity"]+1
     # new = df2[(df2.room)== room]["currentcapacity"] old
     new = df2.objects.filter(room = room)
     new2 = new + 1
     df2.loc[df2.room==room,'currentcapacity'] = new2 >>> 3yza as2l feha
     #print(df2)
     # writer = pd.ExcelWriter('E:/ room.xlsx')
     # df2.to_excel(writer,sheet_name='Sheet1',index=False)
     # writer.save()
     print("successful allocation")
    #print(df2[(df2.room) == room])
#allocate(110)
def transfer(curroom,nextroom):
     #df2 = pd.read_excel(r'E:\ room.xlsx')
     #newi = df2[(df2.room) == curroom]["currentcapacity"]
     newi = df2.objects.filter(room=curroom)
     newii = newi - 1
     df2.loc[df2.room == curroom, 'currentcapacity'] = newii  >>so2l bardo
     #newy = df2[(df2.room) == nextroom]["currentcapacity"]
     newy=df2.objects.filter(room=nextroom)
     newyy = newy + 1
     df2.loc[df2.room == nextroom, 'currentcapacity'] = newyy
    # df2.to_excel('E:\room.xlsx')
     print("patient is sucessfully transferred")
     # writer = pd.ExcelWriter('E:/ room.xlsx')
     # df2.to_excel(writer, sheet_name='Sheet1',index=False)
     # writer.save()
     # print(df2)

   def fine(jobtittle):
    #df1 = pd.read_excel(r'E:\money.xlsx')
    wh=df1[(df1.jobtittle==jobtittle)]["workinghours"]
    wh=df1.objects.filter(jobtittle=jobtittle)
    sa = df1[(df1.jobtittle == jobtittle)]["salary"]
    sa=df1.objects.filter(jobtittle=jobtittle)
    return wh,sa