import React, { useState } from "react"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import AllImportant from "./components/AllImportant"
import AllChecked from "./components/AllChecked"
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
          
          <Route path="/">
            <div>Hello</div>
            <Container />
          </Route>
        
          <Route path="/important">
            <AllImportant />
          </Route>
        
          <Route path="/checked">
            <AllChecked />
          </Route>
        
        </Switch>
        
        <button className={"nightButton"} onClick={triggerNight}>
          <FontAwesomeIcon className={"iconMoonNight"} icon={isDay ? faSun : faMoon} size="4x" />
        </button>
      
      </div>
    </Router>
  )
}

export default App
