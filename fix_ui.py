import re

with open('/Users/user/Han Project/app_monitor/index.html', 'r') as f:
    content = f.read()

# 1. Update variables
content = re.sub(
    r':root \{.*?(?= \}) \}',
    r''':root {
      --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Inter", sans-serif;
      --font-display: 'Outfit', var(--font-sans);
      --font-mono: 'Fira Code', SFMono-Regular, Consolas, Monaco, monospace;

      /* Colors - Bright Design */
      --bg-base: #f8fafc;
      --bg-surface-1: #ffffff;
      --bg-surface-2: #f1f5f9;
      --border-subtle: rgba(0, 0, 0, 0.08);
      --border-highlight: rgba(0, 0, 0, 0.15);

      --text-primary: #0f172a;
      --text-secondary: #475569;
      --text-muted: #64748b;

      /* Apple Native Accent Colors */
      --apple-blue: #007aff;
      --apple-blue-hover: #0062cc;
      --apple-green: #34c759;
      --apple-red: #ff3b30;
      --apple-purple: #af52de;
      --apple-amber: #ff9500;

      /* Native App Panel Colors */
      --app-popover-bg: #ffffff;
      --app-card-bg: #f8fafc;
      --app-card-border: rgba(0, 0, 0, 0.06);
      --app-seg-bg: rgba(0, 0, 0, 0.05);

      --card-radius: 18px;
      --pill-radius: 9999px;
      --transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
      /* Reduced glass */
      --glass-blur: none;
    }''',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'\[data-theme="light"\] \{.*?\}',
    r'''[data-theme="dark"] {
      --bg-base: #0c0d14;
      --bg-surface-1: #141722;
      --bg-surface-2: #1e2230;
      --border-subtle: rgba(255, 255, 255, 0.08);
      --border-highlight: rgba(255, 255, 255, 0.15);

      --text-primary: #f8fafc;
      --text-secondary: #94a3b8;
      --text-muted: #64748b;

      --app-popover-bg: #1c1a1f;
      --app-card-bg: rgba(255, 255, 255, 0.05);
      --app-card-border: rgba(255, 255, 255, 0.08);
      --app-seg-bg: rgba(255, 255, 255, 0.09);
    }''',
    content,
    flags=re.DOTALL
)

# 2. Update Ambient Orbs
content = re.sub(
    r'\.ambient-orb \{.*?\}',
    r'''.ambient-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.12;
      animation: float 22s infinite alternate ease-in-out;
    }''',
    content,
    flags=re.DOTALL
)
content = re.sub(r'background: #3b82f6;', r'background: #93c5fd;', content)
content = re.sub(r'background: #06b6d4;', r'background: #67e8f9;', content)
content = re.sub(r'background: #8b5cf6;', r'background: #c4b5fd;', content)

# 3. Hero Text Gradient
content = re.sub(
    r'\.text-gradient \{.*?\}',
    r'''.text-gradient {
      background: linear-gradient(135deg, #0f172a 20%, #1e293b 55%, #0284c7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }''',
    content,
    flags=re.DOTALL
)
content = re.sub(
    r'\[data-theme="light"\] \.text-gradient \{.*?\}',
    r'''[data-theme="dark"] .text-gradient {
      background: linear-gradient(135deg, #ffffff 20%, #94a3b8 55%, #38bdf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }''',
    content,
    flags=re.DOTALL
)

# 4. Remove all rgba(255, 255, 255, x) that are used for colors in simulator to text variables or dark variables
# We will just change #ffffff to var(--text-primary) or #000
# And #9ca3af to var(--text-secondary)
# And rgba(255, 255, 255, 0.1) to var(--border-subtle) where appropriate.
# Since it's a bit complex with regex, let's just write the changes out.
with open('/Users/user/Han Project/app_monitor/index.html', 'w') as f:
    f.write(content)

print("Part 1 Done.")
