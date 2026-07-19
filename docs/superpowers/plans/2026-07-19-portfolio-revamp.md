# Portfolio Revamp ("Botanical Atelier") Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the portfolio shell (Home, Projects, Resume, Navbar, Footer) to a single light "Botanical Atelier" design system — one accent color family, three core typefaces plus one signature script accent, one refined botanical motif — while keeping the site's warm, first-person voice.

**Architecture:** Static Next.js App Router site, CSS Modules per route, design tokens as CSS custom properties in `app/globals.css`. No test framework or CI checks beyond `next build` (which type-checks) and `eslint`. Verification per task = lint + build + a manual dev-server check of the specific route(s) touched.

**Tech Stack:** Next.js 16 (App Router, static export), React 19, TypeScript, CSS Modules, `next/font/google`.

## Global Constraints

- Scope is the portfolio shell only: `app/page.tsx`, `app/projects/page.tsx`, `app/resume/page.tsx`, `app/layout.tsx`, `app/globals.css`, `components/Navbar.*`, `components/Footer.*`, `components/PortraitHero.*` (deleted), `components/GlowText.tsx` (untouched, used sparingly per usage below).
- `app/work/makhana/**`, `app/work/boat/**`, and `lib/products.ts` are **not touched** by any task in this plan, except `Navbar`'s Makhana-specific styling (`navMakhana`), which must be preserved byte-for-byte.
- Design tokens (final palette): paper `#FBF4EC`, paper-alt `#F3EAE0`, ink `#2A2620`, moss `#5C6B4E`, blush `#E8A798`, gold `#C9A25E`, muted `#8a7f70`. Single `--accent: var(--moss)`.
- Typography: Fraunces italic for all display headings (`--font-display`), Lora for body copy (`--font-text`), Inter for UI/tags (`--font-body`), Caveat (`--font-script`) used **at most once per page** as a signature accent — never for section headings.
- Dancing Script and its `--font-script-alt` token are retired entirely (only consumer was `PortraitHero`, which is deleted).
- Every task ends with: `npm run lint`, `npm run build`, and a manual check of the affected route(s) with `npm run dev`.

---

## File Structure

| File | Change |
|---|---|
| `app/globals.css` | Rewrite: new token set, `.section-title` switched from Caveat to Fraunces italic, `.theme-clay` removed |
| `components/Navbar.tsx` | Modify: `getVariant()` simplified to only special-case Makhana |
| `components/Navbar.module.css` | Modify: drop `.navHome`/`.navResume`/`.navClay`, restyle base `.navbar` to tokens, keep `.navMakhana` verbatim |
| `components/Footer.tsx` | Modify: drop the `variant` prop, single style |
| `components/Footer.module.css` | Modify: drop `.footerDark`, restyle base `.footer` to tokens |
| `app/layout.tsx` | Modify: remove `Dancing_Script` import/usage |
| `components/PortraitHero.tsx` | Delete |
| `components/PortraitHero.module.css` | Delete |
| `app/page.tsx` | Modify: remove `PortraitHero`, trim bio copy, single gold sprig motif |
| `app/home.module.css` | Rewrite: light paper backgrounds throughout, new token colors, gold-line frame |
| `app/projects/page.tsx` | Modify: drop `theme-clay` wrapper + 4 extra font imports, simplify thumbnail wordmarks |
| `app/projects/projects.module.css` | Modify: token renames, thumbnail type simplified to sitewide fonts |
| `app/resume/page.tsx` | Modify: intro rewritten (career pivot), emoji meta row → plain labels, drop `variant="dark"` on `Footer` |
| `app/resume/resume.module.css` | Modify: token renames |

**Parallelization:** Task 1 (Foundation tokens) must land first and is blocking — every other file depends on the new token names. Tasks 2 (Navbar/Footer), 3 (Home), 4 (Projects), and 5 (Resume) touch entirely disjoint files and can run as four parallel agents once Task 1 is merged.

---

### Task 1: Foundation — design tokens (`app/globals.css`)

**Files:**
- Modify: `app/globals.css` (full rewrite, 69 lines)

**Interfaces:**
- Produces: CSS custom properties consumed by every other task — `--paper`, `--paper-alt`, `--ink`, `--moss`, `--blush`, `--gold`, `--muted`, `--accent`, `--font-display`, `--font-text`, `--font-body`, `--font-script`. And the shared `.section-title` class (Fraunces italic, `color: var(--accent)`).
- Removes: `--blue`, `--clay`, `--dark`, `--light-bg`, `--text`, `--tan`, `--maroon`, `--alabaster`, `--lightblue`, `--midnight`, `--font-script-alt`, `.theme-clay`. Any later task still referencing these old names is a bug.

- [ ] **Step 1: Replace the full contents of `app/globals.css`**

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  /* colours — Botanical Atelier */
  --paper: #FBF4EC;
  --paper-alt: #F3EAE0;
  --ink: #2A2620;
  --moss: #5C6B4E;
  --blush: #E8A798;
  --gold: #C9A25E;
  --muted: #8a7f70;
  --accent: var(--moss);

  /* fonts — variables come from next/font in app/layout.tsx */
  --font-display: var(--font-fraunces), Georgia, serif;   /* headings */
  --font-text: var(--font-lora), Georgia, serif;          /* reading body */
  --font-body: var(--font-inter), system-ui, sans-serif;  /* small UI labels */
  --font-script: var(--font-caveat), cursive;             /* one signature accent per page, no more */
}

html {
  font-size: 18px;
  scroll-behavior: smooth;
  height: 100%;
}

html, body {
  max-width: 100vw;
}

