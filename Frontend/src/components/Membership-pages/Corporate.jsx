import React from 'react'
import Member_navbar from './Member_navbar'
import Footer from '../Footer/Footer'
import cc from './Untitled design (1).jpg'

export default function Corporate() {
  return (
    <div className='corporate-page'>
      <Member_navbar type="Corporate"/>
      <div className='img-corporate'>
<div className="image">
  <img src={cc} className="adjusted-image" alt="Elevating the corporate experience through exceptional service and unparalleled attention to detail, we transform everyday tasks into extraordinary moments of efficiency and sophistication."></img>
</div>
        <div className="header">
            <h1>Corporate Membership</h1>
        </div>
        </div>
        <div className="coporate-content">
            <p>Welcome to DXB Care's Corporate Concierge Services, where trust and security are at the heart of everything we do. We specialize in building strong client relationships,enhancing your company's reputation and influence, and managing personal tasks with customized solutions. Whether it's office support, Dubai residency, business setup, legal advice, event planning, or personalized travel arrangements – just text us and consider it done. Simplify your business journey with DXB Care and succeed effortlessly.</p>
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
