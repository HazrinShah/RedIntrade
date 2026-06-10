import React from "react";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="container footer-top-grid">
          <div className="footer-brand" id="footer-brand">
            <svg viewBox="0 0 232 52" xmlns="http://www.w3.org/2000/svg" className="footer-logo">
              <text x="2" y="42" fontFamily="Outfit, sans-serif" fontSize="38" letterSpacing="-1">
                <tspan fontWeight="900" fill="#C8102E">RED</tspan>
                <tspan fontWeight="300" fill="#ffffff">INTRADE</tspan>
              </text>
            </svg>
            <p className="footer-tagline">
              &quot;A multi business company that always does things to the perfection. Insya-Allah.&quot;
            </p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/redintradesdnbhd/"
                target="_blank"
                rel="noopener noreferrer"
                className="fsoc-link"
                id="footer-fb"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/redintrade/"
                target="_blank"
                rel="noopener noreferrer"
                className="fsoc-link"
                id="footer-ig"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-links-col" id="footer-links-services">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Equipment Rental</a></li>
              <li><a href="#services">Drama Production</a></li>
              <li><a href="#services">Event Management</a></li>
              <li><a href="#services">Team Building</a></li>
              <li><a href="#services">Artists Management</a></li>
              <li><a href="#services">Corporate Video & Videography</a></li>
            </ul>
          </div>
          <div className="footer-links-col" id="footer-links-company">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#team">Our People</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-links-col" id="footer-links-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <i className="fa-solid fa-location-dot"></i> No. 2-3-11, Wisma Rampai, KL 53300
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>{" "}
                <a href="tel:+60193138133">019-313 8133</a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>{" "}
                <a href="tel:+60341313030">03-4131 3030</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>{" "}
                <a href="mailto:redintrade@gmail.com">redintrade@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2025 Redintrade Sdn Bhd. All rights reserved.</p>
          <p>Designed with Love in Kuala Lumpur</p>
        </div>
      </div>
    </footer>
  );
}
