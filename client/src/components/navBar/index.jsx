import React, {useEffect}  from "react"
import { NavLink } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {IonButton} from "@ionic/react"

<<<<<<< HEAD
import { faMoon, faSun, faSignInAlt } from "@fortawesome/free-solid-svg-icons"
=======
import { faMoon, faSun, faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
>>>>>>> 5838a3fde47a05a2fe41db034bc2b0dc5085ba63
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./styles.css"
import {changeTheme, logout} from '../../redux/actions'

const NavBar = () => {
  
  const dispatch = useDispatch()
  const { themeIsDay, user } = useSelector(state => state)

  useEffect(() => {
    document.body.setAttribute('color-theme', themeIsDay ? "light" : "dark")
  }, [themeIsDay]) 

  const triggerNight = () => {
    dispatch(changeTheme(!themeIsDay))   
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
        <p>{user.email}</p>
        <div className="containerButtonChangeTheme">
<<<<<<< HEAD
          <NavLink to='/auth' className="buttonAuth" onClick={() => dispatch(logout())}>
          <FontAwesomeIcon 
            className={"icon"} 
            icon = {faSignInAlt} 
=======
          <NavLink to="/auth" onClick={logoutUser} className="buttonAuth">
          <FontAwesomeIcon 
            className={"icon"} 
            icon = { localStorage.getItem('token') ? faSignOutAlt : faUserCircle } 
>>>>>>> 5838a3fde47a05a2fe41db034bc2b0dc5085ba63
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