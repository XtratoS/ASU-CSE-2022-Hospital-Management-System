import React , {Component} from 'react';
import {Route} from 'react-router-dom';
import DoctorDashboardSidebar from './DoctorDashboardSidebar';
//  import Form from "./form";
import Scheduleitem from '../components/Schedule/schedule-items';
import Addschdule from '../components/Schedule/addschedule';
import Addinfo from '../Specialist/Addinfo';
import PatientList from './PatientList';

class DoctorDashboard extends Component{

  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };
  state = {
    items:[{
        id:1,
        date: "2021-1-14",
        starttime: "13:00",
        endtime: "13:30"
      }, {
        id:2,
        date: "2021-1-15",
        starttime: "23:00",
        endtime: "23:30"
      }, {
        id:3,
        date: "2021-1-15",
        starttime: "14:00",
        endtime: "14:30"
      }, {
        id:4,
        date: "2021-1-16",
        starttime: "15:00",
        endtime: "15:30"
  }]}

  deleteitem = (id) => {
    id.target.parentNode.remove();
  }

  addItem=(item)=>{
    item.id= Math.random();
    let items=this.state.items;
    items.push(item);
    this.setState({items})
  }

  render(){
    return(
      <div className= "text-center">
        <DoctorDashboardSidebar/>
           <Route path='/doctor/account' render={()=>{
            return(
              <div>
                <Addinfo/>
                 {/* <Form onChange={fields => this.onChange(fields)} />  */}
              </div>
            )
          }}/>  
          <Route path='/doctor/schedules' render={()=>{
            return(
              <div className="schedule pt-4 w-40 text-center m-auto">
                <h1 className="text-center">Schedule</h1>
                <Scheduleitem items={this.state.items} deleteitem={this.deleteitem} />
                <Addschdule addItem={this.addItem}/>
              </div>
            )
          }}/>

          <Route path='/doctor/patients' render={()=>(
              <PatientList/>
          )}
          />
         {/* <h1 className="text-center">Schedule</h1> 
         <Scheduleitem items={this.state.items} deleteitem={this.deleteitem} />
         <Addschdule addItem={this.addItem}/> */}

      </div>
      
    );
  }
}

export default DoctorDashboard;