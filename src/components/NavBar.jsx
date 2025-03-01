import DarkMode from "./DarkMode";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa6";
import Profile from "./routes/routerImg/Home.svg";
import { Outlet } from "react-router-dom";
import RoutesLinks from "./routes/routesLinks/RoutesLinks";
import { useState } from "react";

const NavBar = () => {
  const [isClicking, setIsClicking] = useState(true);

  const clickHandal = () => {
    setIsClicking((prev) => !prev);
  };

  return (
    <>
      <div className="nav_bar">
        <div className="nav_align">
          <div className="logo">{/* <h2>INTRO...</h2> */}</div>
          <article className="Bar">
            <FaBars onClick={clickHandal} />
          </article>
          <DarkMode />
          <img
            src={Profile}
            alt="profile_img"
            className="profile_img"
            title="Profile Picture"
          />
          <RoutesLinks />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="sider">
        <SideBar Clicking={isClicking} />
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
