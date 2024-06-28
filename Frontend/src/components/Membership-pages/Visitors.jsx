import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Member_navbar from './Member_navbar'
import Footer from '../Footer/Footer'
import Experience from '../Experiences/Experience'
import Render from '../Dicover_More/Render';
import photographer from './princehonasa_A_photo_of_an_aerial_photographer_in_Dubai_golden__13e65ef2-d505-4b55-be93-77172a170e70.png'
import car from './princehonasa_Luxury_car_in_dubai_in_day_light_with_dubai_skylin_07ebc79e-9871-4925-b1ca-15a1bdc7d6b8.png'
import airport from './princehonasa_Airport_pickup_image_dubai_b443e350-5e9d-47be-840b-3beeee2d5201.png'
import leisure from './princehonasa_Fine_dining_in_dubai_in_day_light_it_should_be_rea_a9cbd7d6-8725-432b-81f0-e171d71f7ea1.png'
import plan from './8.jpg'
import vip from './4 (1).jpg'
import dubai from './6 (1).jpg'
import money from './18.jpg'
import './Visitors.css'
import elite from './elite.jpg'



export default function Visitors() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
};
  return (
    <div className='visitors-page'>
        <Member_navbar type="Visiotrs">
        </Member_navbar>   
        <div className='img-corporate'>
<div className="image">
  <img src={elite} alt='Embark on a journey where every moment is imbued with the essence of luxury, transforming travel into an opulent experience.'/>

</div>
</div>
        <div className="header-vis">
            <p>Elite Explorer</p>
        </div>
        <div className="coporate-content">
            <p>Let us handle every detail of your journey, from currency exchange to arranging personalized experiences and capturing your special moments with expert photography services. At DXB Care, we're not just about convenience; we're here to ensure your time in Dubai is filled with joy, relaxation, and unforgettable memories.
              Imagine arriving in Dubai to a warm personal greeting at the airport, followed by seamless transfers and a meticulously planned itinerary just for you. Whether you're exploring Dubai's vibrant culture, indulging in luxury car rentals for self-driven adventures, or gaining VIP access to top attractions, every moment is designed to exceed your expectations.</p>
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
        <Experience></Experience>

<div className="visitor-contactus-content">
  <p></p>
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
      image: airport
  },
  {
      name: 'Dubai Exploration ',
      image: dubai
  },
  
  {
      name: 'Tailored itinerary planning and booking',
      image: plan
  },
  {
      name: 'Currency exchange and arrangement',
      image: money
  },
  {
    name: 'Luxury cars for rental (chauffeur driven/ self driven)',
    image: car
  },
  {
    name: ' Leisure Experiences',
    image: leisure
  },
  {
    name: 'VIP Access to Attractions',
    image: vip
  },
  {
    name: 'Aerial & Personal Photography Services',
    image: photographer

  },
  
]