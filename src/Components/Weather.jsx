import React from 'react'
import './Weather.css'

const Weather = ({ temp, city, country, date, emoji, weather }) => {
  return (
    <div className="container">

      <div className="weather">

        <div className="weather1">
          {temp}°C
        </div>
        <div className="weather2">

          <p>{city}  {country}</p>
          <span>{date}</span>
        </div>
        <div className="weather3">
          <p><img src={emoji} alt="img" /></p>
          <span>
            {weather}
          </span>
        </div>
      </div>

    </div>
  )
}

export default Weather