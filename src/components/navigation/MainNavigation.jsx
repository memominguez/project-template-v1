/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/aritmetiquis.png";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import "./MainNavigationStyles.css";

// Reference source
// https://www.youtube.com/watch?v=amf18mxNX18

function MainNavigation() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [dropdown, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown((prev) => !prev);
    console.log(dropdown);
  }

  return (
    <header className="header">
      <div>
        <NavLink to="/" className="logo">
          <img src={logoImg} alt="LOGO" />
          <h1>LOGO</h1>
        </NavLink>
      </div>

      <nav ref={navRef}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          end
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          About Us
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Services
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Contact
        </NavLink>

        <div className="showlinks">
          <NavLink to="#" className="no-link" onClick={toggleDropdown}>
            Pages
            <FaArrowDown size="1rem" color="var(--reddish)" />
          </NavLink>

          <ul className={dropdown ? "dropdown open" : "dropdown"}>
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
        </div>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default MainNavigation;
