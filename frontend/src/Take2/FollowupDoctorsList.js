import React, { Component } from 'react'
import API from './API';
import BookAppointmentModal from './BookAppointmentModal';
import DoctorRowInDep from './DoctorRowInDep';
import ScheduleModal from './ScheduleModal';

export class FollowupDoctorsList extends Component {
    state = {
        activeDoctor: {},
        doctors: [],
        loaded: false,
        error: null
    }

    componentDidMount() {
        this._isMounted = true;
        let key = localStorage.getItem('key')
        if (key) {
            API.getDoctorsOfPatient(key).then((result)=>{
                if (result) {
                    this.setState({
                        doctors: result,
                        loaded: true
                    })
                    console.log(result)
                } else {
                    this.setState({
                        loaded: false,
                        error: "Error communicating to the server, please login again"
                    })
                }
            })
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    setActiveDoctor = (doctor) => {
        this.setState({activeDoctor: doctor});
    }

    render() {
        return (
            this.state.error && (<div className="alert alert-danger">{this.state.error}</div>) ||
            (<div className="schedule pt-4 w-40 text-center m-auto">
                {this.state.loaded || (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {this.state.loaded && (
                    <div>
                        <BookAppointmentModal
                            department={this.state.activeDoctor.department}
                            doctor={this.state.activeDoctor}
                        />
                        <table className="table table-striped">
                            <thead><tr>
                                <th>Name</th>
                                <th>View Schedule</th>
                                <th>New Appointment</th>
                            </tr></thead>
                            <tbody>
                                {this.state.doctors.map((doctor)=>(
                                    <DoctorRowInDep
                                        key={doctor.id}
                                        doctor={doctor}
                                        setActiveDoctor={this.setActiveDoctor}
                                    />
                                ))}
                            </tbody>
                        </table>
                        <ScheduleModal
                            doctor={this.state.activeDoctor.schedule}
                        />
                    </div>
                )}
            </div>)
        )
    }
}

export default FollowupDoctorsList
