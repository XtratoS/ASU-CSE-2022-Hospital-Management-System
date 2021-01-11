import React, { Component } from 'react'
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
                <div className="entryTitle">Please enter your login information</div>
                <form id="example2" method="POST">
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
                    <button className="button_1" type="button" onClick={this.attemptLogin}>Log in</button>
                </form>
            </section>
        );
    }
}

export default LoginForm;