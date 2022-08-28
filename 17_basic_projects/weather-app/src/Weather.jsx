import React from 'react'

const Weather = ({ cityWeather }) => {
  console.log(cityWeather)
  return (
    <div>
      <p>{cityWeather.name}</p>
      <p>{cityWeather.weather[0].main}</p>
      <p>{cityWeather.main.temp}°</p>
      <p>{cityWeather.wind.speed}km/h</p>
      <p>{cityWeather.main.humidity}%</p>
    </div>
  )
}

export default Weather
