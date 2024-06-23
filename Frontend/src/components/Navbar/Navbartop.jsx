import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import logo from './png-logo-white-1@2x.png'

export default function Navbartop() {
    const[menu, setMenu] = useState("Home");
  return (
    <div>
      <div className="navbar-top">
      <div className='right'>
        <img src={logo} alt="" />
      </div>
      <div className="left">
        <ul className='navbar-menu'>
          <li onClick={() => setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
          <li onClick={() => setMenu("About Us")} className={menu==="About Us"?"active":""}>About Us</li>
          <li onClick={() => setMenu("Services")} className={menu==="Services"?"active":""}>Experiences</li>
          <li onClick={() => setMenu("Membership")} className={menu==="Membership"?"active":""}>Membership</li>
       </ul>
       </div>
       </div>
    </div>
  )
}
