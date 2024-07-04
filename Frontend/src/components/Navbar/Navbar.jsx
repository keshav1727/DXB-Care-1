import React, { useState } from 'react'
import './Navbar.css'
import logo from './png-logo-white-1@2x.png'
import wp from './wplogo.webp'
import tg from './tglogo.png'
import vd from './Copy of Copy of Videomain.mp4'
import Navbarrender from './Navbarrender'


export default function Navbar() {  
  return (
    

  <div className="main" id="home">
    <div className="video-section">
    <video src={vd} autoPlay loop muted></video>
    </div>
    <div className='navbar'>
      <div className="contacts">
    <button className='contacts-button'>Contact Us
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
    </button>
</div>     
    </div>
  </div>
  )
}

