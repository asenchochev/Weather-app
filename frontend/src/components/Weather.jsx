import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'


const Weather = () => {
  return (
    <div className='weather'>
      <div className='search-bar'>
        <input type="text" placeholder='Search' />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear_icon} alt="" className='weather_icon' />
      <p className='degrees'>16°c</p>
        <p className='location'>London</p>
        <div className='weather-data'>
            <div className='col'>
                <img src={humidity_icon} alt="" />
                <p>Humidity</p>
                <p>80%</p>
            </div>
            <div className='col'>
                <img src={wind_icon} alt="" />
                <p>Wind</p>
                <p>10km/h</p>
            </div>
        </div>
    </div>
  )
}

export default Weather
