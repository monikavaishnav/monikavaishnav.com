# Portfolio Revamp — "Botanical Atelier" Design Spec

## Goal

Revamp monikavaishnav.com to read as professional to both recruiters and freelance/consulting clients, while keeping the site's creative design elements and creative copywriting — not replacing the personal-brand warmth with a generic corporate look.

## Scope

**In scope — the portfolio shell:**
- Home (`app/page.tsx`, `home.module.css`, `PortraitHero`, `SkillsRotator`, `GlowText`)
- Projects (`app/projects/page.tsx`)
- Resume (`app/resume/page.tsx`)
- Shared chrome: `Navbar`, `Footer`
- Sitewide design tokens (`app/globals.css`)

**Explicitly out of scope:**
- Makhana case study (`app/work/makhana/**`) — separate branded project, keeps its own Space Mono / Devanagari identity and Gen-Z-adjacent-free copy voice untouched
- boAt case study (`app/work/boat/**`) — separate branded project, keeps its own Baloo 2 identity and voice untouched
- Product detail pages under `/work/makhana/products/[id]`

The only shared touchpoint with the case studies is `Navbar`. Makhana's `navMakhana` variant is left as-is. boAt currently has no navbar override (falls through to the default), so it will inherit the new default navbar styling — but no boAt page content is touched.

## Direction: Botanical Atelier

Chosen after two rounds of visual review (see `.lavish/design-directions.html` history). Closest in spirit to the current site — a light, warm, botanical/personal aesthetic — but edited down: one signature motif instead of scattered decoration, one accent color family instead of five per-page themes, the handwritten voice used as a deliberate accent rather than the whole intro.

### Design tokens

**Palette**
| Token | Hex | Use |
|---|---|---|
| paper | `#FBF4EC` | Background |
| ink | `#2A2620` | Text |
| moss | `#5C6B4E` | Secondary accent |
| blush | `#E8A798` | Secondary accent |
| gold | `#C9A25E` | Hairline accent, dividers, frame lines |

This replaces the current 6-color, 5-per-page-theme system (`--blue`, `--clay`, `--maroon`, `--tan`, `--lightblue`, `--midnight` and `.theme-clay`).

**Typography**
- Display / headlines: Fraunces italic (kept from current site)
- Body copy: Lora (kept)
- UI / tags / labels: Inter (kept)
- Signature accent: Caveat — used once per page as a deliberate touch (e.g. a small handwritten aside), never as a whole section's voice

This retires: Dancing Script, Noto Sans Devanagari, Space Mono, Baloo 2, and Space Grotesk from the portfolio-shell pages (Projects currently loads all four of the latter for no functional reason).

**Motifs**
- One refined gold-hairline botanical mark, replacing the multiple hand-drawn flower-sprig SVGs currently scattered across the home page
- A thin gold-line photo frame, replacing the "stamp" + washi-tape-corner frame style
- The marker-style glow-text highlight (`GlowText` component) is kept, but used once per page as a signature moment rather than wrapping large blocks of copy

## Problems found in the current code (fixed regardless of direction)

1. **Home page runs two competing intros back-to-back.** `PortraitHero` (lamp-toggle interaction, sticker scene, "Hi, I am Monika" / "I dream. design. deliver.") renders immediately above the `introHero` section ("Hi! ...and this is my brand." + full bio). Same job, done twice, in two different voices.
2. **Per-page navbar re-theming.** `Navbar.tsx` swaps color variants by route (`navHome`, `navResume`, `navClay`, `navMakhana`) — the one piece of chrome that should look identical everywhere currently doesn't, within the portfolio shell.
3. **Resume doesn't mention the career pivot.** The pharmacy → marketing MBA story is the most distinctive thing in Monika's background and currently only appears on the home page, not on `/resume` where a recruiter is most likely to look for it.

## Resolved decisions

1. **Home hero:** Merge `PortraitHero` and `introHero` into a single hero section. The lamp-toggle/sticker-scene interaction is removed. The merged hero carries the photo-forward layout and bio content from `introHero`, restyled to the new tokens, trimmed from five paragraphs to roughly two.
2. **Resume tone:** The emoji meta-row (📍 Bengaluru, 🎓 MBA, 💬 languages) is replaced with plain text labels or line icons — more conservative and safe for a resume that may be screenshotted or forwarded.

## Page-by-page plan

### Home (`/`)
- **Keep:** photo-forward layout; Skills, Featured Work, Social, Contact section structure; warm first-person voice as the throughline
- **Change:** merge the two heroes per the resolved decision above; trim bio copy; restyle photo frames, cards, and highlights to the new tokens; `SkillsRotator` restyled only (no logic change)

### Projects (`/projects`)
- **Keep:** grid layout, two-project structure, tag/title/description/link card shape
- **Change:** drop `theme-clay` and its four extra fonts, inherit sitewide tokens; restyle card thumbnails to the gold-line frame

### Resume (`/resume`)
- **Keep:** full information density (skills, experience, education, certifications, activities); PDF download + inline preview
- **Change:** intro paragraph rewritten to include the pharmacy → marketing pivot; restyle cards/pills to new tokens; emoji meta-row dropped per resolved decision

### Navbar / Footer
- Single consistent light styling across Home, Projects, Resume (and by fallthrough, boAt)
- Makhana's distinct navbar variant is preserved untouched

## Phased rollout

1. **Foundation** — new design tokens in `globals.css`; Navbar/Footer unified (Makhana variant preserved); unused fonts retired from portfolio-shell pages
2. **Home** — hero merge, copy tightened, cards/frames restyled
3. **Projects + Resume** — restyled to tokens, resume intro rewritten, emoji meta-row replaced

Each phase should be independently reviewable (e.g. as a screenshot or local preview) before moving to the next.

## Open questions

None remaining — both decisions above are resolved and the case-study exclusion is confirmed.
