import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './png-logo-white-1@2x.png';

export default function Navbartop() {
    const [menu, setMenu] = useState("Home");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0); // Set `true` if scrolled more than 0px
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar-top ${isScrolled ? 'fixed' : ''}`}>
            <div className='right'>
                <img src={logo} alt="Logo" />
            </div>
            <div className="left">
                <ul className='navbar-menu'>
                    <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
                        <a href="#home">Home</a>
                    </li>
                    <li onClick={() => setMenu("About Us")} className={menu === "About Us" ? "active" : ""}>
                        <a href="#about">About Us</a>
                    </li>
                    <li onClick={() => setMenu("Services")} className={menu === "Services" ? "active" : ""}>
                        <a href="#experience">Experiences</a>
                    </li>
                    <li onClick={() => setMenu("Membership")} className={menu === "Membership" ? "active" : ""}>
                        <a href="#membership">Membership</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
