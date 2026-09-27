import React from 'react';

const BASE = import.meta.env.BASE_URL;

const Navbar = () => {
  return (
    <header className="site-nav">
      <nav className="nav-inner">
        <a href="#" className="nav-brand">
          <img src={`${BASE}logo.png`} alt="SentryBar App Icon" className="brand-logo-img" />
          <span>SentryBar</span>
          <span className="version-pill">macOS 26 &amp; Sequoia</span>
        </a>

        <ul className="nav-links">
          <li><a href="#simulator">Live Simulator</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#architecture">Architecture</a></li>
          <li><a href="#terminal">Diagnostics</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        <div className="nav-actions">
          <a href="https://github.com/haniff97/SentryBar" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
            <span>★</span> <span>GitHub</span>
          </a>
          <a href={`${BASE}SentryBar.dmg`} download className="btn btn-primary btn-sm">
            <span></span> <span>Download DMG</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
