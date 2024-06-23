import React from 'react'
import { useState } from 'react';
import './Member_navbar.css'
import './Personal.css'
import logo from './png-logo-white-1@2x.png'

export default function Member_navbar(props) {
        const[menu, setMenu] = useState("Home");
  return (
    <div className='personal'>
    <div className="navbar-member">
        <div className="member-left">
            <div className="logo-image">
            <img src={logo} alt="" />
            </div>
        </div>
        <div className="member-right">
            {/* <div className="menu-list"> */}
            <ul className='navbar-menulist'>
          <li onClick={() => setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
          <li onClick={() => setMenu("About Us")} className={menu==="About Us"?"active":""}>About Us</li>
          <li onClick={() => setMenu("Services")} className={menu==="Services"?"active":""}>Experiences</li>
          <li onClick={() => setMenu("Membership")} className={menu==="Membership"?"active":""}>Membership</li>
       </ul>
            {/* </div> */}
        </div>
    </div>
    <div className='img-corporate'>
<div className="image">

</div>
        <div className="header">
            <h1>{props.type}</h1>
        </div>
        </div>
        <div className="coporate-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum quae est animi officiis numquam nisi molestiae facere? Cupiditate animi dicta soluta, deserunt aspernatur doloremque tempore numquam fuga repudiandae non officia aperiam ea officiis? Vel neque quaerat nam, optio ut nulla earum quod enim libero voluptate soluta iure excepturi, culpa itaque quas eaque quibusdam. Deleniti, fugiat accusantium repudiandae, suscipit minus enim ex similique eaque possimus omnis quia velit expedita assumenda. Rem deleniti minima atque esse debitis! Facilis veniam quam hic dolor? Eum dolores saepe corporis possimus, tenetur accusamus vitae voluptatem sunt quae atque inventore minus asperiores modi iusto autem quidem quod. Temporibus, mollitia sed. Labore dolorem maiores ipsum, quas distinctio quos veritatis aperiam alias mollitia earum, voluptatem placeat sequi quaerat. Quas recusandae veniam molestiae hic corrupti non, accusamus, soluta amet eum dolorum necessitatibus eaque nesciunt ipsam! Quia sequi id expedita odit. Reprehenderit autem dolorum magnam doloribus vero maxime, doloremque est.</p>
        </div>
        
    </div>
  )
}
