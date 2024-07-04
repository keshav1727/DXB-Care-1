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
import Navbartop from './Navbar';


export default function Aboutus() {
  return (
    <div className='aboutus' id='aboutus'>
      <Navbartop/>
      <div className="img-corporate">
        <div className="image">
        <img src={main} alt="" />
        </div>
      </div>
      <div className="about-below">
        <div className="header">
          <h2>About Us</h2>
        </div>
        <div className="about-middle">
          <div className="middle-left">
            <div className="middle-left-top">
              
              <div className="text">
                <p>We’re dedicated to helping you maximize your time. Our unparalleled concierge services make routine tasks simple and stress-free, allowing you to reach your professional and personal goals effortlessly. We believe convenience should be accessible to those who truly value it. 
</p>
              </div>
            </div>
            <div className="middle-left-bottom">
              
              <div className="text">
                <p>Our commitment to making everything achievable means we provide unparalleled availability and a tailored lifestyle that extends well into the future. From arriving in Dubai until the day you bid farewell, we ensure every detail is managed with care and precision</p>
              </div>
            </div>
          </div>
          <div className="middle-right">
            <div className="right-image">
              <img src={sec}></img>
            </div>
          </div>
        </div>
        <div className="bottom-about">
          <div className="left">
            <img src={thr}></img>
          </div>
          <div className="right">
            <div className="text">
              <p>With DXB Care, you gain access to a dedicated network of consultants and specialists in Dubai who can fulfill all your desires, requests, and necessities. Whether it's car rentals, yacht rentals, exclusive restaurant reservations, private shopping, fun activities, or event planning, DXB Care has you covered.</p>
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
        <div className="footer-top">
          <div className="text">
          <p>
          Join us and let DXB Care simplify your daily routine, giving you the time to focus on what truly matters. Together, we can make every moment count.
</p>
</div>
<div className="text">
<p>
Discover the DXB Care difference. Experience the gift of time, personalized service, and top-notch support. Whether you're streamlining your daily routine or reaching new professional heights, DXB Care is here to support you every step of the way.

          </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
