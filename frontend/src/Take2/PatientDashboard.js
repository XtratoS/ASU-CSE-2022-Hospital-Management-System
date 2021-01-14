import {Component} from 'react'
import {Route} from 'react-router-dom'
import API from './API';
import PatientDashboardSidebar from './PatientDashboardSidebar'
import FollowupDoctorsList from './FollowupDoctorsList'
import FeedbackModal from './FeedbackModal'

class PatientDashboard extends Component {

    state = {
        loaded: false
    }

    componentDidMount() {
        this._isMounted = true;
        API.getPatientInformation(localStorage.getItem('token')).then((response)=>{
            if (this._isMounted) {
                response.loaded=true;
                this.setState(response);
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    changeHandler = (event) => {
        this.setState((prevState)=>{
            prevState[event.target.name] = event.target.value;
            return prevState;
        })
    }

    render() {
        return (
            <div className="text-center">
                <FeedbackModal/>
                <PatientDashboardSidebar/>
                <Route path='/patient/account'>
                    <div className="pt-4">
                        {this.state.loaded || (
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}
                        {this.state.loaded && (
                            <form className="w-40 m-auto row g-3 text-center">
                                <div className="col-12">Change your information here:</div>
                                <div className="col-12">
                                    <input className="form-control" type="text" value={this.state.id || ''} disabled />
                                </div>
                                <div className="col-12">
                                    <input className="form-control" type="text" placeholder="Name" value={this.state.name || ''} onChange={this.changeHandler} />
                                </div>
                                <div className="col-12">
                                    <input className="form-control" type="email" placeholder="Email" value={this.state.email || ''} onChange={this.changeHandler} />
                                </div>
                                <div className="">
                                    <button className="btn btn-primary" onClick={this.onSubmitForm}>Submit Changes</button>
                                </div>
                            </form>
                        )}
                    </div>
                </Route>
                <Route path='/patient/doctors'>
                    <div className="pt-4">
                        <FollowupDoctorsList/>
                    </div>
                </Route>
                <div className="mt-4">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#feedbackModal">Send Feedback</button>
                </div>
            </div>
        )
    }
}

export default PatientDashboard;
