import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Input from './Input'

class RegisterationForm extends Component {
    state = {
        firstname: '',
        lastname: '',
        user: '',
        password: '',
        password2: '',
        error: null
    }

    updateState = (newData) => {
        let firstname = newData.firstname
        let lastname = newData.lastname
        let user = newData.user
        let password = newData.password
        let password2 = newData.password2
        if (typeof(firstname) === 'string') {
            this.setState({firstname: firstname})
        } else if (typeof(lastname) === 'string') {
            this.setState({lastname: lastname})
        } else if (typeof(user) === 'string') {
            this.setState({user: user})
        } else if (typeof(password) === 'string') {
            this.setState({password: password})
        } else if (typeof(password2) === 'string') {
            this.setState({password2: password2})
        }
    }

    attemptRegister = () => {
        let data = this.state;
        let error;
        let empty = false;

        for (let field of ['firstname', 'lastname', 'user', 'password', 'password2']) {
            if (this.state[field] === '') {
                empty = true;
                error = 'Please fill in all the fields';
            }
        }

        if (!empty) {
            const email_re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const valid_email = data.email && (email_re.test(data.email.toLowerCase()));
            const passwords_match = (this.state.password !== '') && (this.state.password === this.state.password2)
            if (!valid_email) {
                error = "Incorrect email address format";
            } else if (!passwords_match) {
                error = "Passwords don't match";
            }
        }

        if (error) {
            this.setState({error: error});
            window.location.hash = '#error-alert-wrapper'
        } else {
            // LOGIN
            console.log(JSON.stringify(this.state));
        }
    }

    render() {
        return (
            <div className="container-sm w-60">
                <div className="form-title">
                    You are signing up for a user account to access our services.
                </div>
                <div id="error-alert-wrapper">
                    {this.state.error && <div className="alert alert-danger p-1">{this.state.error}</div>}
                </div>
                <Input
                    placeholder="First Name"
                    type="text"
                    name="firstname"
                    required={true}
                    updateParent={this.updateState}
                />
                <Input
                    placeholder="Last Name"
                    type="text"
                    name="lastname"
                    required={true}
                    updateParent={this.updateState}
                />
                <Input
                    placeholder="Email Address"
                    type="email"
                    name="user"
                    required={true}
                    updateParent={this.updateState}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    required={true}
                    updateParent={this.updateState}
                />
                <Input
                    placeholder="Password again"
                    type="password"
                    name="password2"
                    required={true}
                    updateParent={this.updateState}
                />
                <div className="text-center">
                    <button className="btn btn-primary" type="button" onClick={this.attemptRegister}>Register</button>
                </div>
                <div className="text-center">Already have an account?
                    <Link to="/">
                        <span className="m-2">Login here</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default RegisterationForm;