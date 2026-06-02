import React from 'react';
import './Gallery.css';

const galleryItems = [
  { img: '/sweets_collection.png', title: 'Sweets Collection', desc: 'Festival Special' },
  { img: '/gulab_jamun.png', title: 'Gulab Jamun', desc: 'Fresh Daily' },
  { img: '/jalebi.png', title: 'Jalebi', desc: 'Crispy & Hot' },
  { img: '/fast_food_collection.png', title: 'Fast Food', desc: 'Made Fresh' },
  { img: '/samosa.png', title: 'Samosa', desc: 'Golden Crispy' },
  { img: '/kachori.png', title: 'Kachori', desc: 'Lucknowi Style' },
];

const reviews = [
  {
    id: 1,
    stars: '★★★★★',
    text: '"Sach mein best gulab jamun poore sheher mein! Ek baar kha lo, aana band nahi hoga. Fresh aur bahut tasty – bilkul ghar jaisi mithai."',
    name: 'Ramesh Gupta',
    location: 'Lucknow',
  },
  {
    id: 2,
    stars: '★★★★★',
    text: '"Hamari shaadi ki mithai yahan se li thi – 5 kg gulab jamun aur kaju barfi. Sabne tarif ki! Quality aur packing dono ekdum first class."',
    name: 'Priya Sharma',
    location: 'Kanpur',
  },
  {
    id: 3,
    stars: '★★★★★',
    text: '"Jalebi sabah fresh banti hai aur ek ghante mein khatam ho jaati hai! Samosa bhi bahut crispy aur spicy – besumaar tasty hai."',
    name: 'Suresh Verma',
    location: 'Unnao',
  },
  {
    id: 4,
    stars: '★★★★★',
    text: '"30 saalon se hum yahan se mithai le rahe hain. Price aur quality dono mein koi competitor nahi. Shree Sidhnath zindabad! 🙏"',
    name: 'Kavita Yadav',
    location: 'Lucknow',
  },
  {
    id: 5,
    stars: '★★★★★',
    text: '"Diwali pe gift boxes liye the – packaging itni sundar thi ki sab impressed ho gaye. Mithai ka swad toh lajawab tha hi!"',
    name: 'Mohan Lal',
    location: 'Sitapur',
  },
];

const Gallery = () => {
  return (
    <>
      {/* Gallery */}
      <section id="gallery" className="gallery-section">
        <div className="gallery-header">
          <div className="section-badge">📸 Our Gallery</div>
          <h2 className="section-title">
            Hamare <span>Swadisht Pakwan</span>
          </h2>
          <p className="section-subtitle">
            Har dish mein dikhti hai hamare halwai ka pyaar aur mehnat
          </p>
        </div>

        <div className="gallery-grid container">
          {galleryItems.map((item, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-overlay-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews-section">
        <div className="reviews-header">
          <div className="section-badge">💬 Customer Reviews</div>
          <h2 className="section-title">
            Hamare <span>Khush Grahak</span>
          </h2>
          <p className="section-subtitle">
            10,000+ satisfied customers – yeh unke dil ki baat hai
          </p>
        </div>

        <div className="reviews-track">
          {reviews.map((r) => (
            <div className="review-card" key={r.id}>
              <div className="review-stars">{r.stars}</div>
              <p className="review-text">{r.text}</p>
              <div className="review-author">
                <div className="review-avatar">{r.name[0]}</div>
                <div className="review-name">
                  <strong>{r.name}</strong>
                  <span>📍 {r.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
