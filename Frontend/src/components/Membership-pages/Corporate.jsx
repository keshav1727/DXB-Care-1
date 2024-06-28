import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Member_navbar from './Member_navbar'
import Footer from '../Footer/Footer'
import cc from './Corporate main image bg.jpg'
import './Corporate.css'
import employ from './14.jpg'
import founder from './16.jpg'
import assistance from './4.jpg'
import event from './event.jpg'
import travel from './Travel.jpg'
import dubai from './princehonasa_Dubai_residency_real_high_resolution_image_813f0b7b-9b32-4435-81df-7b7e87b4b76a (1).png'
import legal from './princehonasa_Finacial_and_legal_advisory_services_image_for_web_5994f41f-eb2b-4f5d-8ab6-30b1987520f4 (1).png'
import office from './princehonasa_business_setup__legal_advisory_image_a9663ddf-bbde-4e1c-b0c9-15a231fedd63.png'
import Render from '../Dicover_More/Render';
import corp from './Corporate image.jpg'


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
</div>
<div className="header">
            <p>Corporate Concierge</p>
        </div>

        <div className="coporate-content">
            <p>Welcome to DXB Care's Corporate Concierge Services! Trust and security are at the heart of everything we do. We build strong client relationships, enhance your company's reputation, and manage personal tasks with customized solutions. Imagine having a dedicated team to handle all the details, so you can focus on what you do best. Whether it's office support, Dubai residency, business setup, legal advice, event planning, or personalized travel arrangements – just text us and consider it done. We also offer executive assistance, employee wellness programs, client hospitality, and team-building activities tailored to your corporate needs. At DXB Care, we simplify your corporate life, allowing you to succeed effortlessly. We're not just a service; we're your partner in success. Let's make your business thrive, one task at a time.</p>
        </div>

        <div className='luxe-render'>
            <Slider {...settings}>
                {data.map((d) => (
                    <div key={d.name} className="slider-back">
                        <div className="container-slider">
                            <div className="image-container">
                                <div className="head-cont-cor">
                                    <p>{d.name}</p>
                                </div>
                                <div className='image-container-image'>
                                <img src={d.image} alt={d.name} />
                                </div>
                                <div className="hover-text">
                                    <p>{d.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        <div className="middle-cor">
            <div className="middle-content">

          
            <div className="middle-left-cor">
                <img src={corp}/>

            </div>
            <div className="middle-right-cor">
                <h2>Corporate Membership</h2>
               <p>Experience the ultimate in corporate concierge services with DXB Care. Our extensive
network caters to all your business needs, including office support, Dubai residency,
business setup, legal advisory, event management, and tailored travel solutions. Our
commitment to excellence ensures seamless operations for your business. With just a
single text, we handle it all, ensuring you stay focused on what matters most. Simplify
your business journey with us and thrive effortlessly.</p>

            </div>
            </div>

            <div className="middle-content">

          
<div className="middle-right-cor">
<h2>Founder Membership</h2>
<p>Introducing DXB Care's Founder's Membership: your ultimate blend of personal
assistance and corporate support. We manage calendars, set reminders, and handle
every detail—from travel bookings to event coordination—with just a text. Focus on
your vision and success while we streamline your day-to-day. Join today for support
as dynamic as your ambitions.</p>
</div>
<div className="middle-left-cor">
<img src={founder}/>
</div>
</div>

<div className="middle-content">

          
<div className="middle-left-cor">
<img src={employ}/>
</div>
<div className="middle-right-cor">
<h2>Employee Membership</h2>
<p>Introducing DXB Care's Employee Membership: where we optimize your team's
productivity and efficiency! Our service is tailored to streamline tasks and enhance
work-life balance. From simplifying daily operations to providing essential perks, we're
dedicated to helping you attract and retain top talent. Join us and elevate your team's
performance!</p>
</div>
</div>
        </div>


<div className="content-corporate-below">
At DXB Care, we deliver substantial value by saving our clients an average of 20 hours
per week, totaling over 1,000 hours annually. This not only frees up valuable time but
also significantly reduces operational efforts. Imagine the impact of redirecting these
saved hours towards strategic initiatives, client engagements, or personal pursuits, all
while maintaining peak productivity. Without our comprehensive concierge services,
businesses risk inefficiencies and burnout from managing mundane tasks internally.
Choose DXB Care to unlock unparalleled efficiency, empower your team, and elevate
your focus on what truly matters.
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