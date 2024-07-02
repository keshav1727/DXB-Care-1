import React, { useEffect, useState } from 'react';
import logo from './png-logo-white-1@2x.png';
import './abc.css';
import Scrollspy from 'react-scrollspy';

export default function Navbartop() {
    const [menu, setMenu] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0); 
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (section) => {
        setMenu(section); // Update the active menu state
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); 
        }
    };

    return (
        <div className={`navbar-fixed-want ${isScrolled ? 'fixed' : ''}`} >
            <div className="left">
                <img src={logo} alt="Logo" />
            </div>
            
            <div className="right">
                <Scrollspy
                    items={['home', 'aboutus', 'experience', 'membership']}
                    currentClassName="active"
                    offset={-50}
                    className="navbar-menu"
                >
                    <li>
                        <a onClick={() => handleClick('home')} className={menu === 'home' ? 'active' : ''}>Home</a>
                    </li>
                    <li>
                        <a onClick={() => handleClick('aboutus')} className={menu === 'aboutus' ? 'active' : ''}>About Us</a>
                    </li>
                    <li>
                        <a onClick={() => handleClick('experience')} className={menu === 'experience' ? 'active' : ''}>Experiences</a>
                    </li>
                    <li>
                        <a onClick={() => handleClick('membership')} className={menu === 'membership' ? 'active' : ''}>Membership</a>
                    </li>
                </Scrollspy>
            </div>
        </div>
    );
}
