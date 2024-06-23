import React from 'react'
import Member_navbar from './Member_navbar'
import Footer from '../Footer/Footer'
import './Personal.css'

export default function Personal(props) {
  return (
    <div className='page1'>
      <Member_navbar type="Personal"></Member_navbar>
      <div className="grid-display">
            
        </div>

        <div className="contact-us">
<button>Contact Us</button>
        </div>
      <Footer></Footer>
    </div>
  )
}
