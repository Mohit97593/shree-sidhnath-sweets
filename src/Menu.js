import React, { useState } from 'react';
import './Menu.css';

const menuItems = [
  // Sweets
  {
    id: 1,
    name: 'Gulab Jamun',
    hindi: 'गुलाब जामुन',
    category: 'Mithai',
    desc: 'Soft, melt-in-mouth khoya balls soaked in rose-saffron sugar syrup',
    price: '₹120',
    unit: '/250g',
    image: '/gulab_jamun.png',
    badge: 'Bestseller',
    isVeg: true,
  },
  {
    id: 2,
    name: 'Jalebi',
    hindi: 'जलेबी',
    category: 'Mithai',
    desc: 'Crispy spiral sweets soaked in saffron syrup – best with rabri',
    price: '₹80',
    unit: '/250g',
    image: '/jalebi.png',
    badge: 'Fresh Daily',
    isVeg: true,
  },
  {
    id: 3,
    name: 'Assorted Barfi',
    hindi: 'मिक्स बर्फी',
    category: 'Mithai',
    desc: 'Kaju, Besan, Coconut barfi with silver varq – perfect for gifting',
    price: '₹200',
    unit: '/250g',
    image: '/barfi.png',
    badge: 'Gift Special',
    isVeg: true,
  },
  // Fast Food
  {
    id: 4,
    name: 'Samosa',
    hindi: 'समोसा',
    category: 'Fast Food',
    desc: 'Crispy golden samosa stuffed with spiced potato – served with chutneys',
    price: '₹15',
    unit: '/piece',
    image: '/samosa.png',
    badge: 'Hot & Crispy',
    isVeg: true,
  },
  {
    id: 5,
    name: 'Kachori',
    hindi: 'कचोरी',
    category: 'Fast Food',
    desc: 'Flaky puffed pastry with spicy dal or matar filling – Lucknowi style',
    price: '₹20',
    unit: '/piece',
    image: '/kachori.png',
    badge: 'Must Try',
    isVeg: true,
  },
  {
    id: 6,
    name: 'Pav Bhaji',
    hindi: 'पाव भाजी',
    category: 'Fast Food',
    desc: 'Spicy mashed vegetable curry with buttered pav – Mumbai style',
    price: '₹80',
    unit: '/plate',
    image: '/pav_bhaji.png',
    badge: 'Popular',
    isVeg: true,
  },
  // Namkeen
  {
    id: 7,
    name: 'Mix Namkeen',
    hindi: 'मिक्स नमकीन',
    category: 'Namkeen',
    desc: 'Crispy mix of sev, moongdal, peanuts and spicy snacks – premium quality',
    price: '₹150',
    unit: '/500g',
    image: '/fast_food_collection.png',
    badge: 'Fresh Made',
    isVeg: true,
  },
  {
    id: 8,
    name: 'Sweets Collection',
    hindi: 'मिठाई संग्रह',
    category: 'Mithai',
    desc: 'Special festive box with assorted sweets – ideal for celebrations',
    price: '₹500',
    unit: '/box',
    image: '/sweets_collection.png',
    badge: 'Festival Box',
    isVeg: true,
  },
];

const categories = ['All', 'Mithai', 'Fast Food', 'Namkeen'];
const categoryIcons = {
  All: '🍽️',
  Mithai: '🍬',
  'Fast Food': '🥙',
  Namkeen: '🍿',
};

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === activeFilter);

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="menu-header">
          <div className="section-badge">🍽️ Our Specialties</div>
          <h2 className="section-title">
            Hamara <span>Swadisht Menu</span>
          </h2>
          <p className="section-subtitle">
            30 saal ke anubhav se banaye gaye authentic sweets aur fast food – 
            har cheez fresh, pure aur dil se bani.
          </p>
        </div>

        <div className="menu-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {categoryIcons[cat]} {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filtered.length === 0 ? (
            <div className="menu-empty">
              <div className="menu-empty-icon">🍽️</div>
              <p>Koi item nahi mila</p>
            </div>
          ) : (
            filtered.map((item) => (
              <div className="menu-card" key={item.id}>
                {item.badge && (
                  <div className={`menu-card-badge ${item.badge === 'Bestseller' ? 'veg' : ''}`}>
                    {item.badge}
                  </div>
                )}
                {item.isVeg && <div className="veg-indicator" title="Pure Veg" />}

                <div className="menu-card-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="menu-card-overlay" />
                </div>

                <div className="menu-card-body">
                  <div className="menu-card-category">{item.category}</div>
                  <h3 className="menu-card-name">
                    {item.name}
                    <br />
                    <small style={{ fontFamily: 'var(--font-hindi)', fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 400 }}>
                      {item.hindi}
                    </small>
                  </h3>
                  <p className="menu-card-desc">{item.desc}</p>
                  <div className="menu-card-footer">
                    <div className="menu-card-price">
                      <span className="price-label">Starting at</span>
                      <span className="price-value">
                        {item.price}<span>{item.unit}</span>
                      </span>
                    </div>
                    <button
                      className="menu-card-order"
                      onClick={() => window.open(`https://wa.me/919999999999?text=Hello! ${item.name} ke baare mein order karna chahta hoon.`, '_blank')}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="menu-cta">
          <p>📞 More items ke liye humse directly contact karein</p>
          <button
            className="btn-primary"
            onClick={() => window.open('https://wa.me/919999999999', '_blank')}
          >
            💬 WhatsApp Par Order Karein
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
