import React from "react"
import "./styles.css"
import Card from "../Сard/index"


const Cards = ({apiData}) => {

  let morningCard, afternoonCard, eveningCard 
  
  apiData.forEach(el => {
    if(el.timeOfDay === "morning"){
      morningCard = el
    }else if(el.timeOfDay === "afternoon"){
      afternoonCard = el
    }else if(el.timeOfDay === "evening"){
      eveningCard = el   
    }  
  });

  return (     
    <div className={"card"}>
      <Card card={morningCard}/> 
      <Card card={afternoonCard}/>
      <Card card={eveningCard}/>
    </div>  
	)
} 

export default Cards