import React from 'react'
import './Content.css'

export default function Content(props) {
  return (
    <div className='middle-content'>
        <div className="header">
        <h1 className='heading'>
            {props.type}
        </h1>
        </div>
      <div className="content">

      </div>
    </div>
  )
}
