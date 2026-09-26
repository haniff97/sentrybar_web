import React from 'react';

const Features = () => {
  return (
    <section id="features" className="section-wrap">
      <div className="section-head">
        <span className="badge badge-emerald">Engineered for Apple Silicon</span>
        <h2 className="section-title">Everything you need, nothing you don't</h2>
        <p className="section-sub">Zero electron bloat, zero background telemetry. Pure Swift & SwiftUI precision utilities right where you need them.</p>
      </div>

      <div className="features-grid">
        <div className="feat-card">
          <div className="feat-icon-box">🌀</div>
          <h3>Privileged SMC Fan Control & Linking</h3>
          <p>Read real-time fan tachometers directly through Apple SMC. Seamlessly switch between automatic Apple thermal management and manual override, or link both fans to control paired RPM curves safely.</p>
          <div className="feat-tag"><span>⚡</span> Safe Socket IPC · Root FanHelper</div>
        </div>

        <div className="feat-card">
          <div className="feat-icon-box">🪫</div>
          <h3>Native Battery Health & 80% Limiter</h3>
          <p>Instant access to macOS native battery charge limiter (80–100%). Monitor live health degradation, discharge cycle counts, and real-time power draws across System, Battery, and MagSafe adapter.</p>
          <div className="feat-tag"><span>🔋</span> IOKit Power Telemetry · Native Settings</div>
        </div>

        <div className="feat-card">
          <div className="feat-icon-box">🖥️</div>
          <h3>Universal Dual-Mode Brightness</h3>
          <p>Control the brightness of any display. Native CoreDisplay hardware control for Apple Retina screens and a zero-flicker software shade overlay for HDMI & DisplayPort external monitors.</p>
          <div className="feat-tag"><span>💡</span> CoreDisplay + Zero-Flicker Overlay</div>
        </div>

        <div className="feat-card">
          <div className="feat-icon-box">⌨️</div>
          <h3>Keyboard Cleaner Lock Mode</h3>
          <p>Instantly swallow physical keystrokes with a high-performance <code>CGEventTap</code> so you can wipe down your MacBook keyboard without misclicks. Mouse and trackpad stay completely operational.</p>
          <div className="feat-tag"><span>🔒</span> CGEventTap · TCC DR Code-Signed</div>
        </div>

        <div className="feat-card">
          <div className="feat-icon-box">⊘</div>
          <h3>Lid-Closed Keep Awake Mode</h3>
          <p>Keep your Mac running intensive workloads, builds, renders, or local server daemons with the lid shut. Toggle anti-sleep effortlessly with customizable timer durations via <code>pmset</code>.</p>
          <div className="feat-tag"><span>☕</span> pmset disablesleep Integration</div>
        </div>

        <div className="feat-card">
          <div className="feat-icon-box">📊</div>
          <h3>Mach Kernel & Silicon Telemetry</h3>
          <p>Detailed breakdown of Performance Cores, Efficiency Cores, GPU engine utilization, and RAM pressure. Inspect thermal clusters (<code>Tp09..Tp0c</code> CPU, <code>Tg05</code> GPU) in real time.</p>
          <div className="feat-tag"><span>⚡</span> Mach Host Statistics & SMC 80-byte wire</div>
        </div>
      </div>
    </section>
  );
};

export default Features;
