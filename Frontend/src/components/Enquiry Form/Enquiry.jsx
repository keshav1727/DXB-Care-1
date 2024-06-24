import React from 'react'
import './Enquiry.css'

export default function Enquiry() {
  return (
    <div className='enquiry-form'>
        <div className="container">
        <div className="header">
            <h1 className='heading'>Subscribe for membership/updates</h1>
        </div>
      <div className="content-container">
        <form action="onclick">
            <div className="info">
            <label htmlFor="Name">Name</label><input type="text" />
            </div>
            <div className="info">
            <label htmlFor="Email">Email</label><input type="email" />
            </div>
            <div className="info">
            <label htmlFor="Country-Code">Country Code
            </label>
            <input type="text"/>
            <label htmlFor="Mobile">Mobile Number</label>
            <input type="tel" />
            </div>
            <div className="info">
            <label htmlFor="Enquiry">Enquiry</label>
            <input type="text" />
            </div>
        </form>
      </div>
      </div>
    </div>
  )
}
