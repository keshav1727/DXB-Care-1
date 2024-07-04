import React, { useState } from 'react';
import logo from './png-logo-white-1@2x.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbartop() {
    const [menu, setMenu] = useState("aboutus");

    return (
        <div className="navbar-top">
            <div className="left">
                <img src={logo} alt="Logo" />
            </div>
            <div className="right">
                <ul className="navbar-menu">
                    <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={() => setMenu("aboutus")} className={menu === "aboutus" ? "active" : ""}>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li onClick={() => setMenu("experience")} className={menu === "experience" ? "active" : ""}>
                        <Link to="/experience">Experiences</Link>
                    </li>
                    <li onClick={() => setMenu("membership")} className={menu === "membership" ? "active" : ""}>
                        <Link to="/membership">Membership</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
