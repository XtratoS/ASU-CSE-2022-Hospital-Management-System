import {Component} from 'react'
import API from './API';
import MedicalRecordModal from './MedicalRecordModal';
import MedicalTestModal from './MedicalTestModal';
import TransferPatientModal from './TransferPatientModal';
import PatientRowInDoctorView from './PatientRowInDoctorView';

class PatientList extends Component {

    state = {
        patients: [],
        loaded: false,
        activePatient: ''
    }

    setActivePatient = (patient) => {
        this.setState({activePatient: patient});
    }
    
    componentDidMount() {
        this._isMounted = true;
        API.getID().then((response)=>{
            let id = response.id;
            API.getPatients(id).then((response)=>{
                if (this._isMounted) {
                    this.setState({patients: response.patients, loaded: true})
                }
            })
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="pt-4">
                {this.state.loaded || (
                    <div className="d-flex justify-content-center mt-4">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                <table className="table" style={{
                    width: "75%",
                    marginLeft: "auto"
                }}>
                    {this.state.loaded && (<thead><tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Add Record</th>
                        <th>Request Test</th>
                        <th>Transfer</th>
                        </tr></thead>)}
                    <tbody>
                        {this.state.patients.map((patient)=>{
                            return (
                                <PatientRowInDoctorView
                                    key={patient.id}
                                    patient={patient}
                                    setActivePatient={this.setActivePatient}
                                />
                            )
                        })}
                    </tbody>
                </table>
                <MedicalRecordModal
                    patient={this.state.activePatient}
                />
                <MedicalTestModal
                    patient={this.state.activePatient}
                />
                <TransferPatientModal
                    patient={this.state.activePatient}
                />
            </div>
        )
    }

}

export default PatientList;