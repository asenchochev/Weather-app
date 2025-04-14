import React, { useEffect, useState } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const weatherIcons = {
    '01d': clear_icon,
    '01n': clear_icon,
    '02d': cloud_icon,
    '02n': cloud_icon,
    '03d': cloud_icon,
    '03n': cloud_icon,
    '04d': cloud_icon,
    '04n': cloud_icon,
    '09d': drizzle_icon,
    '09n': drizzle_icon,
    '10d': rain_icon,
    '10n': rain_icon,
    '11d': rain_icon,
    '11n': rain_icon,
    '13d': snow_icon,
    '13n': snow_icon,
    '50d': drizzle_icon,
    '50n': drizzle_icon,
  };

  const WeatherId = 'e9a130bf26e2c6a2986072427dc95e0d';

  const search = async (cityName) => {
    if (!cityName) return;
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${WeatherId}`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod !== 200) {
        alert('City not found');
        return;
      }

      const icon = weatherIcons[data.weather[0].icon] || clear_icon;

      setWeatherData({
        humidity: data.main.humidity,
        wind: data.wind.speed,
        city: data.name,
        degrees: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  useEffect(() => {
    search('New York');
  }, []);

  return (
    <div className='weather'>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <img
          src={search_icon}
          alt='search'
          onClick={() => search(city)}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {weatherData && (
        <>
          <img src={weatherData.icon} alt='weather' className='weather_icon' />
          <p className='degrees'>{weatherData.degrees}°c</p>
          <p className='location'>{weatherData.location}</p>
          <div className='weather-data'>
            <div className='col'>
              <img src={humidity_icon} alt='humidity' />
              <p>Humidity</p>
              <p>{weatherData.humidity}%</p>
            </div>
            <div className='col'>
              <img src={wind_icon} alt='wind' />
              <p>Wind</p>
              <p>{weatherData.wind} km/h</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
