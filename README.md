# velaroglobal.com

The Velaro Global website: the studio home page plus an overview, privacy policy and terms for
each app. Plain static HTML and one stylesheet with no build step, so any static host can serve
the repo root as is.

## Layout

| Path | Page |
|---|---|
| `/` (`index.html`) | Studio home: hero, the apps, contact |
| `/habitstack/` | HabitStack overview: screenshots, features, Free vs Pro, your data. The page Google's OAuth brand verification checks. |
| `/habitstack/privacy/` | HabitStack privacy policy |
| `/habitstack/terms/` | HabitStack terms of use |
| `/habitstack/delete-account/` | HabitStack account deletion (linked from Play Console) |
| `/gamebooster/` | VG GameBooster overview (discontinued, no longer on Google Play) |
| `/privacy-policy.html`, `/terms.html` | VG GameBooster legal pages. Keep these URLs for anyone who still has the app installed. |
| `/404.html`, `/robots.txt`, `/sitemap.xml` | Housekeeping |

Each page lives at `<app>/<page>/index.html`, so clean URLs such as `/habitstack/privacy/` work on
any host without rewrite rules.

## Design

- `assets/css/site.css` is the only stylesheet. Every colour is a token at the top of the file.
- The site uses HabitStack's dark colour scheme (from `habitstack/ui/.../theme/Color.kt` and
  `design/brand/` in `dev-velaroglobal/indie-apps`): `#0D1B0F` background, `#16291B` cards,
  `#4ADE80` accent, with Plus Jakarta Sans from Google Fonts.
- The Velaro Global logo is the original `assets/img/vg-logo.png` (the "VG / Velaro Global" ring
  logo from the old site header), shown as is. Never edit, recolour or redraw the logo file.
- Every page shares the same header and footer. When you add or rename a page, update the header
  nav and the footer columns on every page.

## Screenshots

- `habitstack/screenshots/*-{light,dark}.webp` come from the app's Roborazzi golden images in
  `indie-apps` (each module's `src/test/snapshots/`), cropped to 9:16 and resized to 540×960.
  The site uses the dark ones; the light ones are kept for a future light theme.
- `gamebooster/screenshots/*.webp` are device screenshots, cropped and resized the same way.
- Keep every image small (WebP, 540 px wide).

## Adding an app

1. Create `<app>/index.html`, `<app>/privacy/index.html`, `<app>/terms/index.html` and, if the
   app has accounts, `<app>/delete-account/index.html`. Copying the `habitstack/` folder is the
   quickest start.
2. Add an `app-card` for it to the root `index.html`.
3. Add it to the header nav and a footer column on every page.
4. Add its URLs to `sitemap.xml`.

## Keeping legal text in sync

The HabitStack privacy policy mirrors the in-app copy (`HelpContent.privacy`) and
`design/play-data-safety.md` in `dev-velaroglobal/indie-apps`. Change all three together, and bump
the "Last updated" date.

## Hosting

The domain is registered with Cloudflare, which also manages its DNS. GitHub Pages serves the
repo's `main` branch; `CNAME` holds the custom domain. `.nojekyll` makes GitHub Pages serve
dot-folders such as `.well-known/`, which Android App Links will need if invite links ever move
to this domain.

## Contact

velaroglobal@gmail.com
