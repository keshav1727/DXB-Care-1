import React from 'react'

import Member_navbar from './Member_navbar'
import Footer from '../Footer/Footer'
import Experience from '../Experiences/Experience'

export default function Visitors() {
  return (
    <div className='visitors-page'>
        <Member_navbar type="Visiotrs">
        </Member_navbar>   
        <div className="grid-display">
            
        </div> 
       
        <Experience></Experience>
        <div className="contact-us">
<button>Contact Us</button>
        </div>
      <Footer></Footer>
    </div>
  )
}
