import re

with open('/Users/user/Han Project/app_monitor/index.html', 'r') as f:
    content = f.read()

# Simulator frame
content = re.sub(
    r'\.simulator-window-frame \{.*?(?= \}) \}',
    r'''.simulator-window-frame {
      background: #f1f5f9;
      border: 1px solid var(--border-highlight);
      border-radius: 24px;
      box-shadow: 0 30px 70px -15px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);
      overflow: hidden;
      position: relative;
    }''',
    content,
    flags=re.DOTALL
)

# Mac Desktop Menubar
content = re.sub(
    r'\.mac-desktop-menubar \{.*?(?= \}) \}',
    r'''.mac-desktop-menubar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44px;
      padding: 0 1.4rem;
      background: #ffffff;
      border-bottom: 1px solid var(--border-subtle);
      user-select: none;
      font-size: 0.84rem;
    }''',
    content,
    flags=re.DOTALL
)

content = re.sub(r'color: #cbd5e1;', r'color: var(--text-secondary);', content)
content = re.sub(r'stroke: #ffffff;', r'stroke: var(--text-primary);', content)
content = re.sub(r'color: #ffffff;', r'color: var(--text-primary);', content)

# Native menubar item background
content = re.sub(r'background: rgba\(255, 255, 255, 0\.06\);', r'background: rgba(0, 0, 0, 0.04);', content)
content = re.sub(r'background: rgba\(255, 255, 255, 0\.16\);', r'background: rgba(0, 0, 0, 0.08);', content)

# Desktop backdrop
content = re.sub(
    r'\.desktop-backdrop \{.*?(?= \}) \}',
    r'''.desktop-backdrop {
      padding: 2.5rem 1.5rem 3.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: radial-gradient(circle at top right, rgba(0, 122, 255, 0.05), transparent 65%),
                  radial-gradient(circle at bottom left, rgba(175, 82, 222, 0.05), transparent 50%),
                  #f8fafc;
      min-height: 700px;
    }''',
    content,
    flags=re.DOTALL
)

# Native app window
content = re.sub(
    r'\.native-app-window \{.*?(?= \}) \}',
    r'''.native-app-window {
      width: 100%;
      max-width: 400px;
      background: var(--app-popover-bg);
      border-radius: 20px;
      border: 1px solid var(--border-highlight);
      box-shadow: 0 25px 55px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);
      position: relative;
      overflow: hidden;
      color: var(--text-primary);
      font-family: var(--font-sans);
    }''',
    content,
    flags=re.DOTALL
)
# Popover pointer
content = re.sub(
    r'\.popover-pointer \{.*?(?= \}) \}',
    r'''.popover-pointer {
      position: absolute;
      top: -7px;
      right: 95px;
      width: 14px;
      height: 14px;
      background: var(--app-popover-bg);
      border-left: 1px solid var(--border-highlight);
      border-top: 1px solid var(--border-highlight);
      transform: rotate(45deg);
    }''',
    content,
    flags=re.DOTALL
)

# Segmented Tab Buttons
content = re.sub(r'background: rgba\(255, 255, 255, 0\.15\);', r'background: var(--border-highlight);', content) # Divider

# Core pill and memory bar
content = re.sub(r'background: rgba\(255, 255, 255, 0\.1\);', r'background: rgba(0, 0, 0, 0.06);', content)
content = re.sub(r'background: rgba\(255, 255, 255, 0\.12\);', r'background: rgba(0, 0, 0, 0.08);', content)
content = re.sub(r'background: rgba\(255, 255, 255, 0\.2\);', r'background: rgba(0, 0, 0, 0.12);', content)
content = re.sub(r'background: rgba\(255, 255, 255, 0\.25\);', r'background: rgba(0, 0, 0, 0.15);', content)

# Sliders
content = re.sub(
    r'\.native-slider::-webkit-slider-thumb \{.*?(?= \}) \}',
    r'''.native-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(0,0,0,0.1);
      cursor: pointer;
    }''',
    content,
    flags=re.DOTALL
)

# Text grays
content = re.sub(r'color: #9ca3af;', r'color: var(--text-secondary);', content)
content = re.sub(r'color: #808695;', r'color: var(--text-muted);', content)

# Theme Toggle button theme change logic in JS
content = re.sub(
    r'const currentTheme = document.documentElement.getAttribute\("data-theme"\);',
    r'const currentTheme = document.documentElement.getAttribute("data-theme") || "light";',
    content
)
content = re.sub(
    r'const newTheme = currentTheme === "light" \? "dark" : "light";',
    r'const newTheme = currentTheme === "dark" ? "light" : "dark";',
    content
)

with open('/Users/user/Han Project/app_monitor/index.html', 'w') as f:
    f.write(content)

print("Colors fixed.")
