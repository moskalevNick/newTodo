import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import "./styles.css"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const NavBar = () => {
    
  const [isDay, setDay] = useState(true)
    
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
	  <div>  
      <nav className="navBar">
        <Link to="/" className="navBar_item">All</Link>
        <Link to="/important" className="navBar_item">Important</Link>
        <Link to="/checked" className="navBar_item">Checked</Link>
        <button className={"nightButton"} onClick={triggerNight}>
          <FontAwesomeIcon className={"icon"} icon={isDay ? faSun : faMoon} size="4x" />
        </button>  
      </nav>
      <div className="autor">
        <a className="autorLink" href="https://vk.com/nikolyamoskalev">ⓒMoskalevNick</a>
      </div>
    </div>  
	)
}

export default NavBar