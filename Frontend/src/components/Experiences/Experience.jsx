import React from 'react';
import './Experience.css';
import aa from './princehonasa_A_real_image_shot_by_a_photographer_of_a_private_j_c954b67a-ce8b-44da-b50c-39e497098a67.png';
import bb from './Car f.jpg';
import cc from './princehonasa_luxury_yatch_in_dubai_in_day_light_with_skyline_du_f6790474-1697-416a-8b92-ce444a5e83a2.png';
import dd from './11.jpg';
import { Link, useNavigate } from 'react-router-dom';

export default function Experience() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/discover');
    };

    return (
        <div className='experience' id='experience'>
            <div className="header">
                <h1 className='heading'>Experiences</h1>
            </div>
            <div className='grid-section'>
                <div className="items" onClick={handleClick}>
                    <img src={bb} alt="Luxury Cars" />
                    <div className="layer">
                        <div className="heading">Sports Car</div>
                        <div className="description">Name your dream car - Mustang, Ferrari, McLaren, Lamborghini, or Porsche - and we'll deliver it promptly.
                        </div>
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
                        <div className="description">Chasing sunsets, watching fireworks in the middle of water, hosting parties, or exploring coves... Our customized yacht service makes every sail adventure a reality!
                        </div>
                    </div>
                </div>
                <div className="items">
                    <img src={dd} alt="Sky Dive" />
                    <div className="layer">
                        <div className="heading">Sky Dive</div>
                        <div className="description">Feel the rush as you leap from the plane and experience the thrill with every detail arranged by our concierge for an unforgettable experience.</div>
                    </div>
                </div>
            </div>

            <div className="button-container">
                <button onClick={handleClick}>Discover More</button>
            </div>
        </div>
    );
}
