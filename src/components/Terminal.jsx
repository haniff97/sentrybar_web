import React, { useState } from 'react';

const Terminal = () => {
  const [activeTab, setActiveTab] = useState('test');
  
  const handleCopy = () => {
    // Basic copy implementation
    const textToCopy = `swift run SentryBar --${activeTab}`;
    navigator.clipboard.writeText(textToCopy);
    alert('Copied to clipboard!');
  };

  return (
    <section id="terminal" className="section-wrap">
      <div className="section-head">
        <span className="badge badge-blue">CLI Diagnostics</span>
        <h2 className="section-title">Built-In Self-Test Playground</h2>
        <p className="section-sub">Replay and inspect the self-test diagnostics built into the SentryBar CLI binary.</p>
      </div>

      <div className="terminal-container">
        <div className="terminal-bar">
          <div className="term-dots">
            <div className="term-dot dot-red"></div>
            <div className="term-dot dot-yellow"></div>
            <div className="term-dot dot-green"></div>
          </div>
          <div className="term-title">zsh — Apple M1 Pro (MacBookPro18,3) — 80x24</div>
          <div style={{ width: '40px' }}></div>
        </div>

        <div className="term-tabs">
          <button className={`term-tab ${activeTab === 'test' ? 'active' : ''}`} onClick={() => setActiveTab('test')}>swift run SentryBar --test</button>
          <button className={`term-tab ${activeTab === 'fan-test' ? 'active' : ''}`} onClick={() => setActiveTab('fan-test')}>swift run SentryBar --fan-test</button>
          <button className={`term-tab ${activeTab === 'ax-check' ? 'active' : ''}`} onClick={() => setActiveTab('ax-check')}>--ax-check (TCC Audit)</button>
          <button className={`term-tab ${activeTab === 'make-app' ? 'active' : ''}`} onClick={() => setActiveTab('make-app')}>./scripts/make-app.sh</button>
        </div>

        <div className="term-body" id="termOutput">
          {activeTab === 'test' && (
            <div>
              [SystemMonitor] Running diagnostic self-test...<br/>
              [SMC] FNum reads: 2 fans<br/>
              [SMC] F0Mx max RPM: 5779<br/>
              [SMC] F1Mx max RPM: 6241<br/>
              [SMC] CPU Temp (max Tp09..Tp0c): 52.3°C<br/>
              [Mach] P-Cores: 2%, E-Cores: 11%, GPU: 0%<br/>
              [OK] Test completed successfully.
            </div>
          )}
          {activeTab === 'fan-test' && (
            <div>
              [SystemMonitor] Testing fan write capabilities...<br/>
              [IPC] Connecting to root FanHelper...<br/>
              [SMC] Setting F0Md (manual mode)... OK<br/>
              [SMC] Setting F0Tg (target RPM 3000)... OK<br/>
              [OK] Fan write test passed.
            </div>
          )}
          {activeTab === 'ax-check' && (
            <div>
              [TCC] Checking Accessibility permissions...<br/>
              [TCC] AXIsProcessTrusted() == false<br/>
              [TCC] Input Monitoring (CGPreflightListenEventAccess) == false<br/>
              [WARN] To enable Keyboard Cleaner lock, please add this app to Privacy & Security.
            </div>
          )}
          {activeTab === 'make-app' && (
            <div>
              Building SentryBar release...<br/>
              Clearing xattrs...<br/>
              Codesigning with designated requirement 'local.sysmon.SentryBar'...<br/>
              Packaging dist/SentryBar.app... Done.
            </div>
          )}
        </div>

        <div className="term-actions">
          <button className="copy-btn" onClick={handleCopy}>
            <span>📋 Copy CLI Command</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
