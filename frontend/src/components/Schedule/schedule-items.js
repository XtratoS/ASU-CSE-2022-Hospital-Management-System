import React from 'react'
import './Schedule.css'
const Scheduleitem =(props) =>{
   const {items , deleteitem} = props;
   const lenghth=items.length;

   const Listitem = lenghth ? items.map(item =>{
      return(
         <div key={item.id}>
               <span className="name">{item.name}</span>
               <span className="date">{item.date}</span>
               <span className="action" onClick={()=>deleteitem(item.id)}>&times;</span>
         </div>
      )
   }) :(<p>there is no item to show</p>)
   return(
      <div className="listitem">
         <div>
            <span className="name title">Name</span>
            <span className="date title">date</span>
            <span className="action title">Action</span>
         </div>
         {Listitem}
      </div>
   )
}
export default Scheduleitem;
