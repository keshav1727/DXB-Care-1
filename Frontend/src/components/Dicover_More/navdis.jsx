import React, { useEffect, useState } from 'react';
import logo from './png-logo-white-1@2x.png';
import './navdis.css'
import Scrollspy from 'react-scrollspy';


export default function Navbartop() {
    const [menu, setMenu] = useState("experience");

    useEffect(() => {
        const handleScroll = () => {
            // Calculate the scroll position
            const scrollY = window.scrollY;

            // Determine which section is in the viewport based on scroll position
            // Adjust these values according to your layout and styling
            const homeSection = document.getElementById('home').offsetTop;
            const aboutUsSection = document.getElementById('aboutus').offsetTop;
            const experienceSection = document.getElementById('experience').offsetTop;
            const membershipSection = document.getElementById('membership').offsetTop;

            if (scrollY < aboutUsSection) {
                setMenu("home");
            } else if (scrollY >= aboutUsSection && scrollY < experienceSection) {
                setMenu("aboutus");
            } else if (scrollY >= experienceSection && scrollY < membershipSection) {
                setMenu("experience");
            } else {
                setMenu("membership");
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="navbar-top">
            <div className="left">
                <img src={logo} alt="Logo" />
            </div>
            <div className="right">
                <ul className="navbar-menu">
                    <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                    <li onClick={() => setMenu("aboutus")} className={menu === "aboutus" ? "active" : ""}>About Us</li>
                    <li onClick={() => setMenu("experience")} className={menu === "experience" ? "active" : ""}>Experiences</li>
                    <li onClick={() => setMenu("membership")} className={menu === "membership" ? "active" : ""}>Membership</li>
                </ul>
            </div>
        </div>
    );
}
