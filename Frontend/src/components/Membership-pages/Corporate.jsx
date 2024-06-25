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
import assistance from './4.jpg'
import event from './event.jpg'
import travel from './travel.jpg'
import dubai from './princehonasa_Dubai_residency_real_high_resolution_image_813f0b7b-9b32-4435-81df-7b7e87b4b76a (1).png'
import legal from './princehonasa_Finacial_and_legal_advisory_services_image_for_web_5994f41f-eb2b-4f5d-8ab6-30b1987520f4 (1).png'
import office from './princehonasa_business_setup__legal_advisory_image_a9663ddf-bbde-4e1c-b0c9-15a231fedd63.png'
import Render from '../Dicover_More/Render';
import corp from './photo_2024-06-21 20.10.10.jpeg'


export default function Corporate() {
    const settings = {
        infinite: true,
        speed: 500,
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

        <div className='luxe-render'>
            <Slider {...settings}>
                {data.map((d) => (
                    <div key={d.name} className="slider-back">
                        <div className="container-slider">
                            <div className="image-container">
                                <div className="heading-cont">
                                    <h1>{d.name}</h1>
                                </div>
                                {/* Assuming you have images in your data */}
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
        <div className="middle">
            <div className="middle-content">

          
            <div className="middle-left">
                <img src={corp}/>

            </div>
            <div className="middle-right">
                <h1>Corporate Membership</h1>
               <p>Experience the ultimate in corporate concierge services with DXB Care. Our extensive
network caters to all your business needs, including office support, Dubai residency,
business setup, legal advisory, event management, and tailored travel solutions. Our
commitment to excellence ensures seamless operations for your business. With just a
single text, we handle it all, ensuring you stay focused on what matters most. Simplify
your business journey with us and thrive effortlessly.</p>

            </div>
            </div>

            <div className="middle-content">

          
<div className="middle-left">
<h1>Founder Membership</h1>
<p>Introducing DXB Care's Founder's Membership: your ultimate blend of personal
assistance and corporate support. We manage calendars, set reminders, and handle
every detail—from travel bookings to event coordination—with just a text. Focus on
your vision and success while we streamline your day-to-day. Join today for support
as dynamic as your ambitions.</p>
</div>
<div className="middle-right">
<img src={founder}/>
</div>
</div>

<div className="middle-content">

          
<div className="middle-right">
<img src={employ}/>
</div>
<div className="middle-left">
<h1>Employee Membership</h1>
<p>Introducing DXB Care's Employee Membership: where we optimize your team's
productivity and efficiency! Our service is tailored to streamline tasks and enhance
work-life balance. From simplifying daily operations to providing essential perks, we're
dedicated to helping you attract and retain top talent. Join us and elevate your team's
performance!</p>
</div>
</div>
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