import {Link} from 'react-router-dom';
import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <header>
                <div className="p-4">
                    <h1>Welcome to our Hospital Managment System</h1>
                </div>
                <ul className="nav justify-content-end bg-dark text-light">
                    <li className="nav-item">
                        <Link
                            to="/account"
                            className="text-decoration-none text-white"
                        >
                            <div className="nav-link">Account</div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/departments"
                            className="text-decoration-none text-white"
                        >
                            <div className="nav-link">Departments</div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/services"
                            className="text-decoration-none text-white"
                        >
                            <div className="nav-link">Services</div>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link
                            to="/feedback"
                            className="text-decoration-none text-white"
                        >
                            <div className="nav-link">Feedback</div>
                        </Link>
                    </li> */}
                    {/* <li class="nav-item">
                        <Link
                            to="/about"
                            className="text-decoration-none text-white"
                        >
                            <div class="nav-link">About</div>
                        </Link>
                    </li> */}
                </ul>
            </header>
        );
    }
}

export default Header;