body {
  min-height: 100%;
  color: var(--ink);
  background: var(--paper);
  font-family: var(--font-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

/* ── Shared page heading style (used across Projects/Resume/case-study page headers) ── */
.section-title {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 500;
  text-transform: none;
  font-size: clamp(2.9rem, 6vw, 4.6rem);
  color: var(--accent);
  line-height: 0.95;
  letter-spacing: 0;
}
```

- [ ] **Step 2: Verify no other file still references a removed token**

Run: `grep -rn "var(--blue)\|var(--clay)\|var(--dark)\|var(--light-bg)\|var(--text)\|var(--tan)\|var(--maroon)\|var(--alabaster)\|var(--lightblue)\|var(--midnight)\|var(--font-script-alt)\|theme-clay" app components`
Expected: no matches yet, since downstream files haven't been updated — this is fine for Task 1. Re-run this exact command again at the very end of Tasks 2–5 (see each task's final step) and expect zero matches once all five tasks are merged.

- [ ] **Step 3: Build and lint**

Run: `npm run lint && npm run build`
Expected: both succeed. The build will show type/CSS-module errors from files not yet updated (Tasks 2–5) — that's expected at this point; this step is really about confirming `globals.css` itself has no syntax errors.

- [ ] **Step 4: Commit**

```bash
git add app/globals.css
git commit -m "feat: replace design tokens with Botanical Atelier palette"
```

---

### Task 2: Navbar & Footer unification

**Depends on:** Task 1 (uses `--paper`, `--moss`, `--muted`).

**Files:**
- Modify: `components/Navbar.tsx`
- Modify: `components/Navbar.module.css`
- Modify: `components/Footer.tsx`
- Modify: `components/Footer.module.css`

**Interfaces:**
- Produces: `<Footer />` with no props (the `variant` prop is removed — Task 5 must update its one call site in `app/resume/page.tsx` to drop `variant="dark"`).
- Consumes: tokens from Task 1.

- [ ] **Step 1: Simplify `getVariant()` in `components/Navbar.tsx`**

Replace:
```tsx
// Each page had its own recolored navbar via a body class in the old site
// (.home .navbar, .resume-page .navbar, .theme-clay .nav-logo, .makhana-page
// .navbar, ...). Centralized here instead of scattered across 4 stylesheets —
// boAt's pages never overrode the navbar, so they fall through to default.
function getVariant(pathname: string): string {
  if (pathname === "/") return styles.navHome;
  if (pathname.startsWith("/resume")) return styles.navResume;
  if (pathname.startsWith("/projects")) return styles.navClay;
  if (pathname.startsWith("/work/makhana")) return styles.navMakhana;
  return "";
}
```

With:
```tsx
// The portfolio shell (Home, Projects, Resume) all share one navbar style now.
// Makhana keeps its own distinct navbar — it's a separate branded case study,
// out of scope for the portfolio revamp. boAt has no override, so it falls
// through to the shared default.
function getVariant(pathname: string): string {
  if (pathname.startsWith("/work/makhana")) return styles.navMakhana;
  return "";
}
```

- [ ] **Step 2: Restyle `components/Navbar.module.css`, keep `.navMakhana` untouched**

Replace everything from the `/* ── Per-page navbar recolors ... */` comment to the end of the file with:

```css
/* ── Makhana keeps its own distinct navbar (separate branded project,
   out of scope for the portfolio revamp) ── */
.navMakhana {
  background: #FFFCF0;
  border-bottom-color: rgba(0, 0, 0, 0.1);
}
.navMakhana .logo { color: #2B6B3E; }
.navMakhana .link { color: #5a5240; }
.navMakhana .link:hover,
.navMakhana .linkActive { color: #2B6B3E; }
```

And update the base rules above it:

```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.3rem 4rem;
  border-bottom: 1px solid rgba(42, 38, 32, 0.12);
  position: sticky;
  top: 0;
  background: var(--paper);
  z-index: 100;
}

.logo {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--moss);
  text-decoration: none;
  letter-spacing: 0.02em;
}

.links {
  list-style: none;
  display: flex;
  gap: 2.5rem;
}

.link {
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}

.link:hover,
.linkActive {
  color: var(--moss);
}

@media (max-width: 768px) {
  .navbar { padding: 1rem 1.5rem; }
  .links { gap: 1.5rem; }
}

@media (max-width: 480px) {
  .navbar { padding: 0.85rem 1rem; }
  .logo { font-size: 1.15rem; }
  .links { gap: 0.9rem; }
  .link { font-size: 0.64rem; letter-spacing: 0.06em; }
}
```

- [ ] **Step 3: Drop the `variant` prop from `components/Footer.tsx`**

Replace:
```tsx
import styles from "./Footer.module.css";

export default function Footer({ variant }: { variant?: "dark" }) {
  return (
    <footer className={`${styles.footer} ${variant === "dark" ? styles.footerDark : ""}`}>
      <span>© 2026 MONIKA VAISHNAV</span>
      <span>@MONIKAVAISHNAV</span>
    </footer>
  );
}
```

With:
```tsx
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© 2026 MONIKA VAISHNAV</span>
      <span>@MONIKAVAISHNAV</span>
    </footer>
  );
}
```

- [ ] **Step 4: Restyle `components/Footer.module.css`**

Replace the full file with:
```css
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 4rem;
  border-top: 1px solid rgba(42, 38, 32, 0.12);
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

@media (max-width: 768px) {
  .footer { padding: 1.5rem; flex-direction: column; gap: 0.5rem; text-align: center; }
}
```

- [ ] **Step 5: Build and lint**

Run: `npm run lint && npm run build`
Expected: `app/resume/page.tsx` will fail to build because it still passes `variant="dark"` to `Footer` — that's Task 5's job to fix. If Task 5 hasn't landed yet, confirm the *only* build error is that prop mismatch on `Footer`, nothing else.

- [ ] **Step 6: Manual check**

Run: `npm run dev`, visit `/` and `/work/makhana/`. Confirm the Home navbar is now a plain light bar (no glass/blur effect, no glow-on-scroll), and Makhana's navbar is unchanged (cream background, green logo).

- [ ] **Step 7: Commit**

```bash
git add components/Navbar.tsx components/Navbar.module.css components/Footer.tsx components/Footer.module.css
git commit -m "feat: unify navbar and footer styling, keep Makhana navbar distinct"
```

---

### Task 3: Home (`/`)

**Depends on:** Task 1.

**Files:**
- Delete: `components/PortraitHero.tsx`
- Delete: `components/PortraitHero.module.css`
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/home.module.css`

**Interfaces:**
- Consumes: tokens from Task 1.
- Produces: no exports consumed by other tasks — Home is a leaf page.

- [ ] **Step 1: Delete the PortraitHero component**

```bash
rm components/PortraitHero.tsx components/PortraitHero.module.css
```

- [ ] **Step 2: Remove Dancing Script from `app/layout.tsx`**

Replace:
```tsx
import type { Metadata } from "next";
import { Fraunces, Inter, Lora, Caveat, Dancing_Script } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-caveat",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-dancing-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monika Vaishnav — Creative Portfolio",
  description: "Brand strategist & story-first thinker — brand strategy, GTM planning, and campaign work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${lora.variable} ${caveat.variable} ${dancingScript.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
```

With:
```tsx
import type { Metadata } from "next";
import { Fraunces, Inter, Lora, Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monika Vaishnav — Creative Portfolio",
  description: "Brand strategist & story-first thinker — brand strategy, GTM planning, and campaign work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${lora.variable} ${caveat.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Rewrite `app/page.tsx`**

Replace the full file with:
```tsx
import Image from "next/image";
import SkillsRotator from "@/components/SkillsRotator";
import GlowText from "@/components/GlowText";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      {/* HERO / ABOUT */}
      <section className={styles.introHero} id="about">
        <div className={styles.introLeft}>
          <span className={styles.introHi}>
            <GlowText>Hi!</GlowText>{" "}
            <svg className={styles.doodle} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C13 8 16 11 24 12 16 13 13 16 12 24 11 16 8 13 0 12 8 11 11 8 12 0Z" fill="currentColor" /></svg>
          </span>
          <h1 className={styles.introName}><GlowText>I&apos;m <span className={styles.introNameAccent}>Monika</span></GlowText></h1>
          <p className={styles.introBrand}><span className={styles.hlBox}>...and this is my brand.</span></p>
          <p className={styles.introPositioning}>Brand strategist &amp; story-first thinker —<br />building brands people actually feel something for.</p>
          <div className={styles.introBio}>
            <p>I started in a field far from business — pharmaceutical sciences — which turned out to be the best thing that ever happened to my career. It gave me a curious, research-first lens, and an MBA later gave that curiosity rigour. Somewhere between consumer research and brand campaigns, I found my sweet spot: <strong className={styles.hlMarker}>building brands that people actually feel something for.</strong></p>
            <p>I&apos;m drawn to FMCG and fashion &amp; lifestyle brands because they live closest to culture — the best ones don&apos;t just sell products, they shift behaviours and become part of people&apos;s identities. Thanks for stopping by; I&apos;d love to make something great together.</p>
          </div>
          <a href="/projects/" className={styles.introArrow}>
            <span className={styles.introCtaNote}>peek at my work</span>
            <span className={styles.introArrowMark}>→</span>
          </a>
        </div>
        <div className={styles.introRight}>
          <div className={styles.introPhotoWrap}>
            <div className={styles.goldFrame}>
              <div className={styles.framePhoto}>
                <Image src="/assets/hero-photo.png" alt="Monika Vaishnav" fill className={styles.introPhoto} sizes="(max-width: 768px) 70vw, 400px" />
              </div>
            </div>
            <svg className={styles.goldSprig} viewBox="0 0 120 210" fill="none" aria-hidden="true">
              <path d="M60 58 C57 100 64 150 59 206" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
              <path d="M60 112 C44 104 35 108 30 97" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
              <path d="M59 150 C76 142 85 146 90 134" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="60" cy="54" r="4" fill="var(--gold)" />
            </svg>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className={styles.skills}>
        <div className={styles.skillsLeft}>
          <p className={styles.skillsIntro}>
            <GlowText>
              <span className={`${styles.hlMarker} ${styles.hlMarkerDark}`}>Where strategy meets storytelling.</span> I work at the intersection of brand thinking
              and creative execution, with a focus on FMCG and lifestyle brands.
            </GlowText>
          </p>
          <h2 className={`section-title ${styles.skillsHeading}`}><GlowText>What I<br />Do Best</GlowText></h2>
          <div className={styles.skillsPhoto}>
            <div className={styles.goldFrame}>
              <div className={`${styles.framePhoto} ${styles.framePhotoTall}`}>
                <Image src="/assets/skills-photo.png" alt="Monika at work" fill sizes="(max-width: 768px) 80vw, 400px" />
              </div>
            </div>
          </div>
          <p className={styles.skillsNote}>a head full of ideas, always brewing :)</p>
        </div>
        <div className={styles.skillsRight}>
          <SkillsRotator />
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className={styles.featuredWork} id="work">
        <div className={styles.featuredWorkHd}>
          <div>
            <span className={styles.fwEyebrow}>Featured Work</span>
            <h2 className={`section-title ${styles.featuredWorkTitle}`}>Some of<br />my work.</h2>
          </div>
          <a href="/projects/" className={styles.featuredSeeAll}>See all projects →</a>
        </div>
        <div className={styles.featuredCards}>

          <a href="/work/makhana/" className={styles.fwCard}>
            <div className={`${styles.fwThumb} ${styles.fwThumbMaka}`}>
              <div className={styles.fwPreview}>
                <iframe src="/work/makhana/" title="Makhana Brand Launch — live preview" loading="lazy" tabIndex={-1} aria-hidden="true" />
              </div>
            </div>
            <div className={styles.fwInfo}>
              <span className={styles.fwTag}>GTM Strategy · Brand Campaign</span>
              <h3 className={styles.fwTitle}>Makhana Brand Launch</h3>
              <p className={styles.fwDesc}>Full go-to-market strategy and brand campaign for a healthy snacking brand — from consumer research and positioning to creative execution.</p>
              <span className={styles.fwLink}>VIEW PROJECT →</span>
            </div>
          </a>

          <a href="/work/boat/" className={styles.fwCard}>
            <div className={`${styles.fwThumb} ${styles.fwThumbBoat}`}>
              <div className={styles.fwPreview}>
                <iframe src="/work/boat/" title="boAt — Turn It Down — live preview" loading="lazy" tabIndex={-1} aria-hidden="true" />
              </div>
            </div>
            <div className={styles.fwInfo}>
              <span className={styles.fwTag}>Campaign Analysis · Marketing</span>
              <h3 className={styles.fwTitle}>boAt — Turn It Down</h3>
              <p className={styles.fwDesc}>A three-part read of India&apos;s loudest audio brand — the campaign machine, the emotional silence underneath, and the one move that would make people feel the brand.</p>
              <span className={styles.fwLink}>VIEW PROJECT →</span>
            </div>
          </a>

        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section className={styles.socialSection} id="connect">
        <div className={styles.socialAvatar}>
          <Image src="/assets/social-photo.png" alt="Monika" fill sizes="170px" />
        </div>
        <h2 className={styles.socialHeading}>
          <span className={styles.socialHeadingBold}>Social</span>
          <em className={styles.socialHeadingItalic}> media is kinda my thing</em>
        </h2>
        <div className={styles.socialIcons}>

          <a href="https://www.linkedin.com/in/monikavaishnav/" target="_blank" rel="noopener" className={styles.socialLink} aria-label="LinkedIn">
            <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={styles.socialHandle}>LinkedIn</span>
          </a>

          <a href="https://in.pinterest.com/IllustratedInspo/" target="_blank" rel="noopener" className={styles.socialLink} aria-label="Pinterest">
            <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.565 0-2.387-1.715-4.057-4.163-4.057-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.775.741 2.276a.3.3 0 0 1 .069.286c-.076.313-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="0.5" fill="currentColor" />
            </svg>
            <span className={styles.socialHandle}>Pinterest</span>
          </a>

          <a href="https://x.com/anxiousrajma" target="_blank" rel="noopener" className={styles.socialLink} aria-label="Twitter / X">
            <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M20 4h-5l-11 16h5L20 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span className={styles.socialHandle}>Twitter / X</span>
          </a>

        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <h2 className={`section-title ${styles.contactTitle}`}>Let&apos;s<br />Connect</h2>
          <p className={styles.contactText}>
            Open to freelance projects, full time roles, and creative collaborations.
            Drop me a line, I&apos;d love to chat.
          </p>
          <a href="mailto:monikavaishnav.mba@gmail.com" className={styles.contactEmail}>
            MONIKAVAISHNAV.MBA@GMAIL.COM
          </a>
        </div>
        <p className={styles.contactNote}>made with love :)</p>
        <div className={styles.contactFooter}>
          <span>© 2026 MONIKA VAISHNAV</span>
          <span>@MONIKAVAISHNAV</span>
        </div>
      </section>
    </>
  );
}
```

Notes on this rewrite versus the current file:
- `PortraitHero` import and render removed.
- `GlowText` is dropped from `.skillsIntro`'s inner span nesting where it wrapped already-styled `hlMarker` text (kept), but removed from plain paragraphs (`socialHeading`, `contactText`, `skillsNote`, `contactNote`) — per the design system, `GlowText`'s hover-glow effect is a nice-to-have, not required by the spec; keeping it only where it wraps the two remaining `GlowText` calls (`Hi!` and the `hlMarker` intro line) avoids re-wrapping every word on the page in spans. This matches "use once as a signature moment" restraint.
- The `frameSprig`/`frameSprigAccent`/`frameSprigSkills` SVGs are gone from both the hero and skills photo; only one `goldSprig` remains, on the hero photo.
- `stampFrame`/`stampPhoto`/`stampPhotoTall` renamed to `goldFrame`/`framePhoto`/`framePhotoTall` (see CSS below).
- Bio trimmed from 5 paragraphs to 2.

- [ ] **Step 4: Rewrite `app/home.module.css`**

Replace the full file with:
```css
.divider { display: none; }

