import React from 'react'
import { useState } from 'react';
import './Member_navbar.css'
import './Personal.css'
import logo from './png-logo-white-1@2x.png'

export default function Member_navbar(props) {
        const[menu, setMenu] = useState("Home");
  return (
    <div className='personal'>
    <div className="navbar-member">
        <div className="member-left">
            <div className="logo-image">
            <img src={logo} alt="" />
            </div>
        </div>
        <div className="member-right">
            {/* <div className="menu-list"> */}
            <ul className='navbar-menulist'>
          <li onClick={() => setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
          <li onClick={() => setMenu("About Us")} className={menu==="About Us"?"active":""}>About Us</li>
          <li onClick={() => setMenu("Services")} className={menu==="Services"?"active":""}>Experiences</li>
          <li onClick={() => setMenu("Membership")} className={menu==="Membership"?"active":""}>Membership</li>
       </ul>
            {/* </div> */}
        </div>
    </div>

        
    </div>
  )
}
