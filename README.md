# Ashish Naikade | Portfolio

Animated, responsive portfolio with **light / dark mode**, built with plain HTML, CSS and JavaScript (no build step, no dependencies).

## Features
- Light / dark theme toggle (remembers the choice, follows the OS setting by default, no flash on load)
- Projects: NexaERP and NexaHRM (in development, "Coming soon") plus HRMS and ERP work
- Interactive Onion Architecture diagram and request-flow animation
- Syntax-highlighted C# code samples with copy buttons
- Tabbed skills, experience accordions, FAQ, resume download, copy-email button
- Performance: transform/opacity-only animations, throttled scroll handlers, pauses background when the tab is hidden, respects "reduce motion"

## Project structure

```
portfolio/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── variables.css     # Colors for light + dark themes (edit to re-theme)
    │   ├── base.css          # Reset, typography, utilities
    │   ├── animations.css    # Keyframes, scroll-reveal
    │   ├── layout.css        # Navbar, hero, section layouts
    │   ├── components.css    # Buttons, cards, chips, tabs, code block
    │   ├── sections.css      # Architecture, projects, timeline
    │   └── responsive.css    # Mobile / tablet (keep last)
    ├── js/
    │   ├── theme.js          # Light / dark toggle
    │   ├── nav.js            # Menu, progress bar, scroll-spy, back-to-top
    │   ├── typing.js         # Hero typing effect (edit phrases here)
    │   ├── reveal.js         # Scroll reveal + counters
    │   ├── particles.js      # Background animation
    │   ├── tabs.js           # Tabs + architecture layer selector
    │   ├── code.js           # C# syntax highlighter
    │   ├── copy.js           # Copy to clipboard
    │   └── main.js           # Footer year, marquee
    ├── images/
    │   └── ashish.jpg        # <- add your photo here
    └── resume/
        └── Ashish_Naikade_Resume.pdf
```

## Customize
- **Photo:** save as `assets/images/ashish.jpg` (about 600x600, under 500 KB). Falls back to "AN" initials if missing.
- **Resume:** replace `assets/resume/Ashish_Naikade_Resume.pdf` with a newer file of the same name. Note the PDF is public once deployed and includes the contact details on it.
- **NexaERP / NexaHRM text:** edit the two cards in the `#projects` section of `index.html`. When one launches, change `proj-card soon` to `proj-card`, replace the "In development" badge, and add a link button.
- **Typing phrases:** `assets/js/typing.js`
- **Colors:** `assets/css/variables.css`

## Deploy free on GitHub Pages
1. Create a **public** repo named `ashish-nexahub.github.io`.
2. Put the **contents** of this folder in the repo root (so `index.html` sits next to `assets/`) and push.
3. Repo **Settings → Pages → Deploy from a branch → main → / (root) → Save**.
4. Live in about a minute at `https://ashish-nexahub.github.io`.

Tip: GitHub doesn't keep empty folders, so `assets/images/.gitkeep` preserves the images folder until you add your photo.
