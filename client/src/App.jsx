import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Container from "./components/Container"
import NavBar from "./components/NavBar"
import Weather from "./components/Weather"

const App = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
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

          <Route path="/weather">
            <Weather />
          </Route>

          <Redirect to="/" />
        </Switch>
        <footer className={"autor"}>
        <a 
          className="autorLink" 
          href="https://www.linkedin.com/in/nickmoskalev/" 
          target="_blank"
          rel="noreferrer"
        >ⓒMoskalevNick</a>
      </footer> 
      </div>
    </Router>
  )
}

export default App
