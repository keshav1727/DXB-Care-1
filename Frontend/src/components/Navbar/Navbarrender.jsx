import React, { useEffect, useState } from 'react';
import logo from './png-logo-white-1@2x.png';
import './Navbar_render.css';
import Scrollspy from 'react-scrollspy';

export default function Navbartop() {
    const [menu, setMenu] = useState("home");


    return (
        <div className="navbar-top">
            <div className="left">
                <img src={logo} alt="Logo" />
            </div>
            <div className="right">
                <ul className="navbar-menu">
                    <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                    <li onClick={() => setMenu("aboutus")} className={menu === "aboutus" ? "active" : ""}>
                    <a href='#middle-content'>   About Us </a></li>
                    <li onClick={() => setMenu("experience")} className={menu === "experience" ? "active" : ""}>
                    <a href='#experience'>   Experiences </a></li>
                    <li onClick={() => setMenu("membership")} className={menu === "membership" ? "active" : ""}>
                    <a href='#membership'>  Membership </a></li>
                </ul>
            </div>
        </div>
    );
}
