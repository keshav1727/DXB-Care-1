import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Member_navbar from './Member_navbar'
import Footer from '../Footer/Footer'
import './Personal.css'
import aa from './per.jpg'
import pers from './7 (1).jpg'
import finance from './princehonasa_Finacial_and_legal_advisory_services_image_for_web_5994f41f-eb2b-4f5d-8ab6-30b1987520f4 (1).png'
import travel from './6 (1).jpg'
import gift from './2 (1).jpg'
import chef from './princehonasa_luxury_Private_chef_real_image_image_in_dubai_7eb14deb-5710-4624-86b8-2da03a4ce8dd.png'
import health from './princehonasa_health__wellness_realted_image_a503efc9-64e9-4765-a173-d661456c04a9.png'
import event from './event.jpg'
import exclusive from './princehonasa_Real_images_with_real_people_for_VIP_parties_in_du_cd312aa1-af08-47dd-9e38-e80450e76e9b.png'
import '../Dicover_More/Discover.css'
import Render from '../Dicover_More/Render';
import request from './19.jpg'
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect} from 'react';
import Navbarrender from '../Navbar/Navbarrender';

export default function Personal(props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
};



const topRef = useRef(null); // Create a ref

useEffect(() => {
    // Scroll to the top when the component mounts
    if (topRef.current) {
        topRef.current.scrollIntoView();
    }
}, []); // Empty dependency array ensures this effect runs only once after the initial render

const navigate = useNavigate();

const handleClick = () => {
    navigate('/contact-us');
};

  return (
    <div className='page1' ref={topRef}>
      {/* <Navbarrender/> */}
      <Member_navbar></Member_navbar>

      <div className='img-corporate'>
  <div className="image">
    <img src={aa} className="adjusted-image" alt="Experience the best in personal concierge services. No matter the detail, DXB Care
makes your priorities our priority."></img>
        </div>
         </div>

        <div className="header">
            <p>Personal Concierge</p>
        </div>

        
        <div className="coporate-content">
            <p>You prefer a tailor-made suit because it fits you and you alone. At DXB Care, our concierge services are just as personalized. Whether it's planning a getaway, managing daily tasks, or arranging for health, legal, or luxury needs, we're here to cater to your preferences. Just a text away, let us simplify your life with DXB Care.</p>
            <p className='content-highlight'>We’ll always remember your name and which pillow, floor, or view you prefer.</p>
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

        <div className="contact-us">
<button onClick={handleClick}>Contact Us</button>
        </div>
      <Footer></Footer>
      </div>
  )
}

const data = [
  {
      name: 'Assisting with everyday requests',
      image: request
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
    name: 'Financial & Legal Services',
    image: finance
  },
  {
    name: 'Exclusive Reservations',
    image: exclusive
  },
  {
    name: 'Gifting & sourcing luxury items',
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
    name: '24*7 Emergencies Assistance',
    image: pers
  },
  
]