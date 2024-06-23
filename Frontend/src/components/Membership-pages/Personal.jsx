import React from 'react'
import Member_navbar from './Member_navbar'
import Footer from '../Footer/Footer'
import './Personal.css'
import aa from './personal.jpeg'

export default function Personal(props) {
  return (
    <div className='page1'>
      <Member_navbar type="Personal"></Member_navbar>


      <div className='img-corporate'>
  <div className="image">
    <img src={aa} className="adjusted-image" alt="Experience the best in personal concierge services. No matter the detail, DXB Care
makes your priorities our priority."></img>
        </div>
         </div>

        <div className="header">
            <h1>Personal Concerge</h1>
        </div>

        
        <div className="coporate-content">
            <p>At DXB Care, whether you're planning a luxurious vacation, need everyday assistance, or want help with event planning, health and wellness, financial and legal services, luxury gifting, hassle-free travel, or even a private chef – we’ve got you covered. We handle everything from simple requests to intricate plans with a single text.</p>
        </div>

      <div className="grid-display">
            
        </div>

        <div className="contact-us">
<button>Contact Us</button>
        </div>
      <Footer></Footer>
      </div>
  )
}
