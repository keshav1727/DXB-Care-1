import React from 'react'
import logo from './png-logo-white-1@2x.png'
import './abc.css'
import { useEffect, useState } from 'react';

export default function Navbarrender() {
    const [menu, setMenu] = useState("Home");
    // const [isScrolled, setIsScrolled] = useState(false);

    

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
    <div className='navbar-fixed-want'>
        <div className="left">
            <img src={logo} alt="" />
        </div>
        <div className="right">
                <ul className='navbar-menu'>
                    <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
                    Home
                    </li>
                    <li onClick={() => setMenu("About Us")} className={menu === "About Us" ? "active" : ""}>
                    About Us
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
  )
}
