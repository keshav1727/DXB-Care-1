import React, { useState } from 'react'
import './Navbar.css'
import wp from './wplogo.webp'
import tg from './tglogo.png'

export default function Navbar() {
  const[menu, setMenu] = useState("Home");

  const handleWhatsApp = () =>{
    window.open('https://wa.me/919837290556? text=Hello How are you?', '_blank' )
  }

  const handleTelegramApp = () =>{
    window.open('https://telegram.me/KeshavBajaj04? text=Hello How are you?', '_blank' )
  }
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
       <div className="contacts">
       <div className="wp">

            <img src={wp} alt="aaa" className='contact-wp-img' onClick={handleWhatsApp}/>
            <img src={tg} alt="aaa" className='contact-tg-img' onClick={handleTelegramApp} />
       </div>
       </div>
    </div>
  )
}

