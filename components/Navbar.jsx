"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((sec) => {
        const secTop = sec.offsetTop - 120;
        if (window.scrollY >= secTop) {
          current = sec.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" id="nav-logo-link" onClick={handleLinkClick}>
          <svg viewBox="0 0 232 52" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
            <text x="2" y="42" fontFamily="Outfit, sans-serif" fontSize="38" letterSpacing="-1">
              <tspan fontWeight="900" fill="#C8102E">RED</tspan>
              <tspan fontWeight="300" fill="#ffffff">INTRADE</tspan>
            </text>
          </svg>
          <span className="logo-tag">SDN BHD</span>
        </a>

        <nav className={`nav-links ${isOpen ? "open" : ""}`} id="nav-links">
          <a
            href="#about"
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
            id="nav-about"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#services"
            className={`nav-link ${activeSection === "services" ? "active" : ""}`}
            id="nav-services"
            onClick={handleLinkClick}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={`nav-link ${activeSection === "portfolio" ? "active" : ""}`}
            id="nav-portfolio"
            onClick={handleLinkClick}
          >
            Portfolio
          </a>
          <a
            href="#team"
            className={`nav-link ${activeSection === "team" ? "active" : ""}`}
            id="nav-team"
            onClick={handleLinkClick}
          >
            People
          </a>
          <a
            href="#social"
            className={`nav-link ${activeSection === "social" ? "active" : ""}`}
            id="nav-social"
            onClick={handleLinkClick}
          >
            Social
          </a>
          <a href="#contact" className="nav-link nav-cta" id="nav-contact" onClick={handleLinkClick}>
            Contact Us
          </a>
        </nav>

        <button
          className={`nav-hamburger ${isOpen ? "open" : ""}`}
          id="nav-hamburger"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
