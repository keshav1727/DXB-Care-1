import React, { useEffect, useState } from 'react';
import logo from './png-logo-white-1@2x.png';
import './abc.css';
import { useLocation, Link } from 'react-router-dom';

export default function Navbartop() {
    const [menu, setMenu] = useState("Home");
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

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

    const handleClick = (section) => {
        setMenu(section); // Update the active menu state
        const element = document.getElementById(section.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        }
    };

    return (
        <div className={`navbar-fixed-want ${isScrolled ? 'fixed' : ''}`}>
            <div className="left">
                <img src={logo} alt="" />
            </div>
            <div className="right">
                <ul className='navbar-menu'>
                    <li className={menu === "Home" ? "active" : ""}>
                        <Link to="/" onClick={() => handleClick("Home")}>Home</Link>
                    </li>
                    <li className={menu === "About Us" ? "active" : ""}>
                        <Link to="/#aboutus" onClick={() => handleClick("About Us")}>About Us</Link>
                    </li>
                    <li className={menu === "Services" ? "active" : ""}>
                        <Link to="/#experience" onClick={() => handleClick("Services")}>Experiences</Link>
                    </li>
                    <li className={menu === "Membership" ? "active" : ""}>
                        <Link to="/#membership" onClick={() => handleClick("Membership")}>Membership</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
