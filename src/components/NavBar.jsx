import DarkMode from "./DarkMode";
import SideBar from "./SideBar";
import { About, HomePage, Project } from "../components/routes/RouteJoining";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {


  return (
    <>
      <div className="nav_bar">
        <div className="logo">
          <h2>INTRO...</h2>
        </div>
        <div className="dark_mode">
          <DarkMode />
        </div>
        <div className="side_bar">
          <SideBar />
        </div>
       {/*  routes*/}
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
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
          <Outlet/>
      
    </>
  );
};

export default NavBar;
