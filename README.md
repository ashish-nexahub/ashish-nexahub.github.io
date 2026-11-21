# Ashish Naikade | Portfolio

Responsive portfolio with light / dark mode. Plain HTML, CSS and JavaScript (no build step).

Sections: Home, About, Products (NexaERP, NexaHRM: coming soon), Education, FAQ, Contact.

## Structure
```
index.html
assets/
├── css/   variables, base, animations, layout, components, sections, responsive
├── js/    theme, nav, typing, reveal, particles, copy, protect, main
├── images/ashish.jpg        <- add your photo here (600x600, under 500 KB)
└── resume/Ashish_Naikade_Resume.pdf
```

## Customize
- **Product copy:** edit the two cards in the `#products` section of `index.html` (tagline and the 4 bullets each).
- **Early-access emails:** the buttons use `mailto:` links. Change the address or subject in `index.html`.
- **Photo:** save as `assets/images/ashish.jpg`. It is shown as a CSS background with a click-blocking layer and no right-click/drag. Browsers must download an image to display it, so this deters casual saving but cannot fully prevent it. Use a modest-size image.
- **Resume:** replace `assets/resume/Ashish_Naikade_Resume.pdf` (it is publicly downloadable).
- **Font:** SF Pro is used automatically on Apple devices (Apple's license does not allow hosting it on a website). Other devices fall back to Inter, a very similar typeface.
- **Colors:** `assets/css/variables.css`

## Deploy on GitHub Pages
1. Repo named `ashish-nexahub.github.io` (public). Put the contents of this folder at the repo root and push.
2. Settings → Pages → Deploy from a branch → main → / (root).
3. Live at `https://ashish-nexahub.github.io` after about a minute.
