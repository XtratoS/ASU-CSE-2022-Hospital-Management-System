import {Component} from 'react'
import API from './API'
import {Redirect} from 'react-router-dom';
import DoctorDashboard from './DoctorDashboard';
import PatientDashboard from './PatientDashboard';

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
            return PatientDashboard;
        }
    }

    componentDidMount() {
        this._isMounted = true;
        API.getAccountType(localStorage.getItem('key')).then((account_type)=>{
            this.setState({account_type: account_type, authenticated: true, loaded: true});
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        
        if (this.state.authenticated === false) {
            return <Redirect to="/"/>
        }

        if (this.state.authenticated === true) {
            return <Redirect to={`/${this.state.account_type}/account`}/>
        }

        const Dashboard = this.accountDashboard(this.state.account_type);

        return (
            <div className="d-flex justify-content-center mt-4">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Account;