# Jignesh Dhamecha — Portfolio

Static personal site for [Jignesh Dhamecha](https://engtoolshub.com/): senior frontend / fullstack / AI engineer in Foster City, CA.

Live site: [djig.github.io](https://djig.github.io/). Source is this repo.

Stack: Next.js App Router, TypeScript, Tailwind CSS. Configured for a fully static export (output: export), so it runs on a free tier (GitHub Pages, Cloudflare Pages, or any static host).

## Local

1. npm install
2. npm run dev — binds to 0.0.0.0:3002, open http://127.0.0.1:3002
3. npm run build — emits static files in out/

Regenerate the Open Graph PNG with `npm run og` (`scripts/generate-og.py`). Source art: `public/og.svg` and `scripts/og.html`.

## GitHub Action

Push to `main` (or `workflow_dispatch`) builds and publishes to djig/djig.github.io which is https://djig.github.io/. Secret PAGES_DEPLOY_KEY is a write deploy key for djig/djig.github.io.

## Deploy the static out/ folder

Build once, then point any static host at `out/`.

### Cloudflare Pages

- Build command: `npm run build`
- Output directory: `out`
- Framework preset: None / static
- Or Direct Upload the contents of `out/`

### GitHub Pages

A `.nojekyll` file is included under `public/` so GitHub does not ignore the `_next/` folder.

Project site (USER.github.io/REPO): set `basePath: "/REPO"` in `next.config.ts` before building, then publish `out/`.

User/org site (USER.github.io): leave basePath empty and publish `out/` to the `*.github.io` repo or `gh-pages`.

### Vercel

Import the repo. App Router plus `output: "export"` produces a static site. Or upload `out/` as a static deployment.

### Any other static host

Upload the contents of `out/` (Netlify, S3, nginx). No Node server at runtime.

## Notes

- Images are unoptimized so the export does not need the Next.js image optimizer.
- Resume PDF is served from /resume.pdf.
- Favicon is an SVG monogram (JD) at /favicon.svg.
