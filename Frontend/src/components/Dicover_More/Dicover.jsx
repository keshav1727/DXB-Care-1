import React from 'react'
import './Discover.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Discover() {
    const settings = {
        // dots:true,
        infinite:true,
        speed:500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    
  return (
    <div className='experience-container'>
        <div className="luxe">
         <div className="header">
            <h1>Luxury Cars</h1>
         </div>
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
    </div>
  )
}

const data = [
    {
        name: 'cars',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores beatae dolore voluptatem!'
    },
    {
        name: 'cars',
        text: 'opd'
    },
    
    {
        name: 'cars',
        text: 'opd'
    },
    {
        name: 'cars',
        text: 'opd'
    },
    
]
