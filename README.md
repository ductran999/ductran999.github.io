# ductran999.github.io

Personal portfolio — Duc Tran (Daniel), Platform Engineer. Live at https://ductran999.github.io.

Built with **Tailwind CSS v4** (dark mode, no build step required for deployment — just commit the compiled `styles.css`).

## Structure

- `index.html` — content (hero, about, stack, contact)
- `script.js` — mobile menu, back-to-top, footer year
- `src/styles.css` — Tailwind v4 source (import tailwindcss, theme, components)
- `styles.css` — compiled output (committed, served by GitHub Pages)
- `scripts/fetch_medium.py` — fetches Medium RSS → `posts.json` (run manually or via Actions)
- `.github/workflows/medium.yml` — daily cron to refresh Medium posts

## Develop

```bash
# Install deps
npm install

# Dev: watch & rebuild on change
npm run dev

# Build for production (minified)
npm run build
```

Then open `index.html` via a local server:
```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Deploy

Push to `master` — GitHub Pages serves `index.html` + `styles.css` from repo root. No GitHub Actions needed for the site itself (only for optional Medium posts refresh).

## Customize

- Edit `index.html` for content
- Edit `src/styles.css` for theme colors, components, animations
- Run `npm run build` after style changes