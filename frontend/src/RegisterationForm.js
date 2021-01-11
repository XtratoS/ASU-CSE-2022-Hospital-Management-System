import React, { Component } from 'react'
import Input from './Input'

class RegisterationForm extends Component {
    state = {
        firstname: '',
        lastname: '',
        user: '',
        password: '',
        password2: ''
    }

    updateState = (newData) => {
        let firstname = newData.firstname
        let lastname = newData.lastname
        let user = newData.user
        let password = newData.password
        let password2 = newData.password2
        if (firstname) {
            this.setState({firstname: firstname})
        } else if (lastname) {
            this.setState({lastname: lastname})
        } else if (user) {
            this.setState({user: user})
        } else if (password) {
            this.setState({password: password})
        } else if (password2) {
            this.setState({password2: password2})
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
                        placeholder="First Name"
                        type="text"
                        name="firstname"
                        updateParent={this.updateState}
                    />
                    <Input
                        placeholder="Last Name"
                        type="text"
                        name="lastname"
                        updateParent={this.updateState}
                    />
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
                    <Input
                        placeholder="Password again"
                        type="password"
                        name="password2"
                        updateParent={this.updateState}
                    />
                    <button className="button_1" type="button" onClick={this.attemptRegister}>Register</button>
                    <span>Don't have an account? register <a>here</a></span>
                </form>
            </section>
        );
    }
}

export default RegisterationForm;