/* ── Text highlight utilities ── */
.hlMarker {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 38' preserveAspectRatio='none'%3E%3Cpath d='M1 26 C25 14 55 21 90 18 C125 15 160 23 199 26' fill='none' stroke='rgba(92%2C107%2C78%2C0.35)' stroke-width='24' stroke-linecap='round'/%3E%3Cpath d='M2 17 C30 11 72 15 115 12 C155 10 185 14 198 17' fill='none' stroke='rgba(92%2C107%2C78%2C0.18)' stroke-width='5' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 100% 115%;
  background-position: 0% 50%;
  padding: 0 0.2em;
}
.hlMarkerDark { color: var(--ink); }

.hlBox {
  position: relative;
  display: inline-block;
}
.hlBox::before {
  content: '';
  position: absolute;
  inset: -0.35em -0.55em;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60' preserveAspectRatio='none' fill='none'%3E%3Cpath d='M4 10 Q50 4 100 7 Q150 4 196 10' stroke='%23C9A25E' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M4 50 Q50 56 100 53 Q150 56 196 50' stroke='%23C9A25E' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M7 8 Q3 30 6 52' stroke='%23C9A25E' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M193 8 Q197 30 194 52' stroke='%23C9A25E' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  pointer-events: none;
}

/* sparkle next to "Hi!" */
.doodle { color: var(--moss); display: inline-block; vertical-align: middle; pointer-events: none; }
.introHi .doodle { width: 0.55em; height: 0.55em; margin-left: 0.1em; vertical-align: 0.35em; }

