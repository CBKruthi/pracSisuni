import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 px-[10%] py-4 flex justify-between items-center transition-all duration-300 z-[1000] ${
      isHeroVisible 
        ? "bg-black bg-opacity-85 text-white" 
        : "bg-gray-900 text-gray-900 shadow-lg"
    }`}>
      {/* Left side with logo + brand */}
      <div className="flex items-center gap-3">
        <img src="./logo.jpg" alt="Logo" className="w-10 h-10" />
        <div className="brand">
          <span className="text-lg font-bold">
            <span className="text-blue-400">Sisuni</span>
            <span className="text-blue-400">Tech</span>
          </span>
          <p className="text-xs m-0 text-inherit">Get Future Ready</p>
        </div>
      </div>

      {/* Hamburger */}
      <div 
        className="md:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`w-6 h-0.5 transition-all duration-300 ${
          isHeroVisible ? "bg-gray-900" : "bg-gray-900"
        }`}></span>
        <span className={`w-6 h-0.5 transition-all duration-300 ${
          isHeroVisible ? "bg-gray-900" : "bg-gray-900"
        }`}></span>
        <span className={`w-6 h-0.5 transition-all duration-300 ${
          isHeroVisible ? "bg-gray-900" : "bg-gray-900"
        }`}></span>
      </div>

      {/* Menu */}
      <ul className={`md:flex gap-5 list-none ${
        isOpen 
          ? "flex flex-col absolute top-16 right-[10%] bg-inherit p-4 rounded-lg" 
          : "hidden md:flex"
      }`}>
        <li><Link to="/" onClick={() => setIsOpen(false)} className="text-inherit no-underline font-medium hover:text-cyan-400 transition-colors">Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)} className="text-inherit no-underline font-medium hover:text-cyan-400 transition-colors">About</Link></li>
        <li><Link to="/culture" onClick={() => setIsOpen(false)} className="text-inherit no-underline font-medium hover:text-cyan-400 transition-colors">Culture</Link></li>
        <li><Link to="/careers" onClick={() => setIsOpen(false)} className="text-inherit no-underline font-medium hover:text-cyan-400 transition-colors">Careers</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)} className="text-inherit no-underline font-medium hover:text-cyan-400 transition-colors">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;