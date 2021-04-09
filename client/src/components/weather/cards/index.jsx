import React from "react"
import "./styles.css"

const Card = ({apiData}) => {
  
  let dayOfWeek = new Date(apiData.dt_txt).toLocaleString('ru', {weekday: 'short'})

  console.log();

  return (     
    <div className={"card"}>
      <div>{new Date(apiData.dt_txt).toLocaleString("ru", {month: 'short',	day: 'numeric'})}, {dayOfWeek}, {apiData.timeOfDay}</div>
      <img
        src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
        alt="weather status icon"
        className="weather-icon"
      />
      <div>{apiData.weather[0].description}</div>
      <div>{apiData.main.temp}&deg; C</div>
      <div>ощущается как: {apiData.main.feels_like}&deg; C</div>
      <div>влажность: {apiData.main.humidity}%</div>
      <div>скорость ветра: {apiData.wind.speed} м/с</div>
    </div>  
	)
} 

export default Card