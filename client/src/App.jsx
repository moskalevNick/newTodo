import React, { useState } from "react"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Container from "./components/Container"
import NavBar from "./components/navBar"

const App = () => {
  
  const [isDay, setDay] = useState("")
    
  const triggerNight = () => {
    setDay((prev) => !prev)
  } 

  return (
    <Router>
      <div className={isDay ? "day" : "night"}>
        <NavBar/>

        <Switch>
          
          <Route path="/" exact>
            <Container type={"main"}/>
          </Route>
        
          <Route path="/important">
            <Container type={"important"}/>
          </Route>
        
          <Route path="/checked">
            <Container type={"checked"}/>
          </Route>

          <Redirect to="/" />
        </Switch>
        
        <button className={"nightButton"} onClick={triggerNight}>
          <FontAwesomeIcon className={"iconMoonNight"} icon={isDay ? faSun : faMoon} size="4x" />
        </button>
      
      </div>
    </Router>
  )
}

export default App
