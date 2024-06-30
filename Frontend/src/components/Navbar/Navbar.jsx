import React, { useState } from 'react'
import './Navbar.css'
import logo from './png-logo-white-1@2x.png'
import wp from './wplogo.webp'
import tg from './tglogo.png'
import vd from './Copy of Copy of Videomain.mp4'

  import Navbartop from './Navbartop'


export default function Navbar() {


  const handleWhatsApp = () =>{
    window.open('https://wa.me/919837290556? text=Hello How are you?', '_blank' )
  }

  const handleTelegramApp = () =>{
    window.open('https://telegram.me/KeshavBajaj04? text=Hello How are you?', '_blank' )
  }
  return (
    

  <div className="main">
    <div className="video-section">
    <video src={vd} autoPlay loop muted></video>
    </div>
    <div className='navbar'>
      <Navbartop></Navbartop>
      <div className="contacts">
    <button>Contact Us</button>
</div>     
    </div>
  </div>
  )
}

