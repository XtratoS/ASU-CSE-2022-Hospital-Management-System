import React ,{Component} from 'react';

class Salary extends Component {


    render(){
        const {salary} = this.props;
        const thesalary = salary.map( (sal) => {
            return (
              <div>
                  <p>{sal.name}</p>
                  <p>{sal.value}</p>
                  <p>{sal.hours}</p>
              </div>
            )
        } 
    )
          return (
              <div>
                  {thesalary}
              </div>
  
      
          );
    }    
}
export default Salary;