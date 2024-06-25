import React from 'react';
import './Membership.css';
import { useNavigate } from 'react-router-dom';
import personal from './7.jpg'
import relocation from './2.jpg'
import visitor from './5.jpg'
import corp from './photo_2024-06-21 20.10.10.jpg'

export default function Membership() {
  const navigate = useNavigate();

  function Corporatehandle() {
    navigate('/corporate');
  }
  function Personalhandle() {
    navigate('/personal');
  }
  function Visitorhandle() {
    navigate('/visitors');
  }
  function Relocatehandle() {
    navigate('/relocate');
  }

  return (
    <div className='membership' id='membership'>
      <div className="content">
        <div className='header'><h1 className='heading'>Membership</h1></div>
        <div className="membership-content">
          <div className="item">
            <div className="member-image">
            <img src={corp} alt="Corporate" className="item-image" />
            </div>
            <div className='item-name'><h1 className='item-heading'>Corporate</h1></div>
            <div className='item-content'><p>We share a common goal: SUCCESS in our endeavors.</p></div>
            <div className="button"><button onClick={Corporatehandle}>Explore
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
              </svg>
            </button></div>
          </div>
          <div className="item">
            <div className="member-imager">
            <img src={personal} alt="Personal" className="item-image" />
            </div>
            <div className='item-name'><h1 className='item-heading'>Personal</h1></div>
            <div className='item-content'><p>We'll handle it. Just name it, and consider it done.</p></div>
            <div className="button"><button onClick={Personalhandle}>Explore
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
              </svg>
            </button></div>
          </div>
          <div className="item">
            <div className="member-image">
            <img src={relocation} alt="Relocation" className="item-image" />
            </div>
            <div className='item-name'><h1 className='item-heading'>Relocation</h1></div>
            <div className='item-content'><p>Get oriented with cultural insights and local expertise.</p></div>
            <div className="button"><button onClick={Relocatehandle}>Explore
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
              </svg>
            </button></div>
          </div>
          <div className="item">
            <div className="member-image">
            <img src={visitor} alt="Exclusive Visitors" className="item-image" />
            </div>
            <div className='item-name'><h1 className='item-heading'>Exclusive Visitors</h1></div>
            <div className='item-content'><p>Receive personalized travel itineraries to make the most of your visit.</p></div>
            <div className="button"><button onClick={Visitorhandle}>Explore
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
              </svg>
            </button></div>
          </div>
        </div>
        <div className="crypto-tag">
          <div className="heading">
            <h2> *We also accept <span className='crypto'>Crypto</span> payments</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
