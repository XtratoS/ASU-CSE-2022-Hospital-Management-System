import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import './doctor.css'
class DoctorDashboardSidebar extends Component{
   render(){
      return(
         <div className="sidebar">
            <header>Doctors Administration Dashboard</header>
            <ul className="sidebar-ul">
               <li className="sidebar-li"><Link to="/doctor/account">My Account</Link></li>
               <li className="sidebar-li"><Link to="/doctor/schedules">My Schedules</Link></li>
               <li className="sidebar-li"><Link to="/doctor/medical">Medical Records</Link></li>
               <li className="sidebar-li"><Link to="/doctor/requset">Requset test</Link></li>
               <li className="sidebar-li"><Link to="/logout">Logout</Link></li>
            </ul>
         </div>
      )
   }

}
export default DoctorDashboardSidebar; 