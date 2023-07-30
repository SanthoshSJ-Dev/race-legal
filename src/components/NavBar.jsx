import React, { useState, useEffect } from "react";
import { CgMenuRight, CgClose, CgChevronDown } from "react-icons/cg";
import logoDesktop from "../assets/ri-logo.png"; // Desktop logo
import logoMobile from "../assets/ri-logo-mobile.png"; // Mobile logo
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // State to keep track of the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update window width when the window is resized
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scrolling" : ""}`}>
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          {/* Conditionally render the logo based on the window width */}
          {windowWidth > 1040 ? ( // Show desktop logo for window width greater than 768px
            <img src={logoDesktop} alt="Logo" width={300} />
          ) : (
            // Show mobile logo for window width less than or equal to 768px
            <img src={logoMobile} alt="Mobile Logo" width={100} />
          )}
        </Link>
        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <CgClose /> : <CgMenuRight />}
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/" ? "active-link" : ""
              }`}
              to="/"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/about" ? "active-link" : ""
              }`}
              to="/about"
              onClick={handleLinkClick}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <div className="nav-dropdown">
              <Link
                className={`nav-link dropdown-arrow ${
                  location.pathname.includes("/services") ? "active-link" : ""
                }`}
                to="/services"
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className={`dropdown-item ${
                      location.pathname === "/services/triple-a"
                        ? "active-link"
                        : ""
                    }`}
                    to="/services/triple-a"
                    onClick={handleLinkClick}
                  >
                    Triple A
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${
                      location.pathname === "/services/advisory"
                        ? "active-link"
                        : ""
                    }`}
                    to="/services/advisory"
                    onClick={handleLinkClick}
                  >
                    Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${
                      location.pathname === "/services/legal"
                        ? "active-link"
                        : ""
                    }`}
                    to="/services/legal"
                    onClick={handleLinkClick}
                  >
                    Legal
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${
                      location.pathname === "/services/tax" ? "active-link" : ""
                    }`}
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
            <Link
              className={`nav-link ${
                location.pathname === "/contact" ? "active-link" : ""
              }`}
              to="/contact"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
