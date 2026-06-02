import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Menu from './Menu';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Contact />
      <Footer />

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919759313914?text=Namaste! Mujhe Shree Sidhnath Sweets se order karna hai."
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        title="WhatsApp Par Order Karein"
      >
        💬
      </a>
    </div>
  );
}

export default App;
