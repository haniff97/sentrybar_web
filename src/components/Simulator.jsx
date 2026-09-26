import React, { useState, useEffect, useRef } from 'react';

const Simulator = () => {
  const [activeTab, setActiveTab] = useState('pane-system');
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(true);
  const [activePreset, setActivePreset] = useState('sys-compact');

  const [fan1Mode, setFan1Mode] = useState('auto');
  const [fan1Rpm, setFan1Rpm] = useState(0);
  const [fan2Mode, setFan2Mode] = useState('auto');
  const [fan2Rpm, setFan2Rpm] = useState(0);
  const [fansLinked, setFansLinked] = useState(false);

  const [keepAwake, setKeepAwake] = useState(false);
  const [kbLock, setKbLock] = useState(false);

  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 2200);
    return () => clearInterval(interval);
  }, []);

  const handleFan1Change = (e) => {
    const val = parseInt(e.target.value);
    setFan1Rpm(val);
    if (fansLinked) setFan2Rpm(Math.min(6241, val));
  };

  const handleFan2Change = (e) => {
    const val = parseInt(e.target.value);
    setFan2Rpm(val);
    if (fansLinked) setFan1Rpm(Math.min(5779, val));
  };

  const resetFans = () => {
    setFan1Mode('auto');
    setFan2Mode('auto');
    setFan1Rpm(0);
    setFan2Rpm(0);
  };

  const applyPreset = (preset) => {
    setActivePreset(preset);
    setIsPopoverOpen(true);
    if (preset === 'sys-compact') {
      setActiveTab('pane-system');
      setIsAdvanced(false);
    } else if (preset === 'sys-advanced') {
      setActiveTab('pane-system');
      setIsAdvanced(true);
    } else if (preset === 'battery') {
      setActiveTab('pane-battery');
    } else if (preset === 'display') {
      setActiveTab('pane-display');
    } else if (preset === 'keyboard') {
      setActiveTab('pane-keyboard');
    }
  };

  const maxRpm = Math.max(fan1Rpm, fan2Rpm);

  return (
    <section id="simulator" className="simulator-section">
      <div className="simulator-header-bar">
        <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>Interactive Showcase</span>
        <h2>Explore the SentryBar Menu Bar App</h2>
        <p>Fully interactive live simulation of the native macOS app. Switch tabs, toggle Advanced mode, test fan control, and try the keyboard lock!</p>
      </div>

      <div className="simulator-window-frame">
        {/* macOS Top Menu Bar */}
        <div className="mac-desktop-menubar">
          <div className="menubar-left">
            <span style={{ fontSize: '1rem', color: '#fff' }}></span>
            <span style={{ fontWeight: 700, color: '#fff' }}>SentryBar</span>
            <span>File</span>
            <span>Edit</span>
            <span>Sensors</span>
            <span>Window</span>
            <span>Help</span>
          </div>

          <div className="menubar-right">
            <div 
              className={`native-menubar-item ${isPopoverOpen ? 'active' : ''}`} 
              title="Click to toggle SentryBar popover"
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            >
              <svg className="chip-svg-icon" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>
              <div className="menubar-item-text">
                <span className="menubar-item-row1">53°C / 9°C</span>
                <span className="menubar-item-row2">{maxRpm > 0 ? `${maxRpm} RPM` : '0 RPM'}</span>
              </div>
            </div>

            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>􀙇</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>59% 􀛨</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>7:28 AM</span>
          </div>
        </div>

        {/* Desktop Backdrop */}
        <div className="desktop-backdrop">
          
          <div className="native-app-window" style={{ display: isPopoverOpen ? 'block' : 'none' }}>
            <div className="popover-pointer"></div>

            {/* Header */}
            <div className="native-window-header">
              <div className="header-left">
                <svg className="header-chip-icon" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>
                <span className="native-title">SentryBar</span>
              </div>
              <button className="gear-btn" title="Preferences">⚙️</button>
            </div>

            {/* Tabs */}
            <div className="segmented-tabs-container">
              <button className={`seg-tab-btn ${activeTab === 'pane-system' ? 'active' : ''}`} onClick={() => setActiveTab('pane-system')}>System</button>
              <button className={`seg-tab-btn ${activeTab === 'pane-battery' ? 'active' : ''}`} onClick={() => setActiveTab('pane-battery')}>Battery</button>
              <button className={`seg-tab-btn ${activeTab === 'pane-display' ? 'active' : ''}`} onClick={() => setActiveTab('pane-display')}>Display</button>
              <button className={`seg-tab-btn ${activeTab === 'pane-keyboard' ? 'active' : ''}`} onClick={() => setActiveTab('pane-keyboard')}>Keyboard</button>
            </div>

            {/* SYSTEM TAB */}
            {activeTab === 'pane-system' && (
              <div className="native-tab-pane active" style={{ display: 'block' }}>
                <div className="cpu-mem-row">
                  <div className="native-card" style={{ marginBottom: 0 }}>
                    <div className="metric-sub-title">CPU</div>
                    <div className="metric-big-val">3.3%</div>
                    <div className="sparkline-canvas" style={{background: 'rgba(0,170,255,0.1)', borderRadius: '4px', height: '36px', marginTop: '4px'}}></div>
                  </div>
                  <div className="native-card" style={{ marginBottom: 0 }}>
                    <div className="metric-sub-title">Memory</div>
                    <div className="metric-big-val">54.9%</div>
                    <div className="sparkline-canvas" style={{background: 'rgba(175,82,222,0.1)', borderRadius: '4px', height: '36px', marginTop: '4px'}}></div>
                  </div>
                </div>

                {isAdvanced && (
                  <div className="native-card compute-breakdown-card show">
                    <div className="compute-title">Compute</div>
                    <div className="compute-row">
                      <span className="compute-label">P-cores</span><span className="compute-val">0%</span>
                      <div className="compute-spark-container"><div className="mini-sparkline" style={{background: 'rgba(0,122,255,0.1)'}}></div></div>
                    </div>
                    <div className="compute-row">
                      <span className="compute-label">E-cores</span><span className="compute-val">12%</span>
                      <div className="compute-spark-container"><div className="mini-sparkline" style={{background: 'rgba(0,210,255,0.1)'}}></div></div>
                    </div>
                    <div className="compute-row">
                      <span className="compute-label">GPU</span><span className="compute-val">0%</span>
                      <div className="compute-spark-container"><div className="mini-sparkline" style={{background: 'rgba(175,82,222,0.1)'}}></div></div>
                    </div>
                  </div>
                )}

                <div className="stat-quad-grid">
                  <div className="stat-quad-box"><span className="stat-quad-icon">🌡️</span><div className="stat-quad-title">CPU temp</div><div className="stat-quad-val">53°C</div></div>
                  <div className="stat-quad-box"><span className="stat-quad-icon">🔲</span><div className="stat-quad-title">GPU temp</div><div className="stat-quad-val">9°C</div></div>
                  <div className="stat-quad-box"><span className="stat-quad-icon">🌀</span><div className="stat-quad-title">Fan 1</div><div className="stat-quad-val">{fan1Rpm} rpm</div></div>
                  <div className="stat-quad-box"><span className="stat-quad-icon">🌀</span><div className="stat-quad-title">Fan 2</div><div className="stat-quad-val">{fan2Rpm} rpm</div></div>
                </div>

                {isAdvanced ? (
                  <div className="native-card fan-control-card show">
                    <div className="fan-ctrl-title">Fan Control</div>
                    <div className="fan-row-item">
                      <div className="fan-name-ctrl-line">
                        <span className="fan-label">🌀 Fan 1</span>
                        <div className="mini-seg-btn">
                          <button className={`mini-seg-option ${fan1Mode === 'auto' ? 'active' : ''}`} onClick={() => { setFan1Mode('auto'); setFan1Rpm(0); }}>Auto</button>
                          <button className={`mini-seg-option ${fan1Mode === 'manual' ? 'active' : ''}`} onClick={() => { setFan1Mode('manual'); if(fan1Rpm===0) setFan1Rpm(2400); }}>Manual</button>
                        </div>
                      </div>
                      <input type="range" className="native-slider" min="0" max="5779" value={fan1Rpm} disabled={fan1Mode === 'auto'} onChange={handleFan1Change} />
                      <div className="fan-subtext-stats">Current <span>{fan1Rpm.toLocaleString()}</span> rpm · Max 5,779</div>
                    </div>
                    <div className="fan-row-item">
                      <div className="fan-name-ctrl-line">
                        <span className="fan-label">🌀 Fan 2</span>
                        <div className="mini-seg-btn">
                          <button className={`mini-seg-option ${fan2Mode === 'auto' ? 'active' : ''}`} onClick={() => { setFan2Mode('auto'); setFan2Rpm(0); }}>Auto</button>
                          <button className={`mini-seg-option ${fan2Mode === 'manual' ? 'active' : ''}`} onClick={() => { setFan2Mode('manual'); if(fan2Rpm===0) setFan2Rpm(2400); }}>Manual</button>
                        </div>
                      </div>
                      <input type="range" className="native-slider" min="0" max="6241" value={fan2Rpm} disabled={fan2Mode === 'auto'} onChange={handleFan2Change} />
                      <div className="fan-subtext-stats">Current <span>{fan2Rpm.toLocaleString()}</span> rpm · Max 6,241</div>
                    </div>
                    <button className={`link-fans-btn ${fansLinked ? 'linked' : ''}`} onClick={() => setFansLinked(!fansLinked)}>
                      <span>🔗</span> <span>Link fans</span>
                    </button>
                    <div className="fan-notice-text">
                      Link fans to control both from either slider.<br/>
                      Manual control overrides Apple's thermal management...
                    </div>
                    <button className="reset-fans-btn" onClick={resetFans}>Reset all to automatic</button>
                  </div>
                ) : (
                  <div className="fan-managed-notice">Fans are managed by macOS.</div>
                )}

                <div className="advanced-toggle-row">
                  <span className="advanced-label">Advanced</span>
                  <label className="native-toggle">
                    <input type="checkbox" checked={isAdvanced} onChange={(e) => setIsAdvanced(e.target.checked)} />
                    <span className="toggle-slider-native"></span>
                  </label>
                </div>
                
                <div className="native-window-footer">
                  <span>Updated {currentTime}</span>
                  <span className="quit-link" onClick={() => setIsPopoverOpen(false)}>Quit</span>
                </div>
              </div>
            )}

            {/* BATTERY TAB */}
            {activeTab === 'pane-battery' && (
              <div className="native-tab-pane active" style={{ display: 'block' }}>
                <div className="native-card">
                  <div className="battery-icon-wrap">
                    <div className="battery-glyph"><div className="battery-glyph-fill"></div></div>
                    <span className="battery-pct-title">59%</span>
                    <span style={{ fontSize: '1.1rem', opacity: 0.8 }}>🪫</span>
                    <span className="battery-type-label">Battery</span>
                  </div>
                  <div className="battery-subtext">Health 82% &nbsp;&nbsp; 263 cycles</div>
                  <button className="charge-limit-btn" onClick={() => alert("Opening native macOS Battery Settings pane...")}>
                    <span>🪫</span> <span>Set Charge Limit (80% recommended)</span>
                  </button>
                  <div className="fan-notice-text" style={{ marginBottom: 0 }}>
                    Protect battery life while plugged in. In Battery settings, click ⓘ next to Charging to choose the limit.
                  </div>
                </div>
                <div className="native-card">
                  <div className="fan-ctrl-title">Power</div>
                  <div className="power-stats-table">
                    <div className="power-stat-row"><span className="power-stat-label">System</span><span className="power-stat-val">2.5 W</span></div>
                    <div className="power-stat-row"><span className="power-stat-label">Battery</span><span className="power-stat-val">4.1 W</span></div>
                    <div className="power-stat-row"><span className="power-stat-label">Adapter</span><span className="power-stat-val">—</span></div>
                  </div>
                </div>
                <div className="native-window-footer">
                  <span>Updated {currentTime}</span>
                  <span className="quit-link" onClick={() => setIsPopoverOpen(false)}>Quit</span>
                </div>
              </div>
            )}

            {/* DISPLAY TAB */}
            {activeTab === 'pane-display' && (
              <div className="native-tab-pane active" style={{ display: 'block' }}>
                <div className="native-card">
                  <div className="fan-ctrl-title">Displays</div>
                  <div className="display-item-row">
                    <span className="display-check">✓</span>
                    <span className="display-screen-icon">🖥️</span>
                    <span className="display-name">Built-in Retina Displ...</span>
                    <input type="range" className="native-slider" style={{ flex: 1 }} min="10" max="100" defaultValue="85" />
                  </div>
                  <div className="fan-notice-text" style={{ marginBottom: 0 }}>
                    Select a display, then use F1 / F2 to adjust it. Apple displays use hardware; others use a software overlay.
                  </div>
                </div>
                <div className="native-card">
                  <div className="keep-awake-row">
                    <div className="keep-awake-left">
                      <span>⊘</span> <span>Keep Awake</span>
                    </div>
                    <label className="native-toggle">
                      <input type="checkbox" checked={keepAwake} onChange={(e) => setKeepAwake(e.target.checked)} />
                      <span className="toggle-slider-native"></span>
                    </label>
                  </div>
                  <select className="keep-awake-select" defaultValue="Indefinitely">
                    <option>Indefinitely</option>
                    <option>15 Minutes</option>
                    <option>30 Minutes</option>
                    <option>1 Hour</option>
                  </select>
                  <div className="fan-notice-text" style={{ marginBottom: 0, color: keepAwake ? 'var(--apple-green)' : 'var(--popover-text-sub)' }}>
                    {keepAwake ? 'On — Mac will remain awake with lid closed (pmset).' : 'Off — closing the lid sleeps the Mac.'}
                  </div>
                </div>
                <div className="native-window-footer">
                  <span>Updated {currentTime}</span>
                  <span className="quit-link" onClick={() => setIsPopoverOpen(false)}>Quit</span>
                </div>
              </div>
            )}

            {/* KEYBOARD TAB */}
            {activeTab === 'pane-keyboard' && (
              <div className="native-tab-pane active" style={{ display: 'block' }}>
                <div className="native-card">
                  <div className="kb-lock-row">
                    <div className="kb-lock-left">
                      <span>⌨️</span> <span>Keyboard Lock</span>
                    </div>
                    <label className="native-toggle">
                      <input type="checkbox" checked={kbLock} onChange={(e) => setKbLock(e.target.checked)} />
                      <span className="toggle-slider-native"></span>
                    </label>
                  </div>
                  <div className="fan-notice-text" style={{ marginBottom: 0 }}>
                    Off: keyboard works normally. On: all keys are blocked (mouse stays usable).
                  </div>

                  {kbLock && (
                    <div className="cleaner-mode-alert show">
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ff8580' }}>🔒 CLEANER MODE ACTIVE</div>
                      <div style={{ fontSize: '0.74rem', color: '#cbd5e1', marginTop: '0.25rem' }}>
                        Physical keys intercepted via CGEventTap. Wipe down your keyboard safely!
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginTop: '0.5rem' }}>
                        Blocked Keystrokes: <span style={{ color: '#38bdf8' }}>0</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="native-window-footer">
                  <span>Updated {currentTime}</span>
                  <span className="quit-link" onClick={() => setIsPopoverOpen(false)}>Quit</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="simulator-preset-bar">
          <button className={`preset-pill-btn ${activePreset === 'sys-compact' ? 'active' : ''}`} onClick={() => applyPreset('sys-compact')}>1. System (Compact)</button>
          <button className={`preset-pill-btn ${activePreset === 'sys-advanced' ? 'active' : ''}`} onClick={() => applyPreset('sys-advanced')}>2. System (Advanced Fans)</button>
          <button className={`preset-pill-btn ${activePreset === 'battery' ? 'active' : ''}`} onClick={() => applyPreset('battery')}>3. Battery Health & Limit</button>
          <button className={`preset-pill-btn ${activePreset === 'display' ? 'active' : ''}`} onClick={() => applyPreset('display')}>4. Display & Keep Awake</button>
          <button className={`preset-pill-btn ${activePreset === 'keyboard' ? 'active' : ''}`} onClick={() => applyPreset('keyboard')}>5. Keyboard Lock</button>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
