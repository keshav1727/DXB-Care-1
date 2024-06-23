import React from 'react'
import Member_navbar from './Member_navbar'
import Footer from '../Footer/Footer'
import cc from './princehonasa_flats_in_dubai_images_a5ab997b-4966-4d67-a260-39aef93db2d9.png'

export default function Relocation() {
  return (
    <div>
       <Member_navbar type="Personal"></Member_navbar>
       <div className='img-corporate'>
  <div className="image">
    <img src={cc} className="adjusted-image" alt="Relocating can be exciting yet challenging, but with DXB Care, it doesn’t have to be.We handle everything with a single text to ensure a smooth transition to your new life in Dubai."></img>
        </div>
         </div>
         
        <div className="header">
            <h1>Relocation Services</h1>
        </div>

        <div className="coporate-content">
            <p>From helping you with real estate advice, handling all your moving and logistics, travel-leisure activities to ensuring your health and wellness needs are met and even finding the perfect car for you – DXB Care provides a seamless, stress-free relocation experience. With our comprehensive support, moving to Dubai becomes an exciting journey. Access all our services conveniently through a single text, ensuring efficiency at every step.</p>
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
