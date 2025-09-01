import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".home-hero");
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        setIsHeroVisible(window.scrollY < heroBottom - 80);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once at start
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isHeroVisible ? "dark" : "light"}`}>
      {/* Left side with logo + brand */}
      <div className="navbar-left">
        <img src="./logo.jpg" alt="Logo" className="logo" />
        <div className="brand">
          <span className="brand-name">
            <span className="blue">Sisuni</span>
            <span className="blue">Tech</span>
          </span>
          <p className="tagline">Get Future Ready</p>
        </div>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
      </div>

      {/* Menu */}
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/culture" onClick={() => setIsOpen(false)}>Culture</Link></li>
        <li><Link to="/careers" onClick={() => setIsOpen(false)}>Careers</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
