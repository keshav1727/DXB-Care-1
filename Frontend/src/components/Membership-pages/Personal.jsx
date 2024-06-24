import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Member_navbar from './Member_navbar'
import Footer from '../Footer/Footer'
import './Personal.css'
import aa from './personal.jpeg'
import assist from './assisting everday task 2.jpg'
import finance from './princehonasa_Finacial_and_legal_advisory_services_image_for_web_5994f41f-eb2b-4f5d-8ab6-30b1987520f4 (1).png'
import travel from './Hustle free travel 2.jpg'
import gift from './luxury gifting 3.jpg'
import chef from './princehonasa_luxury_Private_chef_real_image_image_in_dubai_7eb14deb-5710-4624-86b8-2da03a4ce8dd.png'
import health from './princehonasa_health__wellness_realted_image_a503efc9-64e9-4765-a173-d661456c04a9.png'
import event from './special event 4.jpg'
import exclusive from './princehonasa_Real_images_with_real_people_for_VIP_parties_in_du_cd312aa1-af08-47dd-9e38-e80450e76e9b.png'

export default function Personal(props) {
  const settings = {
    // dots:true,
    infinite:true,
    speed:500,
    slidesToShow: 5,
    slidesToScroll: 1
};
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
      name: 'Assisting with everyday requests',
      image: assist
  },
  {
      name: 'Exclusive Access & Experiences',
      text: ''
  },
  
  {
      name: ' Event Planning',
      image: event
  },
  {
      name: 'Health & Wellness',
      image: health
  },
  {
    name: 'Financial and Legal Services',
    image: finance
  },
  {
    name: 'Exclusive Reservations:  Restaurants and Clubs',
    image: exclusive
  },
  {
    name: 'Gifting and sourcing luxury items',
    image: gift
  },
  {
    name: 'Hustle free Travel',
    image: travel
  },
  {
    name: 'Private Chef',
    image: chef
  },
  {
    name: '24*7 Personalized Concierge Assistance in Emergencies'
  },
  
]