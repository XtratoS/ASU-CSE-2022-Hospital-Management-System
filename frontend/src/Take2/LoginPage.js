import { Component } from 'react';
import {Link} from 'react-router-dom';
import Input from './Input';
import API from './API';

class LoginPage extends Component {
    state = {
        user: '',
        password: '',
        error: '',
        loggedIn: false
    }

    componentDidMount() {
        if (localStorage.getItem('key')) {
            this.setState({loggedIn: true})
        }
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
        API.getLoginToken(this.state.user, this.state.password).then((key) => {
            if (key === null) {
                this.setState({error: 'Incorrect account details'})
            } else {
                localStorage.setItem('key', key)
                this.setState({user: '', password: '', loggedIn: 'true'});
            }
        });
    }

    render() {
        return (this.state.loggedIn || (
            <div className="container-sm w-60">
                <div className="form-title">
                    Please enter your login information below
                </div>
                <div id="error-alert-wrapper">
                    {this.state.error && <div className="alert alert-danger p-1 text-center">{this.state.error}</div>}
                </div>
                <Input
                    placeholder="Username"
                    type="text"
                    name="user"
                    updateParent={this.updateState}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    updateParent={this.updateState}
                />
                <div className="text-center">
                    <button className="btn btn-primary" type="button" onClick={this.attemptLogin}>Log in</button>
                </div>
                <div className="text-center">Don't have an account?
                    <Link to="/register">
                        <span className="m-2">Register here</span>
                    </Link>
                </div>
            </div>)
        )
    }
}

export default LoginPage;