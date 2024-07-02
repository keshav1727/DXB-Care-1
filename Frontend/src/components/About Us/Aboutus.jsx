import React from 'react';
import './Aboutus.css';
import Footer from '../Footer/Footer';
import Member_navbar from '../Membership-pages/Member_navbar';
import well from './Why dXbArtboard 6 copy 2.svg';
import board from './Why dXbArtboard 6 copy 3 (1).svg';
import time from './Why dXbArtboard 6 copy.svg';
import client from './Why dXbArtboard 6.svg';
import main from './about us main image.jpg';
import sec from './2024.jpg';
import thr from './23.jpg';
import Navbarrender from '../Navbar/Navbarrender'


export default function Aboutus() {
  return (
    <div className='aboutus' id='aboutus'>
      <div className="img-corporate">
        <div className="image">
        <img src={main} alt="" />
        </div>
      </div>
      <div className="about-below">
        <div className="header">
          <h2>About Us</h2>
        </div>
        <div className="reclaim-time">
          <div className="header">
            <h3>Reclaim Your Time with DXB Care</h3>
          </div>
          <div className="text">
            <p>
              In our fast-paced world, time is the ultimate luxury. At DXB Care, we're here to help you make the most of every moment. Founded to transform how you manage your time, we offer exceptional concierge services that let you focus on what matters most—creating memories, achieving goals, and enjoying life. Our dedicated team ensures every detail is handled with precision, giving you peace of mind. Whether it's personal errands or professional tasks, we make your life easier and more fulfilling.
            </p>
          </div>
        </div>
        <div className="about-middle">
          <div className="middle-left">
            <div className="middle-left-top">
              <div className="heading">
                <h5>Our Mission Elevating Lives Through Exceptional Service</h5>
              </div>
              <div className="text">
                <p>Our mission at DXB Care is simple: empower you with unparalleled concierge services. We turn routine tasks into extraordinary moments, helping you reach your professional goals quickly and confidently. We believe luxury and convenience should be accessible to everyone.</p>
              </div>
            </div>
            <div className="middle-left-bottom">
              <div className="heading">
                <h5>Our Vision: Redefining Convenience & Exclusivity</h5>
              </div>
              <div className="text">
                <p>We envision a world where everyone can afford the luxury of time. DXB Care aims to lead in concierge services, setting the bar for excellence and innovation. We integrate seamlessly into your life, transforming ordinary moments into extraordinary experiences.</p>
              </div>
            </div>
          </div>
          <div className="middle-right">
            <div className="right-image">
              <img src={sec}></img>
            </div>
          </div>
        </div>
        <div className="bottom-top">
          <div className="header">
            <h2>Why choose DXB</h2>
          </div>
          <div className="bottom-top-inside">
            <div className="flex">
              <img src={time} alt="Time Efficiency Icon" className="icon" />
              <div className="text-content">
                <div className="heading">
                  <h5>Time Efficiency</h5>
                </div>
                <div className="text">
                  <p>Your time is precious, and we ensure you make the most of it by handling your tasks efficiently.</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <img src={well} alt="Well Being Icon" className="icon" />
              <div className="text-content">
                <div className="heading">
                  <h5>Well Being</h5>
                </div>
                <div className="text">
                  <p>We prioritize your well-being by taking care of routine tasks so you can focus on yourself.</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <img src={client} alt="Client Centric Icon" className="icon" />
              <div className="text-content">
                <div className="heading">
                  <h5>Client Centric</h5>
                </div>
                <div className="text">
                  <p>Our services are tailored to meet your unique needs and preferences, ensuring complete satisfaction.</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <img src={board} alt="Broad Service Accessibility Icon" className="icon" />
              <div className="text-content">
                <div className="heading">
                  <h5>Broad Service Accessibility</h5>
                </div>
                <div className="text">
                  <p>We offer a wide range of services to cater to all your needs, making convenience accessible to everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-about">
          <div className="left">
            <img src={thr}></img>
          </div>
          <div className="right">
            <div className="heading">
              <h5>Empowering Lives</h5>
            </div>
            <div className="text">
              <p>At DXB Care, we strive for excellence. We aim to be the global leader in concierge services, making time a luxury everyone can afford. By setting the standard for quality, we empower you to achieve your goals and live a more fulfilling life. Join us. Let DXB Care turn your everyday moments into extraordinary experiences, giving you the luxury of time to focus on what truly matters. Together, we can make every moment count.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
