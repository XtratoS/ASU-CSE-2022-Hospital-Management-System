import React, { Component } from 'react'

class Entry extends Component {
    render() {
        return (
            <section className="entry">
                <div className="entryTitle">Please enter your login information</div>
                <form id="example2">
                    <div className="input-group">
                        <label for="email">Email Address</label>
                        <input type="email" name="email" placeholder="Enter your email"></input>
                    </div>
                    <br/>
                    <div className="input-group">
                        <label for="password">User Password</label>
                        <input name="password" type="password" placeholder="Enter your password"></input>
                    </div>
                    <br/>
                    <button class="button_1">Log in</button>
                </form>
            </section>
        );
    }
}

export default Entry;