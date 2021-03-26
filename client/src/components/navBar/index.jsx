import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
	 <nav className="navBar">
     <Link to="/">Home</Link>
     <Link to="/important">Important</Link>
     <Link to="/checked">Checked</Link>
   </nav>
	)
}

export default NavBar