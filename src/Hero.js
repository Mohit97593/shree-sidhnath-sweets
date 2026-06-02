import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg-image">
        <img src="/hero_sweets.png" alt="Shree Sidhnath Sweets" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-pattern" />

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span>🪔</span>
            Since 1995 • Trusted Quality
          </div>

          <h1 className="hero-title">
            <span className="hero-title-hindi">श्री सिद्धनाथ स्वीट्स</span>
            <span>Shree Sidhnath <br /></span>
            <span className="hero-title-accent">Sweets & Fast Food</span>
          </h1>

          <p className="hero-desc">
            30 saal se zyada ka anubhav – har mithai mein dil ki meethas, 
            har dish mein ghar jaisi khushbu. <strong>Authentic flavors, pure ingredients.</strong>
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollTo('menu')}>
              🍬 Hamara Menu Dekhein
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              📍 Hamare Paas Aayein
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Years of Trust</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Varieties</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src="/sweets_collection.png" alt="Indian Sweets Collection" />
          </div>
          <div className="hero-float-card card-1">
            <div className="float-icon">⭐</div>
            <div className="float-text">
              <strong>4.9 / 5 Rating</strong>
              <span>1000+ Reviews</span>
            </div>
          </div>
          <div className="hero-float-card card-2">
            <div className="float-icon">🚚</div>
            <div className="float-text">
              <strong>Home Delivery</strong>
              <span>Fresh & Fast</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot" />
        Scroll Down
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#FFF8EE" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
