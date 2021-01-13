import {Link} from 'react-router-dom';
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                    <div className="p-4">
                        <h1>Welcome to our Hospital Managment System</h1>
                    </div>
                    <ul class="nav justify-content-end bg-dark text-light">
                        <li class="nav-item">
                            <Link
                                to="/login"
                                className="text-decoration-none text-white"
                            >
                                <div class="nav-link">Login</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                to="/services"
                                className="text-decoration-none text-white"
                            >
                                <div class="nav-link">Servies</div>
                            </Link>
                        </li>
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