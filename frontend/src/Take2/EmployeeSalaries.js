import React , {Component} from 'react'
import EmployeeSalaryRow from './EmployeeSalaryRow.js';

class EmployeeSalaries extends Component {

    state ={
        salaries: [
            { name:'Shaymaa', value: 5000},
            { name:'Maryam', value: 6000},
            { name:'Amin', value: 9000},
            { name:'Mariam', value: 3000},
            { name:'Mamdouh', value: 12000},
        ]
    }
    
    render(){
        return(
            <table className="table table-striped text-center">
                <thead>
                    <td colSpan="2">
                        <h4>Employees' Salary</h4>
                    </td>
                </thead>
                <tbody>
                    {this.state.salaries.map((salary)=>(
                        <EmployeeSalaryRow
                            employee={salary}
                        />
                    ))}
                </tbody>
            </table>
        );
    }
}


export default EmployeeSalaries;