import React from 'react';

const BASE = import.meta.env.BASE_URL;

const Footer = () => {
  return (
    <footer>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
        <img src={`${BASE}logo.png`} alt="SentryBar Logo" style={{ width: '24px', height: '24px', borderRadius: '6px' }} />
        <span style={{ fontWeight: 700, color: '#fff' }}>SentryBar</span>
        <span style={{ color: 'var(--text-muted)' }}>— Open Source under MIT License</span>
      </div>
      <div style={{ margin: '0.8rem 0' }}>
        <a href="https://github.com/haniff97/SentryBar" target="_blank" rel="noreferrer">GitHub Repository</a> •
        <a href="https://buymeacoffee.com/hn1ff97p" target="_blank" rel="noreferrer"> Buy Me a Coffee</a> •
        <a href="#simulator"> App Simulator</a> •
        <a href="#features"> Features</a> •
        <a href="#architecture"> Architecture</a>
      </div>
      <p style={{ marginTop: '0.8rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
        Crafted with precision for Apple Silicon • Pure Swift &amp; SwiftUI
      </p>
    </footer>
  );
};

export default Footer;
