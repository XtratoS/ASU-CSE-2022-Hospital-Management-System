import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import './DoctorDashboardSidebar.css'
class PatientDashboardSidebar extends Component{
   render(){
      return(
         <div className="sidebar bg-dark col-2">
            <header>User Dashboard</header>
            <ul className="sidebar-ul">
               <li className="sidebar-li"><Link to="/patient/account">My Account</Link></li>
               <li className="sidebar-li"><Link to="/patient/doctors">Doctors</Link></li>
               <li className="sidebar-li"><Link to="/">Logout</Link></li>
            </ul>
         </div>
      )
   }

}
export default PatientDashboardSidebar; 