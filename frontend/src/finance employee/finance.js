import React , {Component} from 'react'
import Salary from './salary.js';

class Finance extends Component {

    state ={
        salary : [
          { name:'a', value:null , hours:null},
          { name:'b', value:null , hours:null},
          { name:'c', value:null , hours:null}
        ]
      }
    render(){
        return(
            <div class="salaryclass">
                <p>Employees' Salary</p>
                <Salary salary={this.state.salary}/>
            </div>
        );
    }
}


export default Finance;