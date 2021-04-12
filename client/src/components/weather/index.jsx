import React, { useEffect, useMemo, useState } from "react"
import Cards from "./cards"
import "./styles.css"
import Modal from "./Modal/index"
import {IonButton} from "@ionic/react"

const Weather = () => {
  
  const timeOfDay = ["morning", "afternoon", "evening"]
  
  const [apiData, setApiData] = useState({})
  const [isModalChangeCityOpen, setModalChangeCityOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [city, setCity] = useState("minsk")
   
  useEffect(() => {
    fetchData()
  }, [city])
  
  const weatherURL = useMemo(() => {
    return process.env.REACT_APP_API_URL_WEATHER + city + process.env.REACT_APP_API_URL_WEATHER_2
  }, [city])
  
  const changeCity = () => {
    setCity(inputValue)
    setModalChangeCityOpen(false)
    setInputValue("")
  }

  async function fetchData() {
    const responce = await fetch(weatherURL)
    const data = await responce.json()
    setApiData(data)
  }

  if(!apiData.list){
    return null
  }

  apiData.list.map((el) => {
    if(el.dt_txt.includes("9:00:00")){
      el.timeOfDay = timeOfDay[0]
    }
    if(el.dt_txt.includes("15:00:00")){
      el.timeOfDay = timeOfDay[1]
    }
    if(el.dt_txt.includes("21:00:00")){
      el.timeOfDay = timeOfDay[2]
    }
    return apiData.list
  })

  let currentArr = apiData.list.filter((el) => {
    return el.timeOfDay !== undefined   
  }) 

  currentArr.map((el) => {
  if(new Date(el.dt_txt).toLocaleString("en", {day: 'numeric'}) 
      === new Date().toLocaleString("en", {day: 'numeric'})){
        el.todayOrTomorrow = "today"
    } else if((+new Date(el.dt_txt).toLocaleString("en", {day: 'numeric'})) 
      === +new Date().toLocaleString("en", {day: 'numeric'})+1){
        el.todayOrTomorrow = "tomorrow"
    } else if((+new Date(el.dt_txt).toLocaleString("en", {day: 'numeric'})) 
      === +new Date().toLocaleString("en", {day: 'numeric'})+2){
        el.todayOrTomorrow = "after tomorrow"
    }
    return currentArr
  })

  currentArr = apiData.list.filter((el) => {
    return el.todayOrTomorrow !== undefined   
  }) 

  let todayArr = currentArr.filter((el) => {
    return el.todayOrTomorrow === "today"  
  }) 

  let tomorrowArr = currentArr.filter((el) => {
    return el.todayOrTomorrow === "tomorrow"  
  }) 

  let afterTomorrowArr = currentArr.filter((el) => {
    return el.todayOrTomorrow === "after tomorrow"  
  }) 

  const trigerModalChangeCity = () => {
    setModalChangeCityOpen((prev) => !prev)
  }

  return ( 
    <div className={"containerCard"}>    
      <div className={"header"}>
        <h1>weather for 3 days in {city} city</h1>
        <IonButton onClick={trigerModalChangeCity} color="primary" className={"buttonChange"}>change city</IonButton>
      </div>
      <div className={"timesOfDay"}>
        <div></div>
        <div>{timeOfDay[0]}</div>
        <div>{timeOfDay[1]}</div>
        <div>{timeOfDay[2]}</div>
      </div>
      <div className={"cards"}> 
        <div className={"dayTitle"}>today</div>
        <Cards apiData={todayArr}/>  
      </div>
      <div className={"cards"}>
        <div className={"dayTitle"}>tomorrow</div>
        <Cards apiData={tomorrowArr}/> 
      </div>
      <div className={"cards"}>
        <div className={"dayTitle"}>after tomorrow</div>
        <Cards apiData={afterTomorrowArr}/> 
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
