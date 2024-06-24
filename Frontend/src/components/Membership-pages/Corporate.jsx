import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Member_navbar from './Member_navbar'
import Footer from '../Footer/Footer'
import cc from './Screenshot 2024-06-24 at 12.23.56 AM.png'
import './Corporate.css'
import employ from './Emp.jpg'
import founder from './Founder.jpg'
import assistance from './Personal Assistant.jpg'
import event from './special event 4.jpg'
import travel from './Travel.jpg'
import dubai from './princehonasa_Dubai_residency_real_high_resolution_image_813f0b7b-9b32-4435-81df-7b7e87b4b76a (1).png'
import legal from './princehonasa_Finacial_and_legal_advisory_services_image_for_web_5994f41f-eb2b-4f5d-8ab6-30b1987520f4 (1).png'
import office from './princehonasa_business_setup__legal_advisory_image_a9663ddf-bbde-4e1c-b0c9-15a231fedd63.png'


export default function Corporate() {
    const settings = {
    // dots:true,
    infinite:true,
    speed:500,
    slidesToShow: 5,
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
        <div key={d.name} className="slider-back">
            <div className="container-slider">
                <div className="image-container">
                    <div className="heading-cont">
                        <h1>{d.name}</h1>
                    </div>
                    <img src={d.image} alt={d.name} />
                    <div className="hover-text">
                        <p>{d.text}</p>
                    </div>
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
      name: ' Dubai Residency',
      image: dubai
  },
  {
      name: 'Business Setup and legal advisory ',
      image: legal
  },
  
  {
      name: 'Personal Assistance ',
      image: assistance
  },
  {
      name: 'Event and Hospitality Management',
      image: event
  },
  {
    name: ' Travel Solutions',
    image: travel
  },
  {
    name: 'Office and Administrative Support',
    image: office
  },
  
]