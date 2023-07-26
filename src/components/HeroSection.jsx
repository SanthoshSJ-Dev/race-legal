import React from "react";
import heroImage from "../assets/hero-image.jpg";
import { Link } from "react-scroll";

export const HeroSection = () => {
  return (
    <>
      <div className="hero_section section" id="hero">
        <div className="title">
          <h1>Accounting and Legal Brochure</h1>
          <Link
            activeClass="active" // Apply "active" class when scrolling to the target section
            to="about" // The target section's ID you want to scroll to
            spy={true} // Enable active class based on the scroll position
            smooth={true} // Enable smooth scrolling
            offset={-70} // Offset for scroll-to position (adjust as needed)
            duration={500} // Duration of the scroll animation in milliseconds
            className="hero_section_btn_cta nav-link"
          >
            Read More
          </Link>
        </div>
        <div className="hero_img_container">
          <img
            className="hero_img"
            src={heroImage}
            alt="Accounting and Legal related Image"
            width={100}
          />
        </div>
      </div>
    </>
  );
};
