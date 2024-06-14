import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const[menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <div className="left">
        <ul className='navbar-menu'>
          <li onClick={() => setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
          <li onClick={() => setMenu("About Us")} className={menu==="About Us"?"active":""}>About Us</li>
          <li onClick={() => setMenu("Services")} className={menu==="Services"?"active":""}>Services</li>
          <li onClick={() => setMenu("Membership")} className={menu==="Membership"?"active":""}>Membership</li>
       </ul>
       </div>
    </div>
  )
}

