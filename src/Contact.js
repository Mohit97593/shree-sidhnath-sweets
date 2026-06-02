import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', order: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Namaste! Main ${form.name} bol raha hoon.\nPhone: ${form.phone}\nOrder: ${form.order}\nMessage: ${form.message}`;
    window.open(`https://wa.me/919759313914?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <div className="section-badge">📍 Hamare Paas Aayein</div>
        <h2 className="section-title">
          Contact <span>& Order</span>
        </h2>
        <p className="section-subtitle">
          Order karein, milne aayein, ya bas baat karein – hum hamesha aapke liye haazir hain!
        </p>
      </div>

      <div className="contact-grid container">
        {/* Info Side */}
        <div>
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card-icon">📍</div>
              <div className="contact-card-body">
                <h4>Hamara Pata</h4>
                <p>Shree Sidhnath Sweets & Fast Food<br />Main Market Road, Bilsanda<br />Pilibhit, Uttar Pradesh</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">📞</div>
              <div className="contact-card-body">
                <h4>Phone / WhatsApp</h4>
                <p>
                  <a href="tel:+919759313914">+91 97593 13914</a><br />
                  <a href="tel:+918888888888">+91 88888 88888</a>
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">🕐</div>
              <div className="contact-card-body">
                <h4>Timing</h4>
                <p>Subah 7:00 AM – Raat 10:00 PM<br />Sab din khula rehta hai 🟢</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">📧</div>
              <div className="contact-card-body">
                <h4>Email</h4>
                <p><a href="mailto:info@shreesidhnathsweets.com">info@shreesidhnathsweets.com</a></p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <div className="hours-card">
              <h3>🕐 Daily Timing</h3>
              {[
                { day: 'Somwar – Shukravar', time: '7:00 AM – 10:00 PM', status: 'Khula' },
                { day: 'Shanivaar', time: '6:00 AM – 11:00 PM', status: 'Khula' },
                { day: 'Ravivaar', time: '6:00 AM – 11:00 PM', status: 'Khula' },
              ].map((h) => (
                <div className="hours-row" key={h.day}>
                  <span className="hours-day">{h.day}</span>
                  <span className="hours-time">{h.time}</span>
                  <span className="hours-status open">{h.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="contact-form-wrap">
          {!submitted ? (
            <>
              <h3>🛒 Order / Inquiry Karein</h3>
              <p>Form bharein ya WhatsApp pe seedha message karein – jaldi reply milega!</p>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Aapka Naam *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jaise: Ramesh Kumar"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-order">Kya Chahiye?</label>
                  <select
                    id="contact-order"
                    name="order"
                    value={form.order}
                    onChange={handleChange}
                  >
                    <option value="">-- Select Item --</option>
                    <option value="Gulab Jamun">🍮 Gulab Jamun</option>
                    <option value="Jalebi">🍥 Jalebi</option>
                    <option value="Barfi">🍬 Barfi (Assorted)</option>
                    <option value="Samosa">🥟 Samosa</option>
                    <option value="Kachori">🫓 Kachori</option>
                    <option value="Pav Bhaji">🍛 Pav Bhaji</option>
                    <option value="Gift Box">🎁 Gift Box (Special)</option>
                    <option value="Other">📝 Kuch Aur</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message / Quantity</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Kitna chahiye, delivery ka address, koi vishesh instructions..."
                    rows={4}
                  />
                </div>
                <button type="submit" className="form-submit">
                  💬 WhatsApp Par Bhejein
                </button>
              </form>
            </>
          ) : (
            <div className="form-submitted">
              <div className="success-icon">✅</div>
              <h3>Shukriya! 🙏</h3>
              <p>Aapka message WhatsApp par bhej diya gaya hai. Hum jaldi reply karenge!</p>
              <button
                className="btn-primary"
                style={{ margin: '1.5rem auto 0', display: 'inline-flex' }}
                onClick={() => setSubmitted(false)}
              >
                🔄 Naya Order
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="map-section container">
        <div
          className="map-placeholder"
          onClick={() => window.open('https://www.google.com/maps/search/Bilsanda+Pilibhit+UP', '_blank')}
        >
          <div className="map-icon">🗺️</div>
          <p>📍 Bilsanda, Pilibhit, Uttar Pradesh</p>
          <span>Google Maps par dekhein →</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
