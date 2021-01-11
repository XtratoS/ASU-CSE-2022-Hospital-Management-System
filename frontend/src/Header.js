import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div id="head1">
                        <h1>Welcome to our Hospital Managment System</h1>
                    </div>
                <nav className="main-nav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html">About</a></li>
                        <li><a href="index.html">Services</a></li>
                    </ul>
                </nav>
                </div>
            </header>
        );
    }
}

export default Header;