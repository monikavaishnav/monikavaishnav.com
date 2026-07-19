# monikavaishnav.com

Personal portfolio site, built with [Next.js](https://nextjs.org) (App Router) and TypeScript. Deployed as a static export to GitHub Pages at [monikavaishnav.com](https://monikavaishnav.com).

## Requirements

- Node.js 20 or later
- npm

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (pass `-- -p <port>` to `npm run dev` to use a different port).

## Other commands

```bash
npm run build   # production build — static export written to ./out
npm run lint    # ESLint
```

`npm run build` outputs a fully static site to `./out` (via `output: "export"` in `next.config.ts`) — no Node server is needed to serve it. To preview that exact output locally:

```bash
npm run build
npx serve out
```

## Project structure

```
app/                    Routes (App Router)
  page.tsx              Home
  projects/              /projects
  resume/                 /resume
  work/boat/               /work/boat — boAt case study
  globals.css            Design tokens (colors, fonts) + base reset
  layout.tsx              Root layout, fonts (next/font), shared <Navbar/>
components/             Shared components (Navbar, Footer, PortraitHero, etc.)
public/assets/          Images, video, PDF — served as-is
```

Other projects (like the Makhana case study, at [maka.monikavaishnav.com](https://maka.monikavaishnav.com)) are deployed as their own standalone sites under a subdomain, and just linked to from here — not embedded in this repo.

Each route's styles live in a co-located CSS Module (`*.module.css`) next to its `page.tsx`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages. The custom domain is configured via `public/CNAME`, which is why `public/.nojekyll` is also required (otherwise GitHub Pages' Jekyll processing ignores the `_next/` asset directory).

No manual deploy step is needed — merging to `main` is the deploy.
