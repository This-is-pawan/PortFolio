import { NavLink } from "react-router-dom";

const SideBar = ({ Clicking }) => {
  return (
    <div className={`linking ${(Clicking) ? "linking_show" : "linking_hide"}`}>
      <div className="linking_child">
        <article>
          <NavLink to="/" className={({ isActive }) => (isActive ? "yellow" : "blue")}>
            <h2>Home</h2>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "yellow" : "blue")}>
            <h2>About</h2>
          </NavLink>
          <NavLink to="/project" className={({ isActive }) => (isActive ? "yellow" : "blue")}>
            <h2>Project</h2>
          </NavLink>
        </article>
      </div>
    </div>
  );
};

export default SideBar;
