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
  <img src='' alt='Embark on a journey where every moment is imbued with the essence of luxury, transforming travel into an opulent experience.'/>

</div>
        <div className="header">
            <h1>Exclusive Visitors</h1>
        </div>
        </div>
        <div className="coporate-content">
            <p>At DXB Care, whether you're planning a luxurious vacation, need everyday assistance, or want help with event planning, health and wellness, financial and legal services, luxury gifting, hassle-free travel, or even a private chef – we’ve got you covered. We handle everything from simple requests to intricate plans with a single text. Our dedicated team ensures every need is met with precision and care. Experience the best in personal concierge services. No matter the detail, DXB Care makes your priorities our priority, allowing you to focus on what truly matters. With us, exceptional service is just a text away.</p>
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