/* ── 1 · INTRO (About) ── */
.introHero {
  background: var(--paper);
  position: relative;
  overflow: visible;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  padding: 4rem 4rem 3rem;
  gap: 2rem;
  min-height: 88vh;
}

.introLeft {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-right: 2rem;
}

/* the one signature handwritten touch on this page */
.introHi {
  font-family: var(--font-script);
  font-size: clamp(2.6rem, 5vw, 3.4rem);
  font-weight: 700;
  color: var(--moss);
  line-height: 1;
  margin-bottom: 0;
}

.introName {
  font-family: var(--font-display);
  font-optical-sizing: auto;
  font-weight: 600;
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.025em;
  color: var(--ink);
  margin-bottom: 1.5rem;
}
.introNameAccent { color: var(--moss); font-style: italic; font-weight: 500; }

.introBrand {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-style: italic;
  font-weight: 400;
  color: var(--ink);
  opacity: 0.85;
  margin-bottom: 2rem;
}

.introPositioning {
  font-family: var(--font-display);
  font-size: clamp(1rem, 1.8vw, 1.28rem);
  font-style: italic;
  font-weight: 500;
  color: var(--moss);
  line-height: 1.5;
  margin-bottom: 1.8rem;
  padding-left: 1.1rem;
  border-left: 3px solid var(--gold);
}

.introBio { display: flex; flex-direction: column; gap: 1.1rem; margin-bottom: 2.5rem; }
.introBio p { font-size: 1.05rem; line-height: 1.8; color: var(--ink); }
.introBio strong { font-weight: 600; color: var(--moss); }

.introArrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  align-self: flex-start;
  color: var(--moss);
  text-decoration: none;
  transition: transform 0.2s, color 0.2s;
  margin-top: auto;
}
.introArrow:hover { transform: translateX(4px); }
.introArrowMark { font-size: 2rem; line-height: 1; }
.introCtaNote {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.introRight {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 1rem;
}

.introPhotoWrap {
  width: 100%;
  max-width: 400px;
  position: relative;
  transform: rotate(-2deg);
  filter: drop-shadow(0 14px 26px rgba(42, 38, 32, 0.16));
}

/* thin gold-line frame, replaces the old postage-stamp perforated mask */
.goldFrame {
  padding: 10px;
  background: var(--paper);
  border: 1.5px solid var(--gold);
}

.framePhoto {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: var(--paper-alt);
}
.framePhotoTall { aspect-ratio: 3/4; background: var(--paper-alt); }

.introPhoto { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }

/* the one botanical motif left on the page */
.goldSprig {
  position: absolute;
  width: 72px;
  right: -12px;
  bottom: -20px;
  transform: rotate(-10deg);
  z-index: 3;
  pointer-events: none;
}

@media (max-width: 768px) {
  .goldSprig { width: 52px; right: -6px; bottom: -14px; }
}

@media (max-width: 768px) {
  .introHero { grid-template-columns: 1fr; padding: 2.5rem 1.5rem; min-height: auto; }
  .introLeft { padding-right: 0; }
  .introRight { order: -1; justify-content: center; }
  .introPhotoWrap { max-width: 280px; }
}

/* ── 3 · SKILLS ── */
.skills {
  background: var(--paper-alt);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 5.5rem 4rem;
  align-items: start;
  position: relative;
}

.skillsLeft { display: flex; flex-direction: column; gap: 1.5rem; }
.skillsIntro { font-size: 1.05rem; line-height: 1.75; color: var(--ink); }
.skillsHeading { color: var(--ink); }

.skillsPhoto {
  width: 76%;
  margin-top: 0.8rem;
  position: relative;
  transform: rotate(2deg);
  filter: drop-shadow(0 14px 26px rgba(42, 38, 32, 0.18));
}
.skillsPhoto img { width: 100%; height: 100%; object-fit: contain; object-position: bottom center; display: block; }

.skillsNote {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.2;
  margin-top: 0.3rem;
  color: var(--moss);
}

.skillsRight { display: flex; align-items: center; padding-top: 2rem; }

@media (max-width: 768px) {
  .skills { grid-template-columns: 1fr; padding: 2.5rem 1.5rem; gap: 2rem; }
  .skillsPhoto { width: 80%; }
  .skillsRight { padding-top: 0; }
}

/* ── 4 · FEATURED WORK ── */
.featuredWork { background: var(--paper); padding: 5rem 4rem; }

.featuredWorkHd {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2.8rem;
  gap: 1rem;
}
.featuredWorkTitle { color: var(--ink); }

.fwEyebrow {
  display: block;
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  color: var(--gold);
}

.featuredSeeAll {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--moss);
  text-decoration: none;
  border-bottom: 2px solid currentColor;
  padding-bottom: 0.2rem;
  transition: opacity 0.2s;
  white-space: nowrap;
  margin-bottom: 0.4rem;
  align-self: flex-end;
}
.featuredSeeAll:hover { opacity: 0.6; }

.featuredCards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  align-items: stretch;
}

.fwCard {
  display: flex;
  flex-direction: column;
  background: var(--paper-alt);
  border: 1.5px solid rgba(42, 38, 32, 0.1);
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}
.fwCard:hover { transform: translateY(-6px); box-shadow: 0 14px 44px rgba(42, 38, 32, 0.14); }

.fwThumb {
  height: 210px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
}
.fwThumbMaka { background: #F5C518; }
.fwThumbBoat { background: linear-gradient(160deg, #17171B, #0C0C0E); }

.fwPreview { position: relative; width: 100%; height: 100%; overflow: hidden; pointer-events: none; }
.fwPreview iframe {
  position: absolute;
  top: 0; left: 0;
  width: 400%;
  height: 400%;
  border: 0;
  transform: scale(0.25);
  transform-origin: top left;
}

.fwInfo { padding: 1.4rem 1.5rem 1.8rem; display: flex; flex-direction: column; gap: 0.45rem; flex: 1; }
.fwTag { font-family: var(--font-body); font-size: 0.62rem; font-weight: 700; letter-spacing: 0.17em; text-transform: uppercase; color: var(--moss); }
.fwTitle { font-family: var(--font-display); font-size: 1.4rem; font-weight: 600; color: var(--ink); }
.fwDesc { font-size: 0.94rem; line-height: 1.6; color: rgba(42, 38, 32, 0.68); margin-top: 0.2rem; }
.fwLink { font-family: var(--font-body); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--moss); margin-top: auto; padding-top: 0.9rem; }

@media (max-width: 600px) {
  .featuredWork { padding: 3rem 1.5rem; }
  .featuredWorkHd { flex-direction: column; align-items: flex-start; gap: 0.9rem; }
  .featuredCards { grid-template-columns: 1fr; }
}

/* ── 5 · SOCIAL ── */
.socialSection { background: var(--paper-alt); padding: 5.5rem 4rem; text-align: center; position: relative; overflow: visible; }

.socialAvatar {
  position: relative;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 2rem;
  background: var(--blush);
  box-shadow: 0 10px 26px rgba(42, 38, 32, 0.14);
}
.socialAvatar img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }

.socialHeading { font-family: var(--font-display); font-style: italic; font-size: clamp(2.4rem, 5vw, 3.8rem); line-height: 1.0; margin-bottom: 3.5rem; letter-spacing: 0; font-weight: 500; }
.socialHeadingBold { font-weight: 600; color: var(--moss); }
.socialHeadingItalic { font-weight: 400; color: var(--ink); }

.socialIcons { display: flex; justify-content: center; align-items: center; gap: 4rem; flex-wrap: wrap; }
.socialLink { display: flex; flex-direction: column; align-items: center; gap: 0.8rem; text-decoration: none; color: var(--ink); transition: color 0.2s, transform 0.2s; }
.socialLink:hover { color: var(--moss); transform: translateY(-4px); }
.socialIcon { width: 38px; height: 38px; stroke: currentColor; }
.socialHandle { font-family: var(--font-body); font-size: 0.7rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: inherit; }

@media (max-width: 768px) {
  .socialSection { padding: 3.5rem 1.5rem; }
  .socialIcons { gap: 2.5rem; }
}

/* ── 6 · CONTACT ── */
.contact { background: var(--paper); padding: 6rem 4rem 1.8rem; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.contactInner { text-align: center; max-width: 640px; position: relative; }
.contactTitle { color: var(--ink); }

.contactText { font-size: 1.05rem; line-height: 1.75; color: rgba(42, 38, 32, 0.75); margin: 1.5rem 0 2.2rem; }

.contactEmail {
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 2.5vw, 1.8rem);
  font-weight: 500;
  font-style: italic;
  color: var(--moss);
  text-decoration: none;
  border-bottom: 2px solid var(--moss);
  padding-bottom: 3px;
  transition: opacity 0.2s;
}
.contactEmail:hover { opacity: 0.65; }

.contactNote { font-family: var(--font-display); font-style: italic; font-weight: 500; font-size: 1.4rem; line-height: 1; margin-top: 3rem; color: var(--moss); }

.contactFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin-top: 2.2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(42, 38, 32, 0.14);
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

@media (max-width: 768px) {
  .contactFooter { flex-direction: column; gap: 0.5rem; text-align: center; }
}
```

- [ ] **Step 5: Confirm no stray references to removed tokens or the deleted component**

Run: `grep -rn "PortraitHero\|var(--maroon)\|var(--tan)\|var(--midnight)\|var(--lightblue)\|var(--alabaster)\|stampFrame\|stampPhoto\|frameSprig" app/page.tsx app/home.module.css app/layout.tsx components/`
Expected: no matches.

- [ ] **Step 6: Build and lint**

Run: `npm run lint && npm run build`
Expected: both succeed once Task 1 (and ideally Task 2) are merged. If Task 2 hasn't landed yet, the only failures should be inside `Navbar`/`Footer`, not this task's files.

- [ ] **Step 7: Manual check**

Run: `npm run dev`, visit `/`. Confirm: one hero (no lamp, no sticker scene), the trimmed two-paragraph bio, a single gold-line sprig on the hero photo only (not on the skills photo), and all section backgrounds are light paper tones (no maroon or saturated tan blocks).

- [ ] **Step 8: Commit**

```bash
git add app/page.tsx app/home.module.css app/layout.tsx
git rm components/PortraitHero.tsx components/PortraitHero.module.css
git commit -m "feat: merge home hero, drop lamp interaction, restyle to Botanical Atelier tokens"
```

---

### Task 4: Projects (`/projects`)

**Depends on:** Task 1.

**Files:**
- Modify: `app/projects/page.tsx`
- Modify: `app/projects/projects.module.css`

**Interfaces:**
- Consumes: tokens from Task 1.
- Produces: nothing consumed elsewhere.

- [ ] **Step 1: Drop the extra fonts and `theme-clay` wrapper in `app/projects/page.tsx`**

Replace the full file with:
```tsx
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects — Monika Vaishnav",
};

