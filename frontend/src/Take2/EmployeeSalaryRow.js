import React ,{Component} from 'react';

class EmployeeSalaryRow extends Component {


    render() {
        return(
        <tr>
            <td>
                {this.props.employee.name}
            </td>
            <td>
                {this.props.employee.value}
            </td>
        </tr>)
    }
}
export default EmployeeSalaryRow;