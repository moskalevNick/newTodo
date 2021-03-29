import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Container from "./components/Container"
import NavBar from "./components/navBar"

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

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
