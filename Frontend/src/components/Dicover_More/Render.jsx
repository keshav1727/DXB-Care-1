import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Render({ data }) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
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
    );
}
