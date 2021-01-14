import {Component} from 'react';
import {Route} from 'react-router-dom';
import API from './API'
import DepartmentThumbnail from './DepartmentThumbnail';
import DoctorRowInDep from './DoctorRowInDep'
import BookAppointmentModal from './BookAppointmentModal';

class Department extends Component {
    state = {
        doctors: [],
        activeDoctor: {},
        loaded: false
    }

    componentDidMount() {
        this._isMounted = true;
        API.getDepartmentDoctors(this.props.department.department_name).then((doctors)=>{
            if (this._isMounted) {
                console.log(doctors)
                this.setState({doctors: doctors, loaded: true});
            }
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    setActiveDoctor = (doctor) => {
        this.setState({activeDoctor: doctor});
    }

    render() {
        return (
            <div className="container-sm mt-4">
                <h4 className="m-4">{this.props.department.department_name} Doctors</h4>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>View Schedule</th>
                            <th>Book an Appointment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.doctors.map((doctor)=>{
                            return <DoctorRowInDep
                                key={doctor.id}
                                doctor={doctor}
                                setActiveDoctor={this.setActiveDoctor}
                            />
                        })}
                    </tbody>
                </table>
                <BookAppointmentModal
                    department={this.props.department}
                    doctor={this.state.activeDoctor}
                />
            </div>
        )
    }
}

export default Department;