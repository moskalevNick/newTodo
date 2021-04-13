import React from "react"
import "./styles.css"
import Card from "../Сard/index"


const Cards = ( { data } ) => {

  return (     
    <div className={"card"}>
      {
        data.map( ( el, index ) => (
          <Card card={ el } key={ index }/>
        ) ) 
      }  
    </div>  
	)
} 

export default Cards