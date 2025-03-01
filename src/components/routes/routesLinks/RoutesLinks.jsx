import React, { useState } from 'react'
// import { About, HomePage, Project } from "../components/routes/RouteJoining";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const RoutesLinks = () => {
const [e,setE]=useState(true)
const Link_color=()=>{
setE(!e)
}
  return (
    <>
<div className="routes">
        <div className="route">
          <article>
          <NavLink to="/" className={({ isActive }) => (isActive ? "yellow" : "blue")}>
        Home
      </NavLink>
            {/* <Link to='/' onClick={Link_color}className={(e)?'yellow':'red'}>Home</Link> */}
          </article>
          <article>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "yellow" : "blue")}>
        About
      </NavLink>
          </article>
          <article>
          <NavLink to="/project" className={({ isActive }) => (isActive ? "yellow" : "blue")}>
        Project
      </NavLink>
          
          </article>
        </div>
        </div>
    </>
  )
}

export default RoutesLinks