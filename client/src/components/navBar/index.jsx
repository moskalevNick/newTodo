import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import "./styles.css"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const NavBar = () => {
    
  const [isDay, setDay] = useState("")
    
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
  } 

  return (
	  <nav className="navBar">
      <Link to="/" className="navBar_item">Home</Link>
      <Link to="/important" className="navBar_item">Important</Link>
      <Link to="/checked" className="navBar_item">Checked</Link>
      <button className={"nightButton"} onClick={triggerNight}>
        <FontAwesomeIcon className={"icon"} icon={isDay ? faSun : faMoon} size="4x" />
      </button>
    </nav>
	)
}

export default NavBar