export default function ProjectsPage() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className="section-title">Projects</h1>
        <p className={styles.pageHeaderSub}>A selection of work across strategy, design, and technology.</p>
      </div>

      <div className={styles.divider} />

      <main className={styles.projectsPage}>
        <div className={styles.projectsGrid}>

          <article className={styles.projectCard}>
            <a href="/work/makhana/" className={styles.projectThumbLink}>
              <div className={`${styles.projectThumb} ${styles.makhanaThumb}`}>
                <div className={styles.makhanaThumbInner}>
                  <span className={styles.mkWordmark}>maka</span>
                  <span className={styles.makhanaThumbSub}>GTM CAMPAIGN · BRAND IDENTITY</span>
                </div>
              </div>
            </a>
            <div className={styles.projectInfo}>
              <span className={styles.projectTag}>GTM STRATEGY · BRAND CAMPAIGN</span>
              <h2 className={styles.projectTitle}>Makhana Brand Launch</h2>
              <p className={styles.projectDesc}>Built a full go to market strategy and brand campaign for a healthy snacking brand&apos;s Makhana product line, from market research and positioning to creative execution.</p>
              <a href="/work/makhana/" className={styles.projectLink}>VIEW PROJECT →</a>
            </div>
          </article>

          <article className={styles.projectCard}>
            <a href="/work/boat/" className={styles.projectThumbLink}>
              <div className={`${styles.projectThumb} ${styles.boatThumb}`}>
                <div className={styles.boatThumbInner}>
                  <span className={styles.boatThumbWord}>boAt</span>
                  <span className={styles.boatThumbTagline}>found in the quiet</span>
                  <span className={styles.boatThumbSub}>CAMPAIGN ANALYSIS</span>
                </div>
              </div>
            </a>
            <div className={styles.projectInfo}>
              <span className={styles.projectTag}>CAMPAIGN ANALYSIS · MARKETING</span>
              <h2 className={styles.projectTitle}>boAt — Turn It Down</h2>
              <p className={styles.projectDesc}>A three-part read of India&apos;s loudest audio brand — the campaign machine it runs, the emotional silence underneath the noise, and the one 3AM move that would make people finally feel the brand.</p>
              <a href="/work/boat/" className={styles.projectLink}>VIEW PROJECT →</a>
            </div>
          </article>

        </div>
      </main>

      <Footer />
    </div>
  );
}
```

Note: the Makhana thumbnail's Devanagari/Latin logo lockup (`mkLogoLockup`/`mkLogoBar`/`mkLogoWm`/`mkLogoDev`/`mkLogoLat`) is replaced with a single `mkWordmark` span set in the sitewide display font — the thumbnail still previews the project visually (yellow background, decorative circles from CSS below are untouched) but no longer depends on the Devanagari font. The boAt thumbnail's `Baloo 2` wordmark is replaced with the sitewide display font the same way; the star and dot-pattern background decoration is untouched.

- [ ] **Step 2: Update `app/projects/projects.module.css`**

Replace the full file with:
```css
.pageHeader {
  padding: 4rem 4rem 2.5rem;
  display: flex;
  align-items: baseline;
  gap: 3rem;
}

.pageHeaderSub {
  font-family: var(--font-text);
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  color: var(--muted);
}

.divider {
  width: 100%;
  height: 14px;
  margin: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='14' viewBox='0 0 40 14'%3E%3Cpath d='M0 7 Q10 1 20 7 T40 7' fill='none' stroke='%232A2620' stroke-opacity='0.16' stroke-width='1.5'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  background-position: center;
}

.projectsPage {
  padding: 3rem 4rem 5.5rem;
}

.projectsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3.5rem 2.5rem;
}

.projectCard {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.projectThumbLink { display: block; text-decoration: none; }
.projectThumbLink:hover .projectThumb { opacity: 0.88; }

.projectThumb {
  width: 100%;
  aspect-ratio: 4/3;
  background: var(--paper-alt);
  overflow: hidden;
  transition: opacity 0.2s;
  display: flex !important;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
}

.projectInfo {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.projectTag {
  font-family: var(--font-body);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
}

.projectTitle {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
  line-height: 1.15;
}

.projectDesc {
  font-family: var(--font-text);
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--muted);
  margin-top: 0.25rem;
}

.projectLink {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink);
  text-decoration: none;
  margin-top: 0.5rem;
  transition: color 0.2s;
}
.projectLink:hover { color: var(--accent); }

/* ── Makhana thumb ── */
.makhanaThumb {
  background: #F5C518;
  position: relative;
  overflow: hidden;
}
.makhanaThumb::before {
  content: '';
  position: absolute;
  width: 220px; height: 220px;
  border-radius: 50%;
  background: rgba(0,0,0,0.05);
  top: -70px; right: -70px;
  pointer-events: none;
}
.makhanaThumb::after {
  content: '';
  position: absolute;
  width: 90px; height: 90px;
  border-radius: 50%;
  border: 1.5px solid rgba(0,0,0,0.1);
  top: 24px; right: 28px;
}
.makhanaThumbInner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.55rem;
  position: relative;
  z-index: 1;
  padding: 0 0 1.8rem 1.8rem;
  width: 100%;
}
.mkWordmark {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 2.6rem;
  font-weight: 700;
  color: #1A1A1A;
  letter-spacing: -0.01em;
}
.makhanaThumbSub {
  font-family: var(--font-body);
  font-size: 0.5rem;
  letter-spacing: 0.2em;
  color: rgba(0,0,0,0.38);
  text-transform: uppercase;
}

