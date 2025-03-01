import DarkMode from "./DarkMode";
import SideBar from "./SideBar";
import Profile from './routes/routerImg/Home.svg'
// import { About, HomePage, Project } from "../components/routes/RouteJoining";
import {  Outlet } from "react-router-dom";
import RoutesLinks from "./routes/routesLinks/RoutesLinks";

const NavBar = () => {


  return (
    <>
      <div className="nav_bar">
        <div className="nav_align">
        <div className="logo">
          {/* <h2>INTRO...</h2> */}
        </div>
        
        <div className="side_bar ">
          <SideBar />
        </div>
        <div className="dark_mode ">
          <DarkMode />
        </div>
          <img src={Profile} alt="profile_img" className="profile_img" />
       {/*  routes*/}
       
        <RoutesLinks/>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
          <Outlet/>

    </>
  );
};

export default NavBar;
