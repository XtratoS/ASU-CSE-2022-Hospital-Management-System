import {Component} from 'react'

class DoctorRowInDep extends Component {
    render() {
        let doctor = this.props.doctor
        return (
            <tr>
                <td>{doctor.user.first_name} {doctor.user.last_name}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#scheduleModal" onClick={()=>{this.props.setActiveDoctor(doctor)}}>View Schedule</button>
                </td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookAptModal" onClick={()=>{this.props.setActiveDoctor(doctor)}}>Book</button>
                </td>
            </tr>
        )
    }
}

export default DoctorRowInDep;