import React from 'react'
// import { About, HomePage, Project } from "../components/routes/RouteJoining";
import { Link } from "react-router-dom";
const RoutesLinks = () => {
  return (
    <>
<div className="routes">
        <div className="route">
          <article>
      
            <Link to='/'>Home</Link>
          </article>
          <article>
            <Link to='about'>About</Link>
    
          </article>
          <article>
            <Link to='/project'>project</Link>
          
          </article>
        </div>
        </div>
    </>
  )
}

export default RoutesLinks