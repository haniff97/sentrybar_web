import React from 'react';

const BASE = import.meta.env.BASE_URL;

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-eyebrow">
        <span className="badge badge-blue"> Pure Swift &amp; SwiftUI</span>
        <span className="badge badge-emerald">Apple Silicon Native (M1–M4)</span>
        <span className="badge badge-purple">Zero Bloat · 100% Offline</span>
      </div>

      <h1>
        Precision Mac Telemetry &amp; Essential Controls.<br />
        <span className="text-gradient">Right in Your Menu Bar.</span>
      </h1>

      <p className="hero-lead">
        An ultra-lightweight, zero-bloat menu-bar utility built exclusively for Apple Silicon. Direct SMC sensor telemetry, privileged manual &amp; linked fan control, universal display brightness, one-click 80% charge limit setup, and a keyboard cleaner lock.
      </p>

      <div className="hero-cta">
        <a href={`${BASE}SentryBar.dmg`} download className="btn btn-primary">
          <span> Download SentryBar.dmg</span>
          <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>(2.1 MB)</span>
        </a>
        <a href="#simulator" className="btn btn-secondary">
          <span>⚡ Try Live Interactive Simulator</span>
          <span>↓</span>
        </a>
        <a href="https://buymeacoffee.com/hn1ff97p" target="_blank" rel="noreferrer" className="btn btn-coffee">
          <span>☕</span> <span>Buy Me a Coffee</span>
        </a>
      </div>

      <div className="meta-specs">
        <span>⚡ <strong>0.0%</strong> Idle CPU Overhead</span>
        <span>🛡️ <strong>100% Private</strong> / Offline</span>
        <span>📦 <strong>2.1 MB</strong> Total App Bundle</span>
        <span>✨ <strong>Tahoe &amp; Sequoia</strong> Ready</span>
      </div>
    </section>
  );
};

export default Hero;
