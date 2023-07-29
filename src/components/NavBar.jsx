import React, { useState } from "react";
import { CgMenuRight, CgClose, CgChevronDown } from "react-icons/cg";
import logo from "../assets/ri-logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" width={300} />
        </div>
        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <CgClose /> : <CgMenuRight />}
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={handleLinkClick}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <div className="nav-dropdown">
              <Link className="nav-link dropdown-arrow" to="/services" onClick={handleLinkClick}>
                <p>Services</p>
                <CgChevronDown className="arrow-icon" />
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/services/triple-a"
                    onClick={handleLinkClick}
                  >
                    Triple A
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/services/advisory"
                    onClick={handleLinkClick}
                  >
                    Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/services/legal"
                    onClick={handleLinkClick}
                  >
                    Legal
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/services/tax"
                    onClick={handleLinkClick}
                  >
                    Tax
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" onClick={handleLinkClick}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
