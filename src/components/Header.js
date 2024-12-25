import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); 

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  const developedbyArjun = "{DevelopedbyArjun}"; 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.hamburger')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="name">{developedbyArjun}</div>
      </div>
      <div ref={menuRef} className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about">About</a>
        <a href="#technologies">Technologies</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#interests">Interests</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Header;
