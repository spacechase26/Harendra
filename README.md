# Harendra K. — personal site

A small, fast personal site. Built with **Astro 4** (static), with **GSAP** for the hero
entrance and **Lenis** for smooth scroll. Deployed to **GitHub Pages**.

- **Live:** https://spacechase26.github.io/Harendra/
- **Dev (this VPS):** http://138.124.50.18:4321 — `npm run dev` (hot reload)

## Edit one file to update everything

All content lives in **`src/content/profile.ts`** — name, tagline, the About paragraph,
your "now" line, the focus list, the journey timeline, email and socials. Change it there;
you never need to touch the markup.

Want a different look? The entire palette and type are in **`src/styles/tokens.css`** —
swap the `--accent` colour or the fonts in one place and the whole site follows.

> A future "now I'm a CA" overhaul is a content edit in `profile.ts`, not a rebuild.

## Commands
```bash
npm install        # once
npm run dev        # dev server on :4321
npm run build      # static output -> dist/
npm run preview    # serve the build on :4322
```

## Structure
```
src/
  content/profile.ts     ← the only file you usually edit
  styles/tokens.css      ← palette / type / spacing
  styles/global.css      ← resets + base styles
  layouts/Base.astro     ← <head>, fonts, smooth scroll, scroll-reveal, grain
  components/            ← Nav, SectionTitle, Footer
  pages/index.astro      ← the single page (Hero · About · Focus · Journey · Contact)
```

## Deploy
Push to `main` → `.github/workflows/deploy.yml` builds with `withastro/action@v3` and
publishes via `actions/deploy-pages@v4`. `astro.config.mjs` sets `base: '/Harendra'`, so
all internal links go through `import.meta.env.BASE_URL`.
