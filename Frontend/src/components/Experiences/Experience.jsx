import React from 'react'
import './Experience.css'
import aa from './princehonasa_Helicopter_tour_in_dubai_it_should_be_real_image_w_f4e690eb-89f7-42e8-a7ee-13e34758f7fe.png'
import bb from './princehonasa_Luxury_car_in_dubai_in_day_light_with_dubai_skylin_0a5ed554-7ee1-4ae3-8c95-19be9f034f29.png'
import cc from './princehonasa_luxury_yatch_image_in_dubai_in_night_light_with_re_e7463b31-2f51-453f-8e2e-2dc282bfc5bb.png'
import dd from './princehonasa_Underwater_Aquarium_hotel_dubai_with_real_elements_9a8ccc3e-634c-460b-a5c3-65d9c1360d72.png'

export default function Experience() {
  return (
    <div className='experience'>
        <div className="header">
            <h1 className='heading'>Experiences</h1>
        </div>
      <div className='grid-section'>
        <div className="items">
          <img src={bb} alt="" />
          <div className="layer">
            Luxury Cars
          </div>
        </div>
        <div className="items">
          <img src={aa} alt="" />
          <div className="layer">
            Luxury Cars
          </div>
        </div>
        <div className="items">
          <img src={cc} alt="" />
          <div className="layer">
            Luxury Cars
          </div>
        </div>
        <div className="items">
          <img src={dd} alt="" />
          <div className="layer">
            Luxury Cars
          </div>
        </div>
      </div>

        <div className="button-container">
            <button>Discover More</button>
        </div>

    </div>
  )
}
