import React, {useEffect}  from "react"
import { NavLink } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {IonButton} from "@ionic/react"

import { faMoon, faSun, faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./styles.css"
import {changeTheme, logout} from '../../redux/actions'

const NavBar = () => {
  
  const dispatch = useDispatch()
  const { themeIsDay } = useSelector(state => state)

  useEffect(() => {
    document.body.setAttribute('color-theme', themeIsDay ? "light" : "dark")
  }, [themeIsDay]) 

  const triggerNight = () => {
    dispatch(changeTheme())   
  }  

  const logoutUser = () => {
    if (localStorage.getItem('token')){
      dispatch(logout())
      localStorage.removeItem('token')
    }  
  }

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
          <NavLink 
            to="/weather" 
            className="navBar_item" exact activeClassName="underline"
          >
            Weather
          </NavLink>
        </div>
        <div className="containerButtonChangeTheme">
          <NavLink to="/auth" onClick={logoutUser} className="buttonAuth">
          <FontAwesomeIcon 
            className={"icon"} 
            icon = { localStorage.getItem('token') ? faSignOutAlt : faUserCircle } 
            size="2x"
          />
        </NavLink>
        <IonButton onClick={triggerNight} className="buttonChangeTheme">
          <FontAwesomeIcon 
            className={"icon"} 
            icon={themeIsDay ? faSun : faMoon} 
            size="2x"
          />
        </IonButton> 
        </div>
        
      </nav> 
    </div>  
	)
}

export default NavBar