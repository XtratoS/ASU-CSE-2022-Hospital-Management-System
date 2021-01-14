import React , {Component} from 'react'
 
class Addschdule extends Component{
   state = {
      date: '',
      starttime: '',
      endtime: ''
   }

   handlechange =(e)=>{
         this.setState({
            [e.target.id]: e.target.value
         })
   }
   
   handlesubmit=(e)=>{
      e.preventDefault();
      if (e.target.name.value === '') {
         return false
      } else {
         this.props.addItem(this.state)
         this.setState({
            date:'',
            starttime:'',endtime:''
         })
      }
   }

   render(){
      return(
         <div>
               <form onSubmit={this.handlesubmit}>
                  <input type="date" placeholder="enter date.." id="date" onChange={this.handlechange} value={this.state.date}/>
                  <input type="time" placeholder="enter starttime.." id="starttime" onChange={this.handlechange} value={this.state.starttime}/>
                  <input type="time" placeholder="enter endtime.." id="endtime" onChange={this.handlechange} value={this.state.endtime}/>
                  <input type="submit" value="Add"/>
               </form>
         </div>

      )
   }
}
export default Addschdule;