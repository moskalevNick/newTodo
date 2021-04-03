import React  , { useState,  useEffect}    from "react"
import { NavLink } from "react-router-dom"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {createStore, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk"

import "./styles.css"
import {changeTheme} from "../../redux/actions"
import {rootReducer} from '../../redux/rootReducer'

const NavBar = () => {
    
   const store = createStore(
    rootReducer,  
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

  const triggerNight = () => {
    if (document.body.setAttribute === "light" ) {
      document.body.setAttribute('color-theme', 'dark')
    } else {
      document.body.setAttribute('color-theme', 'light')
    }  
    store.dispatch(changeTheme())  
  }
  

  store.subscribe(() => {
    
    const state = store.getState() 
    document.body.setAttribute('color-theme', 'dark')
    console.log(document.body.setAttribute);
  })  
    
  store.dispatch({type : "___INITAPP___"})  

    /* const [isDay, setDay] = useState(true)
    
  useEffect(() => {
    document.body.setAttribute('color-theme', 'light')
  }, []) 

  const triggerNight = () => {
    setDay((prev) => !prev)
    if ( isDay ) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }  */ 
   
  return (
    <div>  
      <nav className="navBar">
        <div className="links">
          <NavLink 
            to="/" 
            className="navBar_item" exact activeClassName="underline" 
          >
            All
          </NavLink>
          <NavLink 
            to="/important" 
            className="navBar_item" exact activeClassName="underline"
          >
            Important
          </NavLink>
          <NavLink 
            to="/checked" 
            className="navBar_item" exact activeClassName="underline"
          >
            Checked
          </NavLink>
        </div>
        <button className={"nightButton"} onClick={triggerNight}>
          <FontAwesomeIcon 
            className={"icon"} 
            icon={document.body.classList==="light" 
              ? faSun 
              : faMoon} 
            size="4x"
          />
        </button>  
      </nav>
      <div className="autor">
        <a 
          className="autorLink" 
          href="https://www.linkedin.com/in/nickmoskalev/" 
          target="_blank"
          rel="noreferrer"
        >ⓒMoskalevNick</a>
      </div>  
    </div>  
	)
}

export default NavBar