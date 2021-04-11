import React from "react"
import "./styles.css"

const Card = ({card}) => {
  
  if(!card){
    return (
      <div>

      </div>
    )
  }

  let dayOfWeek 

  if (card){
    dayOfWeek = new Date(card.dt_txt).toLocaleString('en', {weekday: 'short'})
  }

  return ( 
    <div className={"cardItem"}> 
      <div>{new Date(card.dt_txt).toLocaleString("en", {month: 'short',	day: 'numeric'})}, {dayOfWeek}</div>
      <img
        src={`http://openweathermap.org/img/w/${card.weather[0].icon}.png`}
        alt="weather status icon"
        className="weather-icon"
      />
      <div>{card.weather[0].description}</div>
      <div>{card.main.temp}&deg; C</div>
      <div>feels like: {card.main.feels_like}&deg; C</div>
      <div>humidity: {card.main.humidity}%</div>
      <div>wind speed: {card.wind.speed} m/s</div>
    </div>   
	)
} 

export default Card