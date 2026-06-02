import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <div className="navbar-logo">
            <div className="logo-icon">🪔</div>
            <div className="logo-text">
              <span className="logo-name">Shree Sidhnath</span>
              <span className="logo-tagline">Sweets & Fast Food</span>
            </div>
          </div>

          <ul className="navbar-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a></li>
            <li><a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo('menu'); }}>Menu</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About Us</a></li>
            <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }}>Gallery</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a></li>
          </ul>

          <button
            className="navbar-order-btn"
            onClick={() => window.open('https://wa.me/919999999999', '_blank')}
          >
            📞 Order Now
          </button>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>🏠 Home</a></li>
          <li><a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo('menu'); }}>🍬 Menu</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>ℹ️ About Us</a></li>
          <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }}>🖼️ Gallery</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>📍 Contact</a></li>
        </ul>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="mobile-order-btn"
        >
          📞 Order on WhatsApp
        </a>
      </div>
    </>
  );
};

export default Navbar;
