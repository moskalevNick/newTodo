import React, {useEffect, useState} from "react"

const weatherURL = process.env.REACT_APP_API_URL_WEATHER

const Wether = () => {

  const [apiData, setApiData] = useState({});
     
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(weatherURL)
    const data = await response.json()
    setApiData(data)
  }  

  if (!apiData.list){
    return null
  }
  
  return (      
    <div>weather
            <img
              src={`http://openweathermap.org/img/w/${apiData.list[0].weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />  
      </div>      
  );
}

export default Wether
