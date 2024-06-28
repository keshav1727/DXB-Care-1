import React from 'react';
import './Experience.css';
import aa from './1.jpg';
import bb from './2.jpg';
import cc from './4.jpg';
import dd from './3.jpg';
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
                        <div className="description">Name your dream car—Mustang, Ferrari, McLaren, Lamborghini, or Porsche—and it will be delivered promptly, offering high-performance concierge services that save you valuable time by eliminating long waits in the booking process.
                        </div>
                    </div>
                </div>
                <div className="items">
                    <img src={aa} alt="Private Jet" />
                    <div className="layer">
                        <div className="heading">Private Jet</div>
                        <div className="description">Unlock the freedom to fly on your terms. With the private jets, you’re not just traveling; you’re making a statement of refined taste and discerning choice, all while saving valuable time.</div>
                    </div>
                </div>
                <div className="items">
                    <img src={cc} alt="Yacht" />
                    <div className="layer">
                        <div className="heading">Yacht</div>
                        <div className="description">Sail with elegance, power, and strength. Enjoy smooth voyages while chasing sunsets, hosting parties, or exploring peaceful coves. Our rental yacht service is tailored to meet your unique preferences, offering customizable experiences for every occasion, ensuring your maritime adventures are exactly as you envision.
                        </div>
                    </div>
                </div>
                <div className="items">
                    <img src={dd} alt="Sky Dive" />
                    <div className="layer">
                        <div className="heading">Sky Dive</div>
                        <div className="description">Take the leap from the plane, embrace the weightlessness, feel the adrenaline rush through your veins, and dance in the air with breathtaking views. Life's too short to handle mundane tasks - we've got you covered.</div>
                    </div>
                </div>
            </div>

            <div className="button-container">
                <button onClick={handleClick}>Discover More</button>
            </div>
        </div>
    );
}
