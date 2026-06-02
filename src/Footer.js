import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Festival Banner */}
      <div className="festival-banner">
        🎉 Festival Season Par Special Discounts! Shaadi & Puja Orders ke liye Call Karein:
        <strong>+91 97593 13914</strong> 🎉
      </div>

      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <div className="navbar-logo">
            <img src="/beautiful-sweets-logo_427757-206.avif" alt="Shree Sidhnath Logo" className="logo-icon-img" />
            <div className="logo-text">
              <span className="logo-name">Shree Sidhnath</span>
              <span className="logo-tagline" style={{ color: 'rgba(245,215,142,0.5)' }}>Sweets & Fast Food</span>
            </div>
          </div>
          <p>
            1995 se aapki seva mein. Asli taste, pure ingredients aur dil ki meethas 
            ke saath bana hua har pakwan aapke chehere par muskan lata hai. 
            Yahi hamaari pehchaan hai. 🙏
          </p>
          <div className="footer-social">
            <a href="https://wa.me/919759313914" className="social-btn" target="_blank" rel="noreferrer" title="WhatsApp">💬</a>
            <a href="#!" className="social-btn" title="Facebook">📘</a>
            <a href="#!" className="social-btn" title="Instagram">📸</a>
            <a href="tel:+919759313914" className="social-btn" title="Call">📞</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>→ Home</a></li>
            <li><a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo('menu'); }}>→ Hamara Menu</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>→ Hamare Baare Mein</a></li>
            <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }}>→ Gallery</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>→ Contact Us</a></li>
          </ul>
        </div>

        {/* Popular Items */}
        <div className="footer-col">
          <h4>Popular Items</h4>
          <ul className="footer-links">
            <li><a href="#menu">🍮 Gulab Jamun</a></li>
            <li><a href="#menu">🍥 Jalebi</a></li>
            <li><a href="#menu">🍬 Kaju Barfi</a></li>
            <li><a href="#menu">🥟 Samosa</a></li>
            <li><a href="#menu">🫓 Kachori</a></li>
            <li><a href="#menu">🍛 Pav Bhaji</a></li>
            <li><a href="#menu">🎁 Gift Boxes</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Sampark Karein</h4>
          <ul className="footer-contact-list">
            <li>
              <span>📍</span>
              <span>Main Market Road, Bilsanda, Pilibhit, UP</span>
            </li>
            <li>
              <span>📞</span>
              <a href="tel:+919759313914">+91 97593 13914</a>
            </li>
            <li>
              <span>💬</span>
              <a href="https://wa.me/919759313914" target="_blank" rel="noreferrer">WhatsApp Order</a>
            </li>
            <li>
              <span>🕐</span>
              <span>7 AM – 10 PM, Roz</span>
            </li>
          </ul>

          <div className="footer-newsletter" style={{ marginTop: '1.5rem' }}>
            <h4>Special Offers Payein</h4>
            {!subscribed ? (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Email dalein..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">✓</button>
              </form>
            ) : (
              <p style={{ fontSize: '0.82rem', color: 'rgba(245,215,142,0.7)', marginTop: '0.5rem' }}>
                ✅ Shukriya! Offers aapko milenge.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>
            © 2024 Shree Sidhnath Sweets & Fast Food. Banaya gaya <span>❤️</span> se.
            All rights reserved.
          </p>
          <div className="footer-badges">
            <div className="footer-badge">🌿 100% Pure Veg</div>
            <div className="footer-badge">✨ Est. 1995</div>
            <div className="footer-badge">⭐ 4.9 Rating</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
