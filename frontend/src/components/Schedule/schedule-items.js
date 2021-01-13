import React from 'react'
import './Schedule.css'
const Scheduleitem =(props) =>{
   const {items , deleteitem} = props;
   const lenghth=items.length;

   const Listitem = lenghth ? items.map(item =>{
      return(
         <div key={item.starttime}>
               <span className="date">{item.date}</span>
               <span className="time">{item.starttime}</span>
               <span className="time">{item.endtime}</span>
               <span className="action" onClick={() =>deleteitem(item.starttime)}>&times;</span>
         </div>
      )
   }) :(<p>there is no item to show</p>)
   return(
      <div className="listitem">
         <div>
            <span className="date title">date</span>
            <span className="time title">start time</span>
            <span className="time title">end time</span>
            <span className="action title">Action</span>
         </div>
         {Listitem}
      </div>
   )
}
export default Scheduleitem;

