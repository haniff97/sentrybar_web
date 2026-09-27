import React from 'react';

const BASE = import.meta.env.BASE_URL;

const Download = () => {
  return (
    <section id="download" className="download-card">
      <span className="badge badge-blue">Ready to Run</span>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', margin: '0.6rem 0 0.8rem' }}>
        Get SentryBar for Your Mac
      </h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
        Download the self-contained DMG bundle or build directly from source using Swift Package Manager.
      </p>

      <div className="code-install-box">
        <div style={{ color: 'var(--apple-cyan)', fontWeight: 600, marginBottom: '0.4rem' }}># Option 1: Direct DMG (Recommended)</div>
        <div style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>Download SentryBar.dmg &amp; drag to /Applications</div>

        <div style={{ color: 'var(--apple-cyan)', fontWeight: 600, marginBottom: '0.4rem' }}># Option 2: Build from Source</div>
        <div><span style={{ color: 'var(--apple-green)' }}>$</span> git clone https://github.com/haniff97/SentryBar</div>
        <div><span style={{ color: 'var(--apple-green)' }}>$</span> cd SentryBar</div>
        <div><span style={{ color: 'var(--apple-green)' }}>$</span> ./scripts/make-app.sh <span style={{ color: 'var(--text-muted)' }}># Creates dist/SentryBar.app</span></div>
        <div><span style={{ color: 'var(--apple-green)' }}>$</span> open dist/SentryBar.app</div>
      </div>

      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        SHA-256: <span style={{ color: '#94a3b8' }}>e25ef05f3b1b539e3f45a085e4cb155593e48ac2ae6a2da8f979f7c613ffbcd6</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <a href={`${BASE}SentryBar.dmg`} download className="btn btn-primary">
          <span> Download SentryBar.dmg</span>
          <span style={{ fontSize: '0.8rem', opacity: 0.85 }}>(2.1 MB)</span>
        </a>
        <a href="https://github.com/haniff97/SentryBar" target="_blank" rel="noreferrer" className="btn btn-secondary">
          <span>★ View on GitHub</span>
        </a>
        <a href="https://buymeacoffee.com/hn1ff97p" target="_blank" rel="noreferrer" className="btn btn-coffee">
          <span>☕ Buy Me a Coffee</span>
        </a>
      </div>
    </section>
  );
};

export default Download;
