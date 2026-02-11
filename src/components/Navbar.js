import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <nav className="navbar" style={scrolled ? { boxShadow: '0 4px 20px rgba(0,0,0,0.15)' } : {}}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <h1>EON</h1>
            <span>General Supply Co.</span>
          </div>
          <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
            <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#products" onClick={handleLinkClick}>Products</a></li>
            <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
            <li><a href="#industries" onClick={handleLinkClick}>Industries</a></li>
            <li><a href="#brands" onClick={handleLinkClick}>Brands</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
          <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleMenuClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
