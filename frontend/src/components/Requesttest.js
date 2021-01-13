import React from 'react'
import './Requsettest.css'
const Requsettest =() =>{
   
       return(  
          <fieldset>
                  <legend>Requset tests</legend>
               <form>
                  <div class="name">
                     <label>Patient name: </label> 
                  <input type="text" placeholder="enter name" />
               </div>
               
               <div class="test">
                  <label> Test Type:  </label> 
               <input type="text" placeholder="enter the required test" />
               </div>
               
               <button>Submit</button>
               </form>
           </fieldset>
       )
    

}
export default Requsettest;