import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref to the nav menu

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.hamburger')) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for clicks outside
    document.addEventListener('click', handleClickOutside);

    // Cleanup event listener on component unmount
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
        <div className="name">Arjun Yadav</div>
      </div>
      <div ref={menuRef} className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="/About">About</a>
        <a href="/Technologies">Technologies</a>
        <a href="/Experience">Experience</a>
        <a href="/Projects">Projects</a>
        <a href="/Certificates">Certificates</a>
        <a href="/Interests">Interests</a>
        <a href="/Contact">Contact</a>
      </div>
    </nav>
  );
}

export default Header;
