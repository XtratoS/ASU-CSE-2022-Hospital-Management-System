import React , {Component} from 'react'
 
class Addschdule extends Component{
   state={
      name:'',
      date:''
   }
   handlechange =(e)=>{
        this.setState({
           [e.target.id]:e.target.value
        })                  
   }
    handlesubmit=(e)=>{
       e.preventDefault();
      // if(e.target.name.value==='')
      //    {return false}
      // else{ 
      //    this.props.addItem(this.state)
      //     this.setState({
      //     name:'',
      //     date:''
      //  })}
    }
   render(){
      return(
         <div>
               <form onSubmit={this.handlesubmit}>
                  <input type="text" placeholder="enter name.." id="name" onChange={this.handlechange} value={this.state.name} />
                  <input type="date" placeholder="enter date.." id="date" onChange={this.handlechange} value={this.state.date}/>

                  <input type="submit" value="Add"/>
               </form>
         </div>

      )
   }
}
export default Addschdule;