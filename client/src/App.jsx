import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import { checkAuth, setTodos } from './redux/actions';
import Container from "./components/Container"
import NavBar from "./components/NavBar"
import Weather from "./components/Weather"
import Auth from "./components/Auth"
import Registration from "./components/Registration"

const App = () => {   
  const dispatch = useDispatch()
  const { isAuth, isLoading } = useSelector(state => state)
  
	useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
    	dispatch(setTodos())
  }, [dispatch])

  if (isLoading) {
    return <div>Загрузка...</div>  //сделать красиво!!!!!!!!!!!!!!!!!!!
  }

  if (!isAuth) {
    return <Auth/>
  }

	return (
    <div>
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
   					
						<Route path="/auth">
							<Redirect to="/" />
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
    </div>
  );
};

export default App;