/* ── boAt thumb ── */
.boatThumb {
  background: #FBF1DC;
  background-image: radial-gradient(circle, rgba(23,21,26,0.10) 1.6px, transparent 1.6px);
  background-size: 18px 18px;
  position: relative;
  overflow: hidden;
  border: 3px solid #17151A;
}
.boatThumb::before {
  content: '★';
  position: absolute; top: 18px; right: 22px;
  font-size: 1.8rem; color: #FFC933; -webkit-text-stroke: 1.5px #17151A;
  transform: rotate(10deg);
}
.boatThumbInner {
  display: flex; flex-direction: column; align-items: flex-start;
  gap: 0.55rem; position: relative; z-index: 1;
  padding: 0 0 1.8rem 1.8rem; width: 100%;
}
.boatThumbWord {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 700;
  font-size: 2.2rem; letter-spacing: -0.01em; line-height: 1; color: #17151A;
}
.boatThumbTagline {
  font-family: var(--font-script);
  font-weight: 700;
  font-size: 1.4rem;
  color: #FF4136;
  line-height: 1;
}
.boatThumbSub {
  font-family: var(--font-body);
  font-size: 0.5rem;
  letter-spacing: 0.18em; color: #17151A; opacity: 0.65; text-transform: uppercase;
  background: #FF4FA3; padding: 0.2em 0.6em; border-radius: 999px; border: 2px solid #17151A;
}

@media (max-width: 900px) {
  .projectsGrid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .projectsGrid { grid-template-columns: 1fr; }
  .pageHeader { flex-direction: column; gap: 0.5rem; padding: 2.5rem 1.5rem 1.5rem; }
  .projectsPage { padding: 2rem 1.5rem 4rem; }
}
```

Note: `.boatThumbTagline` now uses `var(--font-script)` (Caveat) instead of Baloo 2 — this is the Projects page's one signature Caveat touch, matching the spec's "one accent per page" rule.

- [ ] **Step 3: Confirm no stray references**

Run: `grep -rn "theme-clay\|Noto_Sans_Devanagari\|Space_Mono\|Baloo_2\|Space_Grotesk\|font-noto-devanagari\|font-space-mono\|font-baloo-2\|font-space-grotesk\|var(--clay)\|var(--dark)" app/projects/`
Expected: no matches.

- [ ] **Step 4: Build and lint**

Run: `npm run lint && npm run build`
Expected: both succeed once Task 1 is merged.

- [ ] **Step 5: Manual check**

Run: `npm run dev`, visit `/projects`. Confirm both project cards render with their wordmark thumbnails (no missing fonts / fallback tofu), and the page uses the same light palette as Home.

- [ ] **Step 6: Commit**

```bash
git add app/projects/page.tsx app/projects/projects.module.css
git commit -m "feat: restyle Projects page to Botanical Atelier tokens, drop theme-clay"
```

---

### Task 5: Resume (`/resume`)

**Depends on:** Task 1. (Also touches the `Footer` call site changed by Task 2 — see Step 1's note.)

**Files:**
- Modify: `app/resume/page.tsx`
- Modify: `app/resume/resume.module.css`

**Interfaces:**
- Consumes: tokens from Task 1; `<Footer />` with no props (Task 2).

- [ ] **Step 1: Rewrite the intro and meta row, drop `variant="dark"`, in `app/resume/page.tsx`**

Replace:
```tsx
        {/* INTRO */}
        <div className={styles.resumeCard}>
          <span className={styles.resumeEyebrow}>CV · MARKETING · MBA</span>
          <h2 className={styles.resumeTitle}>Monika Vaishnav</h2>
          <p className={styles.resumeText}>
            A motivated MBA (Marketing) graduate with hands-on experience in market research, consumer
            insight and go-to-market strategy, backed by strong communication, analytical and
            problem-solving skills. I turn customer understanding into effective marketing decisions, and
            I&apos;m looking for a growth-focused team where I can contribute to brand positioning and business
            growth.
          </p>
          <div className={styles.resumeMeta}>
            <span className={styles.resumeMetaItem}>📍 Bengaluru, Karnataka</span>
            <span className={styles.resumeMetaItem}>🎓 MBA — Marketing, ICFAI Business School (2027)</span>
            <span className={styles.resumeMetaItem}>💬 English · Hindi</span>
          </div>
```

With:
```tsx
        {/* INTRO */}
        <div className={styles.resumeCard}>
          <span className={styles.resumeEyebrow}>CV · MARKETING · MBA</span>
          <h2 className={styles.resumeTitle}>Monika Vaishnav</h2>
          <p className={styles.resumeText}>
            I started in pharmaceutical sciences — an M.Pharma in pharmaceutical chemistry — before
            pivoting into brand marketing through an MBA. That path gave me a research-first instinct
            most marketers don&apos;t have: I turn consumer and market data into positioning, go-to-market
            strategy, and campaigns people actually respond to. I&apos;m looking for a growth-focused team
            where I can bring that same rigour to brand building.
          </p>
          <div className={styles.resumeMeta}>
            <span className={styles.resumeMetaItem}>Bengaluru, Karnataka</span>
            <span className={styles.resumeMetaItem}>MBA — Marketing, ICFAI Business School (2027)</span>
            <span className={styles.resumeMetaItem}>English · Hindi</span>
          </div>
```

Then, near the bottom of the file, replace:
```tsx
      <Footer variant="dark" />
```

With:
```tsx
      <Footer />
```

- [ ] **Step 2: Update `app/resume/resume.module.css`**

Replace the full file with:
```css
.resumePage {
  background-color: var(--paper);
  min-height: 100%;
}

.pageHeader {
  padding: 4rem 4rem 2.5rem;
  display: flex;
  align-items: baseline;
  gap: 3rem;
}

.pageHeaderTitle { color: var(--moss); }

.pageHeaderSub {
  font-family: var(--font-text);
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  color: var(--muted);
}

.resumeMain {
  max-width: 880px;
  margin: 0 auto;
  padding: 2.5rem 4rem 5rem;
}

.resumeCard {
  background: var(--paper-alt);
  border-radius: 14px;
  padding: 2.6rem 2.8rem;
  margin-bottom: 2.2rem;
}

.resumeEyebrow {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--moss);
}

.resumeTitle {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  color: var(--ink);
  line-height: 1.1;
  margin: 0.6rem 0 0.9rem;
}

.resumeText {
  font-family: var(--font-text);
  font-size: 1.02rem;
  line-height: 1.7;
  color: var(--ink);
  max-width: 60ch;
  margin-bottom: 1.8rem;
}

.resumeMeta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1rem;
  margin: -0.4rem 0 1.6rem;
}
.resumeMetaItem {
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--ink);
  opacity: 0.75;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.resumeMetaItem + .resumeMetaItem { padding-left: 1rem; border-left: 1px solid rgba(42, 38, 32, 0.2); }

