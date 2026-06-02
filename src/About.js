import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-inner container">
        <div className="about-image-side">
          <div className="about-dots">
            {[...Array(16)].map((_, i) => <span key={i} />)}
          </div>
          <div className="about-main-img">
            <img src="/sweets_collection.png" alt="Shree Sidhnath Sweets Shop" />
          </div>
          <div className="about-year-badge">
            <span className="about-year">1995</span>
            <span className="about-year-label">Est. Since</span>
          </div>
        </div>

        <div className="about-content">
          <div className="section-badge">🪔 Hamari Kahani</div>
          <h2 className="section-title">
            30 Saal Ka <span>Meetha Safar</span>
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'left', color: 'rgba(245,215,142,0.6)' }}>
            Our Story of Sweetness
          </p>

          <p className="about-desc">
            Shree Sidhnath Sweets & Fast Food ki shuruaat 1995 mein ek chhoti si dukaan se 
            hui thi. Aaj, 30 se zyada saalon ke baad, hum apne sheher ke sabse bharosemand 
            mithai ghar hain.
          </p>
          <p className="about-desc">
            Hamare yahan sirf <strong style={{ color: 'var(--gold-light)' }}>pure ghee</strong> aur{' '}
            <strong style={{ color: 'var(--gold-light)' }}>taaze ingredients</strong> ka istemal hota hai. 
            Har mithai banate waqt humara ek hi lakshya hota hai – aapke chehere par muskan lana.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🥛</div>
              <div className="highlight-text">
                <strong>Pure Ingredients</strong>
                <span>Sirf asli ghee, taaza doodh aur natural mithai</span>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">👨‍🍳</div>
              <div className="highlight-text">
                <strong>Expert Halwais</strong>
                <span>30+ saalon ka anubhav rakhne wale kaarigars</span>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🎁</div>
              <div className="highlight-text">
                <strong>Gift Packaging</strong>
                <span>Shaadi, festival, aur gift ke liye special boxes</span>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🚚</div>
              <div className="highlight-text">
                <strong>Home Delivery</strong>
                <span>Fresh mithai aapke ghar tak pahunchate hain</span>
              </div>
            </div>
          </div>

          <div className="about-owners">
            <div className="owner-avatar">👨‍👩‍👦</div>
            <div className="owner-info">
              <strong>Shree Sidhnath Parivar</strong>
              <span>
                "Hamare yahan aane wala har customer hamara parivaar jaisa hai. 
                Aapki khushi hi hamari mehnat ka inaam hai." 🙏
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
