import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navbar.scss";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* Adding a wrapper div for the floating logo */}
      <div className="floating-logo">
        <a href="/"><img src="/images/logo.png" alt="Logo" /></a>
      </div>
      <div className="social-media-bar">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/images/icon_facebook.png" alt="Facebook" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="/images/icon_twitter.png" alt="Twitter" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="/images/icon_instagram.png" alt="Instagram" /></a>
        </div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="logo-bar">
        <nav className="navBar">
          <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
            <li><NavLink to="/" className="active">ANASAYFA</NavLink></li>
            <li><NavLink to="/Hizmetlerimiz">HİZMETLERİMİZ</NavLink></li>
            <li><NavLink to="/Hakkimizda">HAKKIMIZDA</NavLink></li>
            <li><NavLink to="/Kadromuz">KADROMUZ</NavLink></li>
            <li><NavLink to="/Galeri">GALERİ</NavLink></li>
            <li><NavLink to="/Referanslar">REFERANSLAR</NavLink></li>
            <li><NavLink to="/Iletisim">İLETİSİM</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="additional-bar">
        <p></p>
      </div>
    </header>
  );
}

export default Navbar;
