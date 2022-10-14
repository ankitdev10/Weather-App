import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='s'>
      <div className="s-info">
        <span className='s-title'>About us</span>
        <p className='s-desc'>This app was created for learning purposes. It uses React JS and the datas are fetched from OpenWeather Api.</p>
      </div>
      <div className="c">
        <button className='cbtn'>Contact Developer</button>
      </div>

    </div>
  )
}
