# velaroglobal.com

The Velaro Global website: the studio home page plus a home page, privacy policy, terms and
account-deletion page for each app. Plain static HTML and CSS with no build step, so any static
host can serve the repo root as is.

## Layout

| Path | Page |
|---|---|
| `/` (`index.html`) | Studio home, listing every app |
| `/habitstack/` | HabitStack home page (the page Google's OAuth brand verification checks) |
| `/habitstack/privacy/` | HabitStack privacy policy |
| `/habitstack/terms/` | HabitStack terms of use |
| `/habitstack/delete-account/` | HabitStack account deletion (linked from Play Console) |
| `/privacy-policy.html`, `/terms.html` | VG GameBooster legal pages. Keep these URLs, the Play listing links to them. |
| `/404.html`, `/robots.txt`, `/sitemap.xml` | Housekeeping |

Each page lives at `<app>/<page>/index.html`, so clean URLs such as `/habitstack/privacy/` work on
any host without rewrite rules.

## Adding an app

1. Create `<app>/index.html`, `<app>/privacy/index.html`, `<app>/terms/index.html` and, if the app
   has accounts, `<app>/delete-account/index.html`. Copying the `habitstack/` folder is the
   quickest start.
2. Add a card for it to the root `index.html`.
3. Add its URLs to `sitemap.xml`.

## Keeping legal text in sync

The HabitStack privacy policy mirrors the in-app copy (`HelpContent.privacy`) and
`design/play-data-safety.md` in `dev-velaroglobal/indie-apps`. Change all three together, and bump
the "Last updated" date.

## Hosting

The domain is registered with Cloudflare, which also manages its DNS. The site is served from this
repo's `main` branch.

`.nojekyll` makes GitHub Pages serve dot-folders such as `.well-known/`, which Android App Links
will need if invite links ever move to this domain. `CNAME` holds the custom domain for GitHub
Pages.

## Contact

velaroglobal@gmail.com
