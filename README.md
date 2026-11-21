# Ashish Naikade | Portfolio

Animated single-page portfolio built with plain HTML, CSS and JavaScript (no build step).

## Project structure

```
portfolio/
├── index.html                 # Page markup (all content lives here)
├── README.md
└── assets/
    ├── css/
    │   ├── variables.css      # Colors / design tokens (edit to re-theme)
    │   ├── base.css           # Reset, typography, global utilities
    │   ├── animations.css     # Keyframes and scroll-reveal states
    │   ├── layout.css         # Navbar, hero, section layouts
    │   ├── components.css     # Buttons, cards, chips, bars, timeline
    │   └── responsive.css     # Mobile / tablet overrides (keep last)
    ├── js/
    │   ├── nav.js             # Mobile menu + scroll progress bar
    │   ├── typing.js          # Hero typing effect (edit the phrases here)
    │   ├── reveal.js          # Scroll reveal, counters, skill bars
    │   ├── particles.js       # Animated particle background
    │   └── main.js            # Page-level setup (footer year)
    └── images/
        └── ashish.jpg         # <- add your photo here
```

## Add your photo
Save your photo as `assets/images/ashish.jpg` (square or portrait, about 600x600 px, under 500 KB).
Nothing else to change: the page shows your photo automatically, and falls back to the "AN" initials if the file is missing.
For a `.png`, change the filename in the `<img>` tag in `index.html`.

## Deploy free on GitHub Pages

1. On GitHub, create a **public** repository named `ashish-nexahub.github.io`
   (it must be `<your-username>.github.io`).
2. Upload the **contents** of this folder (so `index.html` is at the repo root, next to `assets/`):
   - Web: **Add file → Upload files**, drag in `index.html`, `README.md` and the `assets` folder, then **Commit changes**, or
   - Terminal (run inside this folder):
     ```
     git init
     git add .
     git commit -m "Add portfolio"
     git branch -M main
     git remote add origin https://github.com/ashish-nexahub/ashish-nexahub.github.io.git
     git push -u origin main
     ```
3. In the repo go to **Settings → Pages**, set **Source: Deploy from a branch**, branch **main**, folder **/ (root)**, then Save.
4. After about a minute your site is live at `https://ashish-nexahub.github.io`.

Note: GitHub does not keep empty folders, so `assets/images/.gitkeep` is included to preserve the images folder until you add your photo.
