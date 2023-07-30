import React from "react";
import {FaLinkedinIn, FaTwitter,FaYoutube, FaInstagram, FaEnvelope, FaPhone} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            RACE has a global presence in 6 countries and headquartered in
            India. Our global reach, application-centric approach and deep
            domain expertise in the commercial vehicle industry vertical makes
            us an ideal local business partner for the OEMs, vehicle aggregate
            manufactures, fleet operators and logistics service providers.
          </p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>Email: info@raceinnovations.in</li>
            <li>
              Address: 9th Floor, Olympia platina, Guindy Industrial Estate,
              Guindy, Chennai 600032
            </li>
            <h3>Follow Us</h3>
          <ul className="social-media-list">
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn/>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter/>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
               <FaInstagram/>
              </a>
            </li>
            <li>
              <a href="mailto:info@raceinnovations.in">
                <FaEnvelope/>
              </a>
            </li>
            <li>
              <a href="tel:+919876543210">
                <FaPhone/>
              </a>
            </li>
          </ul>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Race Innovations. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
