import React , {Component} from 'react';
import {Link , NavLink} from 'react-router-dom'
import './doctor.css'
class Doctor extends Component{
  
   render(){
   return(
      
         <div className="slider">
            <header>Doctors Administration Dashboard</header>
            <ul>
               <li><Link exact to="/myaccont">My Account</Link></li>
               <li><Link exact to="/myschedules">My Schedules</Link></li>
               <li><Link to="/medical">Medical Records</Link></li>
               <li><Link to="/logout">Logout</Link></li>
            </ul>
         </div>
      
   )
   }

}
export default Doctor; 