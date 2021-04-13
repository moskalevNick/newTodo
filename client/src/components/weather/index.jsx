import React, { useEffect, useState } from "react"
import Cards from "./Сards"
import "./styles.css"
import Modal from "./Modal/index"
import {IonButton} from "@ionic/react"

const Weather = () => {
  
  const [isModalChangeCityOpen, setModalChangeCityOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [city, setCity] = useState("minsk")
  const [weatherByDays, setWeatherByDays] = useState ({
    today: [],
    tomorrow: [],
    afterTomorrow: []
  })
  
  useEffect(() => {
    fetchData()
  }, [city])

  const changeCity = () => {
    setCity(inputValue)
    setModalChangeCityOpen(false)
    setInputValue("")
  }
      
  async function fetchData() {
    const weatherURL = process.env.REACT_APP_API_URL_WEATHER + city + process.env.REACT_APP_API_URL_WEATHER_2
    const responce = await fetch(weatherURL)
    const data = await responce.json()
    if(data)  setDates(data)
  }

  function setDates(data) {
    const nowDate = new Date();

    const todayDate = `${
      nowDate.getFullYear()
    }-${
      ( ( nowDate.getMonth() + 1 ) < 10 ) ? `0${ nowDate.getMonth() + 1 }` : nowDate.getMonth() + 1
    }-${
      ( nowDate.getDate() < 10 ) ? `0${ nowDate.getDate() }` : nowDate.getDate()
    }`

    const tomorrowDate = `${
      nowDate.getFullYear()
    }-${
      ( ( nowDate.getMonth() + 1 ) < 10 ) ? `0${ nowDate.getMonth() + 1 }` : nowDate.getMonth() + 1
    }-${
      ( ( nowDate.getDate() + 1 ) < 10 ) ? `0${ nowDate.getDate() + 1 }` : nowDate.getDate() + 1
    }`

    const afterTomorrowDate = `${
      nowDate.getFullYear()
    }-${
      ( ( nowDate.getMonth() + 1 ) < 10 ) ? `0${ nowDate.getMonth() + 1 }` : nowDate.getMonth() + 1
    }-${
      ( ( nowDate.getDate() + 2 ) < 10) ? `0${ nowDate.getDate() + 2 }` : nowDate.getDate() + 2
    }`

  const today = []
  const tomorrow = []
  const afterTomorrow = []

  data && data.list && data.list.forEach( el => {
    if (
      el.dt_txt.includes( '9:00:00' ) ||
      el.dt_txt.includes( '15:00:00' ) ||
      el.dt_txt.includes( '21:00:00' )
    ) {
      if ( el.dt_txt.includes( todayDate ) ) today.push( el )
      if ( el.dt_txt.includes( tomorrowDate ) ) tomorrow.push( el )
      if ( el.dt_txt.includes( afterTomorrowDate ) ) afterTomorrow.push( el )
    }
  } );

  if (today.length === 1) {
    today.unshift( null )
    today.unshift( null )
  }  
  
  if (today.length === 2) {
    today.unshift( null )
  }  

  setWeatherByDays( { today, tomorrow, afterTomorrow } )

}

  const trigerModalChangeCity = () => {
    setModalChangeCityOpen((prev) => !prev)
  }

  return ( 
    <div>    
      <div className={"header"}>
        <h1>weather for 3 days in {city} city</h1>
        <IonButton 
          onClick={trigerModalChangeCity} 
          color="primary" 
          className={"buttonChange"}
        >
          change city
        </IonButton>
      </div>
      <div className={"timesOfDay"}>
        <div></div>
        <div>morning</div>
        <div>afternoon</div>
        <div>evening</div>
      </div>
      <div className = {"containerCards"}>
        <div className={"cards"}> 
          <div className={"dayTitle"}>today</div>
          <Cards data={weatherByDays.today}/>  
        </div>
        <div className={"cards"}>
          <div className={"dayTitle"}>tomorrow</div>
          <Cards data={weatherByDays.tomorrow}/> 
        </div>
        <div className={"cards"}>
          <div className={"dayTitle"}>after tomorrow</div>
          <Cards data={weatherByDays.afterTomorrow}/> 
        </div>
      </div> 
      <Modal
        setModalChangeCityOpen={setModalChangeCityOpen}
        isModalChangeCityOpen={isModalChangeCityOpen}
        setInputValue={setInputValue}
        inputValue={inputValue}
        changeCity={changeCity}  
       /> 
    </div> 
	)
}

export default Weather