.resumeActions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 0.4rem; }

.resumeBtn {
  font-family: var(--font-body);
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.85rem 1.5rem;
  border-radius: 999px;
  background: var(--moss);
  color: var(--paper);
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
}
.resumeBtn:hover { opacity: 0.88; transform: translateY(-2px); }
.resumeBtnGhost {
  background: transparent;
  color: var(--moss);
  border: 1.5px solid var(--moss);
}

.resumeViewer {
  background: #fff;
  border: 1px solid rgba(42, 38, 32, 0.16);
  border-radius: 10px;
  overflow: hidden;
  min-height: 80vh;
}
.resumeViewer object { width: 100%; height: 80vh; display: block; }
.resumeFallback {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80vh;
  padding: 2rem;
  color: var(--muted);
  font-size: 0.98rem;
  line-height: 1.7;
}
.resumeFallback code {
  font-family: var(--font-body);
  background: var(--paper-alt);
  padding: 0.15em 0.45em;
  border-radius: 5px;
  font-size: 0.9em;
}

/* ── generic section wrapper ── */
.rsSection {
  background: var(--paper-alt);
  border-radius: 14px;
  padding: 2.4rem 2.8rem;
  margin-bottom: 1.6rem;
}

.rsSectionHead { margin-bottom: 1.5rem; }
.rsSectionTitle {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.35rem, 2.6vw, 1.7rem);
  color: var(--ink);
  line-height: 1.15;
  margin-top: 0.4rem;
}

.rsTwoUp {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}
.rsTwoUp .rsSectionHead { margin-bottom: 1.1rem; }

/* ── skills ── */
.rsSkillsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
}
.rsSkillLabel {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--moss);
  margin-bottom: 0.8rem;
}
.rsPillList { display: flex; flex-wrap: wrap; gap: 0.5rem; list-style: none; }
.rsPill {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--ink);
  background: rgba(251, 244, 236, 0.75);
  border: 1px solid rgba(42, 38, 32, 0.18);
  border-radius: 999px;
  padding: 0.4rem 0.85rem;
  line-height: 1.3;
}

/* ── experience ── */
.rsExpCard {
  background: rgba(251, 244, 236, 0.6);
  border: 1px solid rgba(42, 38, 32, 0.12);
  border-radius: 10px;
  padding: 1.6rem 1.8rem;
}
.rsExpHead {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.4rem 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed rgba(42, 38, 32, 0.2);
}
.rsExpRole {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.08rem;
  color: var(--ink);
  line-height: 1.3;
}
.rsExpOrg {
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--moss);
}
.rsExpMeta {
  font-family: var(--font-body);
  font-size: 0.76rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--ink);
  opacity: 0.7;
  white-space: nowrap;
}

/* ── generic bullet list w/ arrow marker ── */
.rsList { list-style: none; display: flex; flex-direction: column; gap: 0.7rem; }
.rsList li {
  position: relative;
  padding-left: 1.4rem;
  font-size: 0.96rem;
  line-height: 1.65;
  color: var(--ink);
}
.rsList li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--moss);
  font-weight: 600;
}
.rsList li a { color: var(--moss); font-weight: 600; text-decoration: underline; text-underline-offset: 2px; }

/* ── education ── */
.rsEduList { display: flex; flex-direction: column; }
.rsEduRow {
  display: grid;
  grid-template-columns: 6.5rem 1fr auto;
  gap: 0.4rem 1.5rem;
  align-items: baseline;
  padding: 0.9rem 0;
}
.rsEduRow + .rsEduRow { border-top: 1px solid rgba(42, 38, 32, 0.12); }
.rsEduDegree {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
  color: var(--ink);
}
.rsEduDetail { display: flex; flex-direction: column; gap: 0.15rem; }
.rsEduCourse { font-size: 0.92rem; color: var(--ink); font-weight: 500; }
.rsEduSchool { font-family: var(--font-body); font-size: 0.78rem; color: var(--ink); opacity: 0.72; }
.rsEduScore {
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--moss);
  text-align: right;
  white-space: nowrap;
}

/* ── beyond work: interests + languages ── */
.rsTagsBlock + .rsTagsBlock { margin-top: 1.5rem; }

/* ── PDF viewer intro tweak ── */
.rsPdfNote {
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--moss);
  margin-bottom: 0.8rem;
  display: block;
}

@media (max-width: 768px) {
  .resumeMain { padding: 1.5rem; }
  .resumeCard { padding: 1.8rem 1.5rem; }
  .rsSection { padding: 1.8rem 1.5rem; }
  .rsTwoUp { grid-template-columns: 1fr; gap: 2rem; }
  .rsSkillsGrid { grid-template-columns: 1fr; gap: 1.4rem; }
  .rsEduRow { grid-template-columns: 1fr; gap: 0.2rem; }
  .rsEduScore { text-align: left; }
}
```

- [ ] **Step 3: Confirm no stray references**

Run: `grep -rn "var(--tan)\|var(--maroon)\|var(--midnight)\|var(--alabaster)\|variant=\"dark\"\|📍\|🎓\|💬" app/resume/`
Expected: no matches.

- [ ] **Step 4: Build and lint**

Run: `npm run lint && npm run build`
Expected: both succeed once Tasks 1 and 2 are merged.

- [ ] **Step 5: Manual check**

Run: `npm run dev`, visit `/resume`. Confirm: the intro paragraph mentions the pharmacy → marketing pivot, the meta row shows plain text (no emoji), the page uses the light paper palette, and the footer at the bottom matches the plain `Footer` style used on Home/Projects (no dark band).

- [ ] **Step 6: Commit**

```bash
git add app/resume/page.tsx app/resume/resume.module.css
git commit -m "feat: rewrite resume intro for career pivot, drop emoji meta row, restyle to tokens"
```

---

## Final Integration Check

Once all five tasks are merged:

- [ ] Run `grep -rn "var(--blue)\|var(--clay)\|var(--dark)\|var(--light-bg)\|var(--text)\|var(--tan)\|var(--maroon)\|var(--alabaster)\|var(--lightblue)\|var(--midnight)\|var(--font-script-alt)\|theme-clay\|PortraitHero" app components` — expect zero matches.
- [ ] Run `npm run lint && npm run build` — expect both to succeed with no errors.
- [ ] Run `npm run dev` and click through `/`, `/projects`, `/resume`, and `/work/makhana/` in a browser. Confirm the three portfolio-shell pages share one consistent light palette and navbar, and Makhana's page (identity + navbar) looks completely unchanged from before this plan.
