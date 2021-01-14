import React , {Component} from 'react';
import {BrowserRouter , Route, useRouteMatch} from 'react-router-dom';
import Doctor from './components/doctor/doctor'
import Form from "./components/form";
import Scheduleitem from './components/Schedule/schedule-items'
import Addschdule from './components/Schedule/addschedule'
class Alldoctors extends Component{

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
  state={
    items:[
      {id:1,name:"mohamed",date:"date"},
      {id:2,name:"ahmed",date:"date"}
    ]
  }
  deleteitem = (id) => {
    let items=this.state.items;
    let i=items.findIndex( item=> items.id===id)
    items.splice(i,1)
    this.setState({items})
  }
  addItem=(item)=>{
    item.id= Math.random();
    let items=this.state.items;
    items.push(item);
    this.setState({items})
  }
  render(){
    // let {path, url} = useRouteMatch();
    return(
      <div className= "App container">
          <BrowserRouter> 
          <Doctor/> 
          <Route exact path='/myaccont' component={Form}/> 
          <Route path='/myschedules' render={()=>{
            return(
              <div>
                <h1 className="text-center">Schedule</h1> 
                <Scheduleitem items={this.state.items} deleteitem={this.deleteitem} />
                <Addschdule addItem={this.addItem}/>
              </div>
            )
          }}/>
         </BrowserRouter>
{/* 
         <Form onChange={fields => this.onChange(fields)} /> */}
          
         {/* <h1 className="text-center">Schedule</h1> 
         <Scheduleitem items={this.state.items} deleteitem={this.deleteitem} />
         <Addschdule addItem={this.addItem}/> */}

      </div>
      
    );
  }
}
export default Alldoctors;