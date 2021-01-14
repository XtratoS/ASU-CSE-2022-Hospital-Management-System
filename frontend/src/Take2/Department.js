import {Component} from 'react';
import {Route} from 'react-router-dom';
import API from './API'
import DepartmentThumbnail from './DepartmentThumbnail';


class Department extends Component {
    state = {
        
    }

    // componentDidMount = () => {
    //     API.getDepartments().then((response) => {
    //         this.setState({loaded: true, departments: response});
    //     });
    // }

    render() {
        return (
            <div className="container-sm mt-4">
                <h4 className="m-4">{this.props.department.name} Doctors</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>View Schedule</th>
                            <th>Book an Appointment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ashaymaa</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Sally</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Department;