import { Component } from 'react';
import {Link} from 'react-router-dom';
import Input from './Input';

class LoginPage extends Component {
    state = {
        user: '',
        password: ''
    }

    updateState = (newData) => {
        let user = newData.user;
        let password = newData.password;
        if (typeof(user) === 'string') {
            this.setState({user: user});
        } else if (typeof(password) === 'string') {
            this.setState({password: password});
        }
    }

    attemptLogin = () => {
        // LOGIN
        console.log(JSON.stringify(this.state))
    }

    render() {
        return (
            <div className="container-sm w-60">
                <div className="form-title">
                    Please enter your login information below
                </div>
                <div id="error-alert-wrapper">
                    {this.state.error && <div className="alert alert-danger p-1">{this.state.error}</div>}
                </div>
                <Input
                    placeholder="Email Address"
                    type="email"
                    name="user"
                    updateParent={this.updateState}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    updateParent={this.updateState}
                />
                <div className="input-group">
                    <button className="btn btn-primary" type="button" onClick={this.attemptLogin}>Log in</button>
                </div>
                <div className="text-center">Don't have an account?
                    <Link to="/register">
                        <span className="m-2">Register here</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default LoginPage;