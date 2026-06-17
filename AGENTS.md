# VeltRex Esports — AGENTS.md

Static site (no framework, no build). 12 HTML files, Tailwind CDN + custom CSS, vanilla JS.

## Commands

```powershell
# Local dev
python -m http.server 8000

# Deploy to GitHub Pages
git add -A; git commit -m "..."; git push
# Serves at https://veltrexesports1-pixel.github.io
```

## Structure

- `index.html` — homepage (hero video, featured teams, creators, partners)
- `pages/` — about, brand, contact, creators, matches, achievements, teams
- `pages/teams/` — valorant, valorant-gc, league-of-legends, MLBB
- `css/style.css` — Tailwind imports + custom utilities
- `js/script.js` — just sets `#year` textContent
- `assets/images/` — logo.jpg, banner.png, game cards, creator photos, team photos
- `assets/videos/` — veltrex-hero.mp4 (hero background)

## Brand

- **Primary**: `#8624E5` (violet — from logo). **Secondary**: `#06B6D4` (cyan).
- **Background**: `#070809` / `#0A0B0C`. **Text**: `#F5F5F5`.
- **Headings**: Anton (`font-heading`, letter-spacing: 0.08em). **Body**: Inter (`font-body`).
- Contour text: `text-stroke` / `text-stroke-sm` / `text-stroke-md` / `text-stroke-lg`

## Social links (exact URLs)

| Platform | URL |
|---|---|
| X | `https://x.com/VeltrexEsp` |
| YouTube | `https://www.youtube.com/@Veltrexesports` |
| Instagram | `https://www.instagram.com/veltrex_esports_/` |
| Kick | `https://kick.com/veltrexesports` |
| TikTok | `https://www.tiktok.com/@veltrexesports` |
| Discord | `https://discord.gg/A6qDDKSdf` |

## Contact form

- FormSubmit.co → `veltrexesports1@gmail.com`
- Hidden `_next` = `https://veltrexesports1-pixel.github.io/pages/contact.html`
- Must be served via HTTP (not `file://`) for FormSubmit to work
- Business email: `partnership@veltrexesports.com`

## Key conventions

- ALL 12 HTML files share the same header/nav/footer — changes must be applied to every file
- `replaceAll` for color `#7C3AED` → `#8624E5` (old brand purple replaced)
- VeltRex is 1 month old — no fake achievements, trophies, or dates
- No year in footer (copyright just `&copy; VeltRex Esports`)
- Mobile menu toggle is inline HTML onclick, not in script.js

## Git

- Remote: `https://github.com/veltrexesports1-pixel/veltrexesports1-pixel.github.io.git`
- Author: `veltrexesports1@gmail.com`
