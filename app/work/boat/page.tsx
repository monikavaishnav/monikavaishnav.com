import type { Metadata } from "next";
import { Baloo_2, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import VolumeReveal from "./VolumeReveal";
import styles from "./boat.module.css";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo-2",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "boAt — Found in the Quiet · Campaign Analysis",
};

export default function BoatCaseStudyPage() {
  return (
    <div className={`${styles["boat-page"]} ${baloo2.variable} ${spaceGrotesk.variable}`}>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className={styles["bt-hero"]}>
        <div className={styles["bt-hero-left"]}>
          <div className={styles["bt-hero-eyebrow"]}>Campaign Analysis — Self-Initiated Project</div>
          <div className={`${styles["bt-word"]} ${styles["bt-hero-word"]}`}>
            <span className={styles["bt-b"]}>b</span>
            <span className={styles["bt-o"]}>O</span>
            <span className={styles["bt-at"]}>At</span>
          </div>
          <h1 className={styles["bt-hero-title"]}>
            <span className={styles["bt-hero-kicker"]}>shh.</span>
            FOUND IN
            <br />
            <span className={styles.accent}>THE QUIET.</span>
          </h1>
        </div>
        <div className={styles["bt-hero-right"]}>
          <p className={styles["bt-hero-lede"]}>
            boAt shouts louder than everyone. So why doesn&apos;t it stick? Here&apos;s the tea — what it&apos;s
            actually saying, what&apos;s missing, and the one move that hits <em>different.</em>
          </p>
          <div className={styles["bt-meta-row"]}>
            <div className={styles["bt-meta-item"]}>
              <span className={styles["bt-meta-k"]}>Discipline</span>
              <span className={styles["bt-meta-v"]}>Brand &amp; Campaign</span>
            </div>
            <div className={styles["bt-meta-item"]}>
              <span className={styles["bt-meta-k"]}>Focus</span>
              <span className={styles["bt-meta-v"]}>Analysis · Insight · Idea</span>
            </div>
            <div className={styles["bt-meta-item"]}>
              <span className={styles["bt-meta-k"]}>Format</span>
              <span className={styles["bt-meta-v"]}>Campaign Analysis</span>
            </div>
          </div>
        </div>
        <div className={`${styles["bt-doodle"]} ${styles["d-hero-buds"]}`} aria-hidden="true">
          <svg viewBox="0 0 100 100">
            <circle cx="32" cy="34" r="14" />
            <path d="M30 47 q-2 20 4 34" />
            <circle cx="72" cy="34" r="14" />
            <path d="M74 47 q2 20 -4 34" />
          </svg>
        </div>
      </section>

      {/* ═══════════════ ① TURN IT UP ═══════════════ */}
      <section className={styles["bt-section"]}>
        <span className={`${styles["bt-scribble"]} ${styles["s-over"]}`}>full blast ✦</span>
        <div className={styles["bt-label"]}>
          <span className={styles["ca-num"]}>01</span> &nbsp;Turn It Up
        </div>
        <h2 className={styles["bt-overview-title"]}>
          The loudest brand,
          <br />
          period.
        </h2>
        <p className={styles["bt-overview-lede"]}>
          boAt doesn&apos;t do ads. It does <span className={styles.hl}>drops</span> — cricket, music, festivals, a
          wall of creators, all stamped <b>#PlayWithBoldness</b>. The product&apos;s kind of an
          afterthought. <b>The vibe is the whole pitch.</b> One goal here: volume.
        </p>

        <div className={styles["bt-pills"]}>
          <span className={styles["bt-pill"]}>Lifestyle-First</span>
          <span className={styles["bt-pill"]}>#PlayWithBoldness</span>
          <span className={styles["bt-pill"]}>Creator-Led</span>
          <span className={styles["bt-pill"]}>Main Character Energy</span>
          <span className={styles["bt-pill"]}>No Cap</span>
        </div>

        {/* the loud machine, visualised */}
        <div className={styles["ca-eq"]} aria-hidden="true">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>

        <div className={styles["bt-stats"]}>
          <div className={styles["bt-stat"]}>
            <div className={styles["bt-stat-num"]}>#1</div>
            <div className={styles["bt-stat-label"]}>in audio, no contest</div>
          </div>
          <div className={styles["bt-stat"]}>
            <div className={styles["bt-stat-num"]}>₹500–5K</div>
            <div className={styles["bt-stat-label"]}>the price zone it owns</div>
          </div>
          <div className={styles["bt-stat"]}>
            <div className={styles["bt-stat-num"]}>Creators</div>
            <div className={styles["bt-stat-label"]}>&gt; ads, every time</div>
          </div>
          <div className={styles["bt-stat"]}>
            <div className={styles["bt-stat-num"]}>boAthead</div>
            <div className={styles["bt-stat-label"]}>fanbase = megaphone</div>
          </div>
        </div>
        <p className={styles["bt-moodboard-caption"]}>
          Got a specific <span className={styles.fill}>‹ boAt drop ›</span> in mind? Swap it in here — the read
          stays the same either way.
        </p>
      </section>

      {/* ═══════════════ ② THE DEAD AIR ═══════════════ */}
      <section className={styles["bt-section"]}>
        <div className={`${styles["bt-doodle"]} ${styles["d-camp-bolt"]}`} aria-hidden="true">
          <svg viewBox="0 0 70 90">
            <path d="M46 6 L20 52 L38 52 L26 86 L62 38 L42 38 Z" />
          </svg>
        </div>
        <div className={styles["bt-label"]}>
          <span className={styles["ca-num"]}>02</span> &nbsp;The Dead Air
        </div>
        <h2 className={styles["bt-h2"]}>
          Loud everywhere.
          <br />
          Felt <em>nowhere.</em>
        </h2>
        <p className={styles["bt-lead"]}>
          Crank the volume enough and it stops meaning anything. boAt wins the scroll,
          loses the memory. Peaks, then flatlines.
        </p>

        {/* waveform → flatline */}
        <div className={styles["ca-wave-card"]}>
          <svg className={styles["ca-wave"]} viewBox="0 0 800 120" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 60 L40 60 L60 20 L80 100 L100 30 L120 90 L140 25 L160 95 L180 40 L200 80 L220 35 L240 60 L280 60" />
            <path className={styles.flat} d="M280 60 L800 60" />
          </svg>
        </div>

        <div className={styles["bt-split"]}>
          <div className={styles["bt-say-col"]}>
            <div className={styles["bt-say-head"]}>What boAt always nails</div>
            <ul className={styles["bt-say-list"]}>
              <li>You clock it&apos;s boAt in half a second.</li>
              <li>Creators do the heavy lifting.</li>
              <li>Always on the trend train.</li>
              <li>Doesn&apos;t feel like an ad.</li>
            </ul>
          </div>
          <div className={`${styles["bt-say-col"]} ${styles["is-hear"]}`}>
            <div className={styles["bt-say-head"]}>What none of it says</div>
            <ul className={styles["bt-say-list"]}>
              <li>Nothing that actually hits.</li>
              <li>How it feels to listen alone, at night.</li>
              <li>
                A feeling that&apos;s <em>only</em> theirs.
              </li>
              <li>A reason to remember it tomorrow.</li>
            </ul>
          </div>
        </div>

        <div className={styles["ca-insight"]}>
          <div className={styles["ca-insight-k"]}>The gap, in two words</div>
          <p className={styles["ca-insight-line"]}>
            Loud <span className={styles.accent}>≠</span> memorable.
          </p>
        </div>
      </section>

      {/* ═══════════════ ③ A NEW FREQUENCY ═══════════════ */}
      <section className={styles["bt-section"]}>
        <div className={styles["bt-label"]}>
          <span className={styles["ca-num"]}>03</span> &nbsp;A New Frequency
        </div>
        <h2 className={styles["bt-h2"]}>
          One move:
          <br />
          own 3AM.
        </h2>
        <p className={styles["bt-lead"]}>
          The fix isn&apos;t louder. It&apos;s <b>quieter</b>. Everyone talks about concerts —
          nobody talks about 3AM, when it&apos;s just you and your earbuds. Claim that.
        </p>

        {/* the tonal shift — a quiet night inside the loud brand, now something you turn down yourself */}
        <VolumeReveal />

        <div className={styles["ca-why"]}>
          <div className={styles["ca-why-card"]}>
            <div className={styles["ca-why-n"]}>01</div>
            <h4>Free real estate</h4>
            <p>Nobody&apos;s claimed 3AM. Everyone else is fighting over the concert.</p>
          </div>
          <div className={styles["ca-why-card"]}>
            <div className={styles["ca-why-n"]}>02</div>
            <h4>Actually makes you feel</h4>
            <p>First boAt idea that hits instead of just plays.</p>
          </div>
          <div className={styles["ca-why-card"]}>
            <div className={styles["ca-why-n"]}>03</div>
            <h4>The audience builds it</h4>
            <p>One playlist, infinite adds. Free content, forever.</p>
          </div>
          <div className={styles["ca-why-card"]}>
            <div className={styles["ca-why-n"]}>04</div>
            <h4>Zero budget needed</h4>
            <p>Just a black screen and a question. Founders love this math.</p>
          </div>
        </div>

        <div className={styles["ca-signoff"]}>
          <span className={styles["ca-anchor"]} aria-hidden="true">
            <svg viewBox="0 0 100 110">
              <circle cx="50" cy="15" r="8" />
              <line x1="50" y1="23" x2="50" y2="94" />
              <line x1="33" y1="40" x2="67" y2="40" />
              <path d="M22 66 q0 30 28 30 q28 0 28 -30" />
              <path d="M22 66 l-8 6 M22 66 l10 4 M78 66 l8 6 M78 66 l-10 4" />
            </svg>
          </span>
          <span>Found in the quiet. People finally lean in.</span>
        </div>
      </section>

      {/* ═══════════════ ④ THE RECEIPTS ═══════════════ */}
      <section className={styles["bt-section"]}>
        {/* doodle: comic speech bubble with a sound squiggle */}
        <div className={styles["ca-bubble-doodle"]} aria-hidden="true">
          <svg viewBox="0 0 100 84">
            <path d="M6 8 h88 a4 4 0 0 1 4 4 v42 a4 4 0 0 1 -4 4 h-56 l-14 18 v-18 h-18 a4 4 0 0 1 -4 -4 v-42 a4 4 0 0 1 4 -4 z" />
            <polyline points="18,32 28,20 38,44 48,14 58,38 68,24 80,32" />
          </svg>
        </div>
        <div className={styles["bt-label"]}>
          <span className={styles["ca-num"]}>04</span> &nbsp;The Receipts
        </div>
        <h2 className={styles["bt-h2"]}>
          If this actually
          <br />
          dropped.
        </h2>
        <p className={styles["bt-lead"]}>Mock reactions — the kind of comments this idea would pull if it went live.</p>
        <div className={styles["ca-dm-grid"]}>
          <div className={styles["ca-dm-card"]}>
            <span className={styles["ca-dm-avatar"]}>S</span>
            <div>
              <span className={styles["ca-dm-handle"]}>@studygrind_</span>
              <p>wait the 3am thing is actually kinda healing 😭</p>
            </div>
          </div>
          <div className={styles["ca-dm-card"]}>
            <span className={styles["ca-dm-avatar"]}>J</span>
            <div>
              <span className={styles["ca-dm-handle"]}>@insomniac.jas</span>
              <p>no bc why did I relate to this so hard</p>
            </div>
          </div>
          <div className={styles["ca-dm-card"]}>
            <span className={styles["ca-dm-avatar"]}>R</span>
            <div>
              <span className={styles["ca-dm-handle"]}>@lo.fi.rot</span>
              <p>screenshotting this playlist rn, not kidding</p>
            </div>
          </div>
          <div className={styles["ca-dm-card"]}>
            <span className={styles["ca-dm-avatar"]}>D</span>
            <div>
              <span className={styles["ca-dm-handle"]}>@nightowl_dev</span>
              <p>boAt finally gets it. this is so real for me</p>
            </div>
          </div>
          <div className={styles["ca-dm-card"]}>
            <span className={styles["ca-dm-avatar"]}>T</span>
            <div>
              <span className={styles["ca-dm-handle"]}>@3am.thoughts</span>
              <p>better than every energy drink ad combined</p>
            </div>
          </div>
          <div className={styles["ca-dm-card"]}>
            <span className={styles["ca-dm-avatar"]}>Q</span>
            <div>
              <span className={styles["ca-dm-handle"]}>@quietkid</span>
              <p>adding this to my FYP immediately, no debate</p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <p className={styles["bt-disclaimer"]}>
        An independent, educational campaign analysis created for portfolio purposes. boAt, the
        &ldquo;bOAt&rdquo; wordmark and anchor mark are trademarks of Imagine Marketing Ltd; recreated here as
        illustrations for analysis only. Not affiliated with or endorsed by the brand. Fields marked
        with a dashed underline are placeholders for real campaign specifics.
      </p>

      {/* FOOTER */}
      <footer className={styles["bt-footer"]}>
        <Link href="/projects" className={styles["bt-back"]}>
          ← Back to Projects
        </Link>
        <span>© 2026 Monika Vaishnav</span>
      </footer>
    </div>
  );
}
