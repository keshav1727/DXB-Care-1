import React from 'react';
import './Experience.css';
import aa from './princehonasa_Helicopter_tour_in_dubai_it_should_be_real_image_w_f4e690eb-89f7-42e8-a7ee-13e34758f7fe.png';
import bb from './princehonasa_Luxury_car_in_dubai_in_day_light_with_dubai_skylin_0a5ed554-7ee1-4ae3-8c95-19be9f034f29.png';
import cc from './princehonasa_luxury_yatch_image_in_dubai_in_night_light_with_re_e7463b31-2f51-453f-8e2e-2dc282bfc5bb.png';
import dd from './princehonasa_skyhub_paramotors_dubai_pictures_real_images_01462ca7-5a2c-46b2-b69c-e6994f9b1598.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Experience() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/discover');
    };

    return (
        <div className='experience'>
            <div className="header">
                <h1 className='heading'>Experiences</h1>
            </div>
            <div className='grid-section'>
                <div className="items" onClick={handleClick}>
                    <img src={bb} alt="Luxury Cars" />
                    <div className="layer">
                        <div className="heading">Luxury Cars</div>
                        <div className="description">When we say cars, we mean pure performance and style on wheels.</div>
                    </div>
                </div>
                <div className="items">
                    <img src={aa} alt="Private Jet" />
                    <div className="layer">
                        <div className="heading">Private Jet</div>
                        <div className="description">And now I'm suddenly obsessed with jets: soaring to new heights of luxury and speed.</div>
                    </div>
                </div>
                <div className="items">
                    <img src={cc} alt="Yacht" />
                    <div className="layer">
                        <div className="heading">Yacht</div>
                        <div className="description">Best decision ever: embarking on a yacht adventure</div>
                    </div>
                </div>
                <div className="items">
                    <img src={dd} alt="Sky Dive" />
                    <div className="layer">
                        <div className="heading">Sky Dive</div>
                        <div className="description">WAKE UP people, it's skydiving o'clock 🔥</div>
                    </div>
                </div>
            </div>

            <div className="button-container">
                <button onClick={handleClick}>Discover More</button>
            </div>
        </div>
    );
}
