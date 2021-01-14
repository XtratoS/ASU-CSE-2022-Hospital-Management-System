import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Input from './Input'

class LoginForm extends Component {
    state = {
        user: '',
        password: ''
    }

    updateState = (newData) => {
        let user = newData.user
        let password = newData.password
        if (user) {
            this.setState({user: user})
        } else if (password) {
            this.setState({password: password})
        }
    }

    attemptLogin = () => {
        console.log(JSON.stringify(this.state))
    }

    render() {
        return (
            <section className="entry">
                <div className="entryTitle">Please enter your account information</div>
                <div id="example2">
                    <form method="POST">
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
                    </form>
                    <span>Don't have an account?
                        <Link to="/register">
                            <span className="m-2">Register here</span>
                        </Link>
                    </span>
                </div>
            </section>
        );
    }
}

export default LoginForm;