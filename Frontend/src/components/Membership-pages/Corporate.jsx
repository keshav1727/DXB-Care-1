import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Member_navbar from './Member_navbar'
import Footer from '../Footer/Footer'
import cc from './Untitled design (1).jpg'
import './Corporate.css'


export default function Corporate() {
  const settings = {
    // dots:true,
    infinite:true,
    speed:500,
    slidesToShow: 4,
    slidesToScroll: 1
};


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
      <Slider {...settings}>
            {data.map((d) => (
                <div key={d.name} className='slider-back'>
                    <div className="container-slider">
            <div className="heading">
                <h1>{d.name}</h1>
            </div>
            <div className="inside-container">
                    <p>{d.text}</p>
            </div>
                </div>
                </div>
            ))}
            </Slider>
        </div>
      <div className="contact-us">
<button>Contact Us</button>
        </div>
      <Footer></Footer>
    </div>
  )
}

const data = [
  {
      name: ' Airport Transport Services',
      text: ''
  },
  {
      name: 'Dubai Exploration ',
      text: ''
  },
  
  {
      name: 'Tailored itinerary planning and booking',
      text: ''
  },
  {
      name: 'Currency exchange and arrangement',
      text: ''
  },
  {
    name: 'Luxury cars for rental (chauffeur driven/ self driven)',
    text: ''
  },
  {
    name: ' Leisure Experiences',
    text: ''
  },
  {
    name: 'VIP Access to Attractions',
    text: ''
  },
  {
    name: 'Aerial & Personal Photography Services',
    text: ''
  },
  
]