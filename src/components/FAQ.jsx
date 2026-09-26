import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className="faq-toggle">▼</span>
      </div>
      <div className="faq-a">{answer}</div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="section-wrap">
      <div className="section-head">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-sub">Everything you need to know about safety, permissions, and system support.</p>
      </div>

      <div className="faq-list">
        <FAQItem 
          question="Is fan control and root elevation safe for my Mac?" 
          answer={
            <>
              Yes. SentryBar enforces hardware safety clamps: target RPMs are strictly validated against each fan's factory reported maximum RPM (<code>F{"{"}n{"}"}Mx</code>). If the helper disconnects or crashes, macOS automatically regains control of the thermal fan curves.
            </>
          } 
        />
        <FAQItem 
          question="Why are both Accessibility and Input Monitoring permissions required?" 
          answer={
            <>
              In macOS Tahoe, Sequoia, and Sonoma, a <code>CGEventTap</code> in default (blocking) mode requires <strong>both</strong> Accessibility and Input Monitoring to swallow physical keystrokes. Without Input Monitoring, the tap can listen to events but cannot block them.
            </>
          } 
        />
        <FAQItem 
          question="How does brightness control work on external non-Apple monitors?" 
          answer="Many third-party HDMI and DisplayPort monitors do not respond to standard DDC/CI over I2C on Apple Silicon. SentryBar implements a zero-flicker software shade overlay (black borderless statusBar window with smooth opacity transitions) so you can dim any display comfortably." 
        />
        <FAQItem 
          question="How does the 80% battery charge limiter work?" 
          answer={
            <>
              On Apple Silicon Macs running macOS 15+, SentryBar provides a direct shortcut to macOS's official native battery limiter extension (<code>com.apple.Battery-Settings.extension</code>). This protects your battery without requiring fragile third-party kernel hacks.
            </>
          } 
        />
        <FAQItem 
          question="Why do TCC permissions survive app rebuilds in make-app.sh?" 
          answer={
            <>
              Standard ad-hoc code signing creates a new hash (<code>cdhash</code>) every build, causing macOS to revoke permissions. Our build script signs with an identifier-only designated requirement: <code>codesign --force --sign - --identifier local.sysmon.SentryBar</code>, preserving permission grants across rebuilds!
            </>
          } 
        />
      </div>
    </section>
  );
};

export default FAQ;
