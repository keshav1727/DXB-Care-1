import React from 'react'
import './Discover.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Member_navbar from '../Membership-pages/Member_navbar';
import Footer from '../Footer/Footer'
import carImage from './car.png'
import heli from './princehonasa_Helicopter_tour_in_dubai_it_should_be_real_image_w_f4e690eb-89f7-42e8-a7ee-13e34758f7fe.png'
import yatch from './princehonasa_A_big_size_luxury_yatch_in_dubai_in_day_light_with_a8d12837-356a-4beb-aec3-b45210b0157a.png'
import jetski from './princehonasa_Jetski_in_dubai_2_people_doing_jetski_real_image_o_19b55ca2-a3bc-4134-8691-d8fc914bcfc9.png'
import scuba from './princehonasa_scuba_diving_real_images_of_dubai_38dc7be5-ac5a-4323-b825-37295fa0224b.png'
import bbq from './princehonasa_Luxury_desert_dining_in_dubai_it_should_look_real__5250d5c7-0d36-4973-a0eb-4427ea03f374.png'
import quad from './princehonasa_buggy_tour_in_dubai_real_image_shot_by_a_photograp_768a4910-c63d-45fc-98f4-0c0a6b2cbb68.png'
import camel from './princehonasa_camel_tour_in_dubai_deserts_a_real_image_which_is__6c9c27db-c326-4ae7-ae1c-f2617becbba4.png'
import spa from './princehonasa_real_images_of_spa_massage_in_dubai_51ae1b1b-5843-49fa-83a7-4006ad70ba28.png'
import shopping from './2 (1).jpg'
import pvtjet from './princehonasa_A_real_image_shot_by_a_photographer_of_a_private_j_c954b67a-ce8b-44da-b50c-39e497098a67.png'
import prsnl from './princehonasa_a_realpicture_for_personal_assistance_service_rela_a7be0137-b257-4041-bb5e-5dfd579dbaa5.png'
import pet from './princehonasa_pet_care_real_image_conceirge_service_related_imag_4e9ba288-09f8-4880-8aef-295e93a47048.png'
import web3 from './web3.jpg'
import proposal from './princehonasa_A_proposal_image_of_a_real_face_couple_in_dubai_a__6e713de2-3a9f-4a4f-ae60-c40f1d6301bf.png'
import zumba from './princehonasa_a_real_person_doing_aerobics_or_zumba_in_closed_ar_3c0db109-a48c-4c2b-8ffb-40fe9439920e.png'
import yoga from './medi 2.jpg'
import event from './6.jpg'
import party from './5 (1).jpg'
import child from './13.jpg'
import health from './12.jpg'
import shoot from './Shooting 1.jpg'
import medi from './princehonasa_yoga_pictures_of_a_real_individual_81e68c37-673c-4fe8-87e0-0fefa3b09d4f (1).png'
import sunset from './sunset.jpg'

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
         <div className="header-cont">
            <h1>Luxe Experience</h1>
         </div>
         <Slider {...settings}>
    {data.map((d) => (
        <div key={d.name} className="slider-back">
            <div className="container-slider">
                <div className="image-container">
                    <div className="heading-cont">
                        <p>{d.name}</p>
                    </div>
                    <div className="image-bg">
                    <img src={d.image} alt={d.name} />
                    </div>
                </div>
            </div>
        </div>
    ))}
</Slider>

            <div className="header-cont">
            <h1>Adventure Sports</h1>
         </div>
         <Slider {...settings}>
    {dat.map((d) => (
        <div key={d.name} className="slider-back">
            <div className="container-slider">
                <div className="image-container">
                    <div className="heading-cont">
                        <p>{d.name}</p>
                    </div>
                    <div className="image-bg">
                    <img src={d.image} alt={d.name} />
                    </div>
                </div>
            </div>
        </div>
    ))}
</Slider>

            <div className="header-cont">
            <h1>Desert Saffari</h1>
         </div>
         <Slider {...settings}>
    {dataa.map((d) => (
        <div key={d.name} className="slider-back">
            <div className="container-slider">
                <div className="image-container">
                    <div className="heading-cont">
                        <p>{d.name}</p>
                    </div>
                    <div className="image-bg">
                    <img src={d.image} alt={d.name} />
                    </div>
                </div>
            </div>
        </div>
    ))}
</Slider>

            <div className="header-cont">
            <h1>Family Care</h1>
         </div>
         <Slider {...settings}>
    {dataaa.map((d) => (
        <div key={d.name} className="slider-back">
            <div className="container-slider">
                <div className="image-container">
                    <div className="heading-cont">
                        <p>{d.name}</p>
                    </div>
                    <div className="image-bg">
                    <img src={d.image} alt={d.name} />
                    </div>
                </div>
            </div>
        </div>
    ))}
</Slider>

            <div className="header-cont">
            <h1>Health & Welness</h1>
         </div>
         <Slider {...settings}>
    {dataaaa.map((d) => (
        <div key={d.name} className="slider-back">
            <div className="container-slider">
                <div className="image-container">
                    <div className="heading-cont">
                        <p>{d.name}</p>
                    </div>
                    <div className="image-bg">
                    <img src={d.image} alt={d.name} />
                    </div>
                </div>
            </div>
        </div>
    ))}
</Slider>

            <div className="header-cont">
            <h1>Events Management</h1>
         </div>
         <Slider {...settings}>
    {dataaaaa.map((d) => (
        <div key={d.name} className="slider-back">
            <div className="container-slider">
                <div className="image-container">
                    <div className="heading-cont">
                        <p>{d.name}</p>
                    </div>
                    <div className="image-bg">
                    <img src={d.image} alt={d.name} />
                    </div>
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
        image: carImage
    },
    {
        name: 'Private Jet',
        image: pvtjet
    },
    
    {
        name: 'Luxe Shopping',
        image: shopping
    },
    {
        name: 'Yatch',
        image: yatch
    },
    
]

const dat = [
    {
        name: 'Shooting',
        image: shoot
    },
    {
        name: 'Jet Ski',
        image: jetski
    },
    
    {
        name: 'Scuba Diving',
        image: scuba
    },
    {
        name: 'Gyrocopter Flight',
        image: heli
    },
    
]

const dataa  = [
    {
        name: 'BBQ Dinner',
        image: bbq
    },
    {
        name: 'Quad Biking',
        image: quad
    },
    
    {
        name: 'Camel Riding',
        image: camel
    },
    {
        name: 'Sunset Picture',
        image: sunset
    },
    
]

const dataaa = [
    {
        name: 'Child Care',
        image: child
    },
    {
        name: 'Personal Assistance',
        image: prsnl
    },
    
    {
        name: 'Play School Pet Care',
        image: pet
    },
    {
        name: 'Health Care',
        image: health
    },
    
]

const dataaaa = [
    {
        name: 'Yoga',
        image: yoga
    },
    {
        name: 'Spa',
        image: spa
    },
    
    {
        name: 'Aerobics/Jumba',
        image: zumba
    },
    {
        name: 'Meditation',
        image: medi
    },
    
]

const dataaaaa = [
    {
        name: 'Web3 Events',
        image: web3
    },
    {
        name: 'Proposals',
        image: proposal
    },
    
    {
        name: 'Parties Access',
        image: party
    },
    {
        name: 'Special Events',
        image: event
    },
    
]
