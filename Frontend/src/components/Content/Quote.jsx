import React from 'react'
import './Quote.css'
import { useNavigate } from 'react-router-dom';
export default function Quote() {

  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about-us');
    };

  return (
    <div className='middle-content-company-quote' id='middle-content'>
        <div className="header">
        <h2 className='heading'>
        Reclaim Your Time with DXB Care
        </h2>
        </div>
        <div className="quote">
          <p>In our fast-paced world, time is the ultimate luxury. At DXB Care, we're here to help you make the most of every moment. Founded to transform how you manage your time, we offer exceptional concierge services that let you focus on what matters most—creating memories, achieving goals, and enjoying life.</p>
          </div>
          <div className="button-container">
                <button onClick={handleClick}>Know More</button>
            </div>
        </div>

  )
}
