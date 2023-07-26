import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";
import logo from "../assets/ri-logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo"><img src={logo} width={300}/></h1>
        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={toggleNavbar}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link" onClick={toggleNavbar}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={toggleNavbar}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
