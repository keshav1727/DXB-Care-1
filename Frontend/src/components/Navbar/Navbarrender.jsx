import React, { useEffect, useState } from 'react';
import logo from './png-logo-white-1@2x.png';
import './Navbar_render.css';
import Scrollspy from 'react-scrollspy';
import { useNavigate } from 'react-router-dom';

export default function Navbartop() {
    const [menu, setMenu] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            // Get the sections and their positions
            const homeSection = document.getElementById('home');
            const aboutUsSection = document.getElementById('middle-content');
            const experienceSection = document.getElementById('experience');
            const membershipSection = document.getElementById('membership');

            // Calculate the middle point of each section
            const homeMiddle = homeSection.offsetTop + homeSection.offsetHeight / 2;
            const aboutUsMiddle = aboutUsSection.offsetTop + aboutUsSection.offsetHeight / 2;
            const experienceMiddle = experienceSection.offsetTop + experienceSection.offsetHeight / 2;
            const membershipMiddle = membershipSection.offsetTop + membershipSection.offsetHeight / 2;

            // Determine which section is in the middle of the viewport
            const currentPosition = window.scrollY + window.innerHeight / 2;
            if (currentPosition < aboutUsMiddle) {
                setMenu('home');
            } else if (currentPosition < experienceMiddle) {
                setMenu('aboutus');
            } else if (currentPosition < membershipMiddle) {
                setMenu('experience');
            } else {
                setMenu('membership');
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate('/')
    }

    return (
        <div className="navbar-top">
            <div className="left">
                <img src={logo} alt="Logo" onClick={handleClick} />
            </div>
            <div className="right">
                <Scrollspy
                    items={['home', 'middle-content', 'experience', 'membership']}
                    currentClassName="active"
                    offset={-100} // Adjust offset as needed
                    className="navbar-menu"
                >
                    <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                    <li onClick={() => setMenu("aboutus")} className={menu === "aboutus" ? "active" : ""}>
                        <a href='#middle-content'>About Us</a>
                    </li>
                    <li onClick={() => setMenu("experience")} className={menu === "experience" ? "active" : ""}>
                        <a href='#experience'>Experiences</a>
                    </li>
                    <li onClick={() => setMenu("membership")} className={menu === "membership" ? "active" : ""}>
                        <a href='#membership'>Membership</a>
                    </li>
                </Scrollspy>
            </div>
        </div>
    );
}
