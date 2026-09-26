import React from 'react';

const Architecture = () => {
  return (
    <section id="architecture" className="section-wrap">
      <div className="section-head">
        <span className="badge badge-purple">Under The Hood</span>
        <h2 className="section-title">Built for Performance & Security</h2>
        <p className="section-sub">How SentryBar operates safely within the macOS sandbox and kernel boundary.</p>
      </div>

      <div className="arch-card">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.6rem' }}>Separation of Privileges & Safety Clamps</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            User-space reads remain unprivileged in-process. Write operations are routed through a sandboxed root helper daemon that enforces hardware safety limits.
          </p>
        </div>

        <div className="arch-grid">
          <div className="arch-step">
            <div className="arch-step-num">01 / TELEMETRY</div>
            <h4>Direct SMC & Mach Reads</h4>
            <p>Utilizes exact 80-byte <code>SMCKeyData</code> struct alignment and Mach host statistics for 0.0% idle overhead telemetry.</p>
          </div>

          <div className="arch-step">
            <div className="arch-step-num">02 / PRIVILEGE</div>
            <h4>Root FanHelper Daemon</h4>
            <p>Runs as a dedicated privileged daemon over a local Unix socket (<code>/tmp/com.sentrybar.fanhelper.sock</code>) with one-time admin authorization.</p>
          </div>

          <div className="arch-step">
            <div className="arch-step-num">03 / CODE SIGNING</div>
            <h4>Persistent TCC Grants</h4>
            <p>Packaged with identifier-only designated requirements (<code>local.sysmon.SentryBar</code>) so Accessibility and Input Monitoring survive rebuilds.</p>
          </div>

          <div className="arch-step">
            <div className="arch-step-num">04 / SAFETY</div>
            <h4>Automatic Thermal Recovery</h4>
            <p>Hardware clamps prevent RPM exceeding factory <code>F{"{"}n{"}"}Mx</code> bounds. On app quit, macOS immediately regains automatic fan management.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
