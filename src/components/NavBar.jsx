import DarkMode from "./DarkMode";
import SideBar from "./SideBar";

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
      </div>
    </>
  );
};

export default NavBar;
