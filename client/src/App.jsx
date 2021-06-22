import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Container from "./components/Container"
import NavBar from "./components/NavBar"
import Weather from "./components/Weather"
import Auth from "./components/Auth"
import Registration from "./components/Registration"

const App = () => {
  return (
    <Router>
      <div className="container">     
        <Switch>       
          <Route path="/" exact>
            <NavBar />
            <Container type={"main"}/>
          </Route>
        
          <Route path="/important">
            <NavBar />
            <Container type={"important"}/>
          </Route>
        
          <Route path="/checked">
            <NavBar />
            <Container type={"checked"}/>
          </Route>

          <Route path="/weather">
            <NavBar />
            <Weather />
          </Route>

          <Route path="/auth">
            <Auth />
          </Route>

          <Route path="/registration">
            <Registration />
          </Route>

          <Redirect to="/" />
        </Switch>
        <footer className={"autor"}>
        <a 
          className="autorLink" 
          href="http://www.linkedin.com/in/nickmoskalev/" 
          target="_blank"
          rel="noreferrer"
        >ⓒMoskalevNick</a>
      </footer> 
      </div>
    </Router>
  )
}

export default App
