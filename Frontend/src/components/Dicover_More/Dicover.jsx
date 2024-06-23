import React from 'react'
import './Discover.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Member_navbar from '../Membership-pages/Member_navbar';
import Footer from '../Footer/Footer'

export default function Discover() {
    const settings = {
        // dots:true,
        infinite:true,
        speed:500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    
  return (
    <>
    <Member_navbar></Member_navbar>

    <div className='experience-container'>
    
        <div className="luxe">
            <div className="head">
            <h1>Experiences</h1>
            </div>
        
         <div className="header">
         
            <h1>Luxe Experience</h1>
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


            <div className="header">
            <h1>Adventure Sports</h1>
         </div>
         <Slider {...settings}>
            {dat.map((d) => (
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

            <div className="header">
            <h1>Desert Saffari</h1>
         </div>
         <Slider {...settings}>
            {dataa.map((d) => (
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

            <div className="header">
            <h1>Family Care</h1>
         </div>
         <Slider {...settings}>
            {dataaa.map((d) => (
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

            <div className="header">
            <h1>Health & Welness</h1>
         </div>
         <Slider {...settings}>
            {dataaaa.map((d) => (
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

            <div className="header">
            <h1>Events Management</h1>
         </div>
         <Slider {...settings}>
            {dataaaaa.map((d) => (
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
    <Footer></Footer>
    </>
  )
}

const data = [
    {
        name: 'Luxary Car',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores beatae dolore voluptatem!'
    },
    {
        name: 'Private Jet',
        text: 'opd'
    },
    
    {
        name: 'Luxe Shopping',
        text: 'opd'
    },
    {
        name: 'Yatch',
        text: 'opd'
    },
    
]

const dat = [
    {
        name: 'Shooting',
        text: ''
    },
    {
        name: 'Jet Ski',
        text: 'opd'
    },
    
    {
        name: 'Scuba Diving',
        text: 'opd'
    },
    {
        name: 'Gyrocopter Flight',
        text: 'opd'
    },
    
]

const dataa  = [
    {
        name: 'BBQ Dinner',
        text: ''
    },
    {
        name: 'Quad Biking',
        text: 'opd'
    },
    
    {
        name: 'Camel Riding',
        text: 'opd'
    },
    {
        name: 'Sunset Picture',
        text: 'opd'
    },
    
]

const dataaa = [
    {
        name: 'Child Care',
        text: ''
    },
    {
        name: 'Personal Assistance',
        text: 'opd'
    },
    
    {
        name: 'Play School Pet Care',
        text: 'opd'
    },
    {
        name: 'Health Care',
        text: 'opd'
    },
    
]

const dataaaa = [
    {
        name: 'Yoga',
        text: ''
    },
    {
        name: 'Spa',
        text: 'opd'
    },
    
    {
        name: 'Aerobics/Jumba',
        text: 'opd'
    },
    {
        name: 'Meditation',
        text: 'opd'
    },
    
]

const dataaaaa = [
    {
        name: 'Web3 Events',
        text: ''
    },
    {
        name: 'Proposals',
        text: 'opd'
    },
    
    {
        name: 'Parties Access',
        text: 'opd'
    },
    {
        name: 'Special Events',
        text: 'opd'
    },
    
]
