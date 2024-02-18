/* eslint-disable no-unused-vars */
import { NavLink, Link } from "react-router-dom";
import logoImg from "../../assets/aritmetiquis.png";
import { FaArrowDown } from "react-icons/fa";
import { BsToggles } from "react-icons/bs";
import "./navigation.css";

function Navigation() {
   
  return (
    <header>
      <div>
        <NavLink to="/" className="logo">
          <img src={logoImg} alt="LOGO" />
          <h1>LOGO</h1>
        </NavLink>
      </div>
       
      <input type="checkbox" id="menu-bar" />
      <label htmlFor="menu-bar"><BsToggles className="toggle-switch"/></label>     

      <nav className="navbar">
        <ul>
        <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Projects
            </NavLink>
          </li>

          <li>
            <Link to="#">Pages <FaArrowDown className="arrow"/></Link>           
            <ul>
              <li>
                <NavLink to="/testimonial">Testimonial</NavLink>
              </li>
              <li>
                <NavLink to="/team">Team</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
