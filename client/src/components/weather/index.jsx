import React, { useEffect, useState } from "react"
import Card from "./cards"
import "./styles.css"

const weatherURL = process.env.REACT_APP_API_URL_WEATHER

const Weather = () => {
  
  const timeOfDay = ["утро", "день", "вечер"]
  const [apiData, setApiData] = useState({})
    
  useEffect(() => {
    fetchData()
  }, [])

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
 
  return ( 
    <div className={"containerCard"}>    
      <h1 className={"head"}>Погода на 5 дней в Минске</h1> 
      <div className={"cards"}> 
        <Card apiData={currentArr[0]}/> 
        <Card apiData={currentArr[1]}/>
        <Card apiData={currentArr[2]}/>
        <Card apiData={currentArr[3]}/>
        <Card apiData={currentArr[4]}/>
        <Card apiData={currentArr[5]}/>
        <Card apiData={currentArr[6]}/>
        <Card apiData={currentArr[7]}/>
        <Card apiData={currentArr[8]}/>
        <Card apiData={currentArr[9]}/>
        <Card apiData={currentArr[10]}/>
        <Card apiData={currentArr[11]}/>
        <Card apiData={currentArr[12]}/>
        <Card apiData={currentArr[13]}/>
        <Card apiData={currentArr[14]}/>
      </div> 
    </div> 
	)
}

export default Weather