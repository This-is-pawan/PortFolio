import DarkMode from "./DarkMode";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa6";
import Profile from "./routes/routerImg/Home.svg";
import { Outlet } from "react-router-dom";
import RoutesLinks from "./routes/routesLinks/RoutesLinks";
import { useState } from "react";
import Container from "./Container";

const NavBar = () => {
  const [isClicking, setIsClicking] = useState(false);

  const clickHandal = () => {
    setIsClicking((prev) => !prev);
  };

  return (
    <>
    <nav>
      <div className={`nav_bar`}>
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
      </nav>
      <br />
      <br />
      <br />
      <br />
      <div className="sider">
        <SideBar Clicking={isClicking} />
      </div>
      <Outlet />
        <Container mode={isClicking}/>
    </>
  );
};

export default NavBar;
