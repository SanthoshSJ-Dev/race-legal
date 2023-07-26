import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/ri-logo.png";
import { Link } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    scrollToTop();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <img src={logo} width={300} />
        </h1>
        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
          <a className="nav-link" onClick={handleScrollToTop}>Home</a>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active" // Apply "active" class when scrolling to the target section
              to="about" // The target section's ID you want to scroll to
              spy={true} // Enable active class based on the scroll position
              smooth={true} // Enable smooth scrolling
              offset={-70} // Offset for scroll-to position (adjust as needed)
              duration={500} // Duration of the scroll animation in milliseconds
              className="nav-link"
              onClick={toggleNavbar}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active" // Apply "active" class when scrolling to the target section
              to="services" // The target section's ID you want to scroll to
              spy={true} // Enable active class based on the scroll position
              smooth={true} // Enable smooth scrolling
              offset={-70} // Offset for scroll-to position (adjust as needed)
              duration={500} // Duration of the scroll animation in milliseconds
              className="nav-link"
              onClick={toggleNavbar}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active" // Apply "active" class when scrolling to the target section
              to="contact" // The target section's ID you want to scroll to
              spy={true} // Enable active class based on the scroll position
              smooth={true} // Enable smooth scrolling
              offset={-70} // Offset for scroll-to position (adjust as needed)
              duration={500} // Duration of the scroll animation in milliseconds
              className="nav-link"
              onClick={toggleNavbar}
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
