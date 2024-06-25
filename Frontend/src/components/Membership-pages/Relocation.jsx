import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Member_navbar from './Member_navbar'
import Footer from '../Footer/Footer'
import cc from './princehonasa_flats_in_dubai_images_a5ab997b-4966-4d67-a260-39aef93db2d9.png'
import './Relocation.css'
import car from './princehonasa_Luxury_chauffeur_drive_in_dubai__real_image_1492c86c-9ed9-48f4-9ece-0292c4cc4509 (1).png'
import settle from './princehonasa_luxury_real_flat_apartment_in_dubai_c5875950-096c-4b5b-8ef6-36ffd2075da8.png'
import health from './princehonasa_yoga_pictures_of_a_real_individual_81e68c37-673c-4fe8-87e0-0fefa3b09d4f.png'
import realestate from './princehonasa_luxury_real_house_in_dubai_a9d25b54-fec1-478d-879b-496ec204c6a6.png'
import travel from './princehonasa_A_photo_of_a_dubai_travel_outdoors_vibrant_bright__fb205463-c4ed-4481-8869-1b419da06366.png'
import Render from '../Dicover_More/Render';
import moving from './3 (1).jpg'

export default function Relocation() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
};
  return (
    <div className='relocation'>
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

        <div className="contact-us">
<button>Contact Us</button>
        </div>
      <Footer></Footer>
    </div>
  )
}

const data = [
  {
      name: ' Health & Wellness',
      image: health      
  },
  {
      name: ' Real estate advisory  ',
      image: realestate
  },
  
  {
      name: 'Moving and Logistics/Effortless Logistic Solutions',
      text: '',
      image: moving
  },
  {
      name: 'Settling-In Services/Seamless Settling Solutions',
      image: settle
  },
  {
    name: ' Buying car/ Automobile Acquisition',
    image: car
  },
  {
    name: 'Travel and Leisure',
    image: travel
  },
 
]