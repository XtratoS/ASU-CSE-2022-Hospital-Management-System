import {Component} from 'react'
import API from './API'
import {Redirect} from 'react-router-dom';
import DoctorDashboard from './DoctorDashboard';
// import PatientDashboard from './PatientDashboard';

class Account extends Component {

    state = {
        authenticated: null,
        loaded: false,
        account_type: ''
    }

    accountDashboard(acc) {
        if (acc === 'doctor') {
            return DoctorDashboard;
        } else if (acc === 'patient') {
            return DoctorDashboard;
            // return PatientDashboard;
        }
    }

    componentDidMount() {
        API.isAuthenticated('1020').then((response)=>{
            this.setState({
                authenticated: response.authenticated,
                loaded: true,
                account_type: response.account_type
            })
        });
    }

    render() {
        
        if (this.state.authenticated === false) {
            return <Redirect to="/login"/>
        }

        if (this.state.authenticated === true && this.state.account_type === 'doctor') {
            return <Redirect to="/doctor/account"/>
        }

        const Dashboard = this.accountDashboard(this.state.account_type);

        return (
            <div>
                {this.state.loaded || (
                    <div className="d-flex justify-content-center mt-4">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {this.state.loaded && (
                    <Dashboard/>
                )}
            </div>
        )
    }
}

export default Account;