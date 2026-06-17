# VeltRex Esports — Site Upgrade Summary

## Migration: Static HTML → Astro 5 + Tailwind CSS

The site was migrated from 12 hand-edited HTML files (with Tailwind CDN) to an Astro project with a real Tailwind build pipeline.

### What changed

| Before | After |
|---|---|
| 12 HTML files with duplicated header/footer | Shared `Layout.astro`, `Header.astro`, `Footer.astro` components |
| Tailwind via CDN (`cdn.tailwindcss.com`) | `@astrojs/tailwind` + `tailwindcss` v3 with brand tokens |
| `css/style.css` with `@tailwind` directives | `src/styles/global.css` (custom utilities only) |
| `js/script.js` (year updater) | Inline `<script>` in Layout |
| Inline mobile menu JS | Centralized in `Header.astro` |
| `pages/*.html` | `src/pages/*.astro` |
| `python -m http.server` for dev | `npm run dev` (Astro dev server) |
| Manual file deploy | GitHub Actions → Pages on push |

### New features added

| Feature | Details |
|---|---|
| **Matches data layer** | `src/data/matches.json` — upcoming & completed matches driven from data, not hardcoded |
| **Next Match countdown** | Homepage shows next upcoming match with live d/h/m/s countdown |
| **Live match indicator** | Matches with `status: "live"` show pulsing LIVE badge (manual flag, no API) |
| **Scroll-reveal animations** | `[data-reveal]` IntersectionObserver with staggered delays |
| **Stat counters** | Numbers animate from 0 on viewport entry with `[data-countup]` |
| **Hover tilt + glow** | `.hover-tilt`, `.hover-glow` on team/creator cards |
| **Grain overlay** | Subtle noise texture on hero section |
| **Reduced motion** | All animations respect `prefers-reduced-motion: reduce` |
| **Open Graph / Twitter meta** | Per-page titles, descriptions, og:image on every page |
| **JSON-LD schema** | `SportsOrganization` structured data on homepage |
| **Sitemap** | Auto-generated via `@astrojs/sitemap` |
| **robots.txt** | Allow all, references sitemap |
| **Recruitment page** | `/recruit` — open positions + application form via FormSubmit |
| **Share card generator stubs** | `/tools/share-card` (TODO) |

### New/edited data files

| File | Purpose | How to edit |
|---|---|---|
| `src/data/matches.json` | All match data (upcoming, live, completed) | Add/remove objects; `status` must be `upcoming`, `live`, or `completed` |
| `src/data/openings.json` | Recruitment openings by game/role | Add/remove objects; `status`: `open` or `closed` |

### New pages

| Route | File | Description |
|---|---|---|
| `/recruit` | `src/pages/recruit.astro` | Open tryout slots + application form |

### Manual GitHub Pages setting

After first push, in **repo Settings → Pages → Source**, select **"GitHub Actions"** (not "Deploy from a branch"). This enables the `.github/workflows/deploy.yml` workflow to publish builds.

### Remaining TODOs

- [ ] **`/tools/share-card`** — branded 1200×630 share image generator (html2canvas or satori/sharp)
- [ ] **`public/og-default.svg`** — replace with proper PNG version for better social preview compatibility
- [ ] **Arabic/French i18n toggle** — out of scope, needs full translation layer
- [ ] **Live YouTube/TikTok feed** — needs API key + referrer restriction
- [ ] **Live Discord member count** — needs widget enabled + server ID
- [ ] **Old HTML files** — `index.html`, `pages/*.html`, `css/style.css`, `js/script.js` — can be deleted once migration is confirmed stable
