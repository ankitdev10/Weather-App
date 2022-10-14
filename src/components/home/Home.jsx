import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import Weather from '../weather/Weather'
import "./home.css"

export default function Home() {
  return (
    <div className='home'>
      <Weather />
      <Sidebar />
    </div>
  )
}
