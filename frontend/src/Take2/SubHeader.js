import {Link} from 'react-router-dom';
import React, { Component } from 'react';

class SubHeader extends Component {
    render() {
        return (
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
                        to="/schedule"
                        className="text-decoration-none text-white"
                    >
                        <div className="nav-link">Schedule</div>
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
        );
    }
}

export default SubHeader;