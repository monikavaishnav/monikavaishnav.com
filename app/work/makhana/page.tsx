import type { Metadata } from "next";
import { Space_Mono, Noto_Sans_Devanagari } from "next/font/google";
import FlavoursSection from "./FlavoursSection";
import styles from "./makhana.module.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["700"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Makhana — Healthy Snacking Campaign",
};

export default function MakhanaPage() {
  return (
    <div className={`${styles.page} ${spaceMono.variable} ${notoDevanagari.variable}`}>

      {/* ① HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBrand}>
          <div className={styles.logoLockup}>
            <div className={styles.logoBar} />
            <div className={styles.logoWm}>
              <span className={styles.logoDev}>म</span><span className={styles.logoLat}>aka</span>
            </div>
          </div>
        </div>
        <div className={styles.heroEyebrow}>GTM CAMPAIGN — INTERNSHIP PROJECT</div>
        <h1 className={styles.heroTitle}>
          SNACK<br />
          <span className={styles.heroAccent}>SMART.</span><br />
          SNACK<br />
          BOLD.
        </h1>
        <div className={styles.heroRight}>
          <p className={styles.heroTaglineBig}>Eat without<br />the apology.</p>
          <p className={styles.heroTagline}>Introducing India&apos;s favourite fox nut — reimagined for the modern health-conscious snacker.</p>
          <div className={styles.badgeRow}>
            <span className={styles.badge}>HIGH PROTEIN</span>
            <span className={styles.badge}>LOW CALORIE</span>
            <span className={styles.badge}>GLUTEN FREE</span>
          </div>
          <a href="#buy" className={styles.ctaBtn}>SHOP NOW →</a>
        </div>
        <div className={styles.scrollHint}>SCROLL ↓</div>
      </section>

      {/* ② WHAT IS MAKHANA */}
      <section className={styles.what}>
        <div className={styles.whatLabel}>THE PRODUCT</div>
        <div className={styles.whatVideoWrap}>
          <video className={styles.whatVideo} autoPlay muted loop playsInline>
            <source src="/assets/maka-brand-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.whatGrid}>
          <h2 className={styles.whatTitle}>ANCIENT<br />GRAIN.<br />MODERN<br />CRUNCH.</h2>
          <div className={styles.whatBody}>
            <p>Makhana — also known as fox nuts or lotus seeds — have been a staple of Indian wellness traditions for centuries. Grown in the freshwater lakes of Bihar, they&apos;re naturally light, airy, and packed with goodness.</p>
            <p>We took this time-tested superfood and gave it a bold new identity: roasted, seasoned, and packed in flavours that actually excite you — because healthy snacking should never feel like a compromise.</p>
            <div className={styles.statRow}>
              <div className={styles.stat}>
                <span className={styles.statNum}>4G</span>
                <span className={styles.statLabel}>PROTEIN PER SERVING</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>90</span>
                <span className={styles.statLabel}>CALORIES PER BAG</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>0G</span>
                <span className={styles.statLabel}>TRANS FAT</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>NATURAL INGREDIENTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ③ BENEFITS */}
      <section className={styles.benefits}>
        <div className={styles.benefitsHeader}>
          <div className={styles.whatLabel}>WHY MAKHANA</div>
          <h2 className={styles.benefitsTitle}>GOOD FOR YOU.<br />GREAT FOR YOUR CRAVINGS.</h2>
        </div>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>◈</div>
            <h3>HIGH PROTEIN</h3>
            <p>More protein per gram than most packaged snacks — keeps you fuller for longer without the guilt.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>◉</div>
            <h3>LOW GLYCAEMIC</h3>
            <p>Won&apos;t spike your blood sugar. Perfect for diabetics, fitness enthusiasts, and mindful eaters alike.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>◫</div>
            <h3>ANTIOXIDANT RICH</h3>
            <p>Loaded with kaempferol — a natural flavonoid with anti-inflammatory and anti-ageing properties.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>◬</div>
            <h3>LIGHT &amp; CRUNCHY</h3>
            <p>Air-popped, not fried. The satisfying crunch you crave without the oil and grease of regular snacks.</p>
          </div>
        </div>
      </section>

      {/* PROBLEM / APPROACH / OUTCOME */}
      <section className={styles.par}>
        <div className={styles.whatLabel}>THE WORK</div>
        <div className={styles.parGrid}>
          <div className={styles.parItem}>
            <span className={styles.parPill}>Problem</span>
            <p className={styles.parBody}>Makhana was stuck in &quot;diet food&quot; territory — seen as a compromise for weight-watchers, not a bold choice for confident snackers. The category lacked a voice that spoke to urban Indian millennials who wanted guilt-free snacking that actually felt exciting.</p>
          </div>
          <div className={styles.parItem}>
            <span className={styles.parPill}>Approach</span>
            <p className={styles.parBody}>Repositioned makhana from dietary substitute to bold lifestyle snack. Built मaka — a brand identity fusing Indian heritage with modern confidence. Designed a D2C-first GTM: quick commerce launch (Blinkit / Zepto), micro-influencer seeding across fitness and foodie communities, and social-native creative built around an unapologetic snacking attitude.</p>
          </div>
          <div className={styles.parItem}>
            <span className={styles.parPill}>Outcome</span>
            <p className={styles.parBody}>A complete brand system — name, identity, voice, and visual language. A phased GTM roadmap with channel strategy, influencer brief, and D2C landing experience. Campaign platform &quot;Snack Smart. Snack Bold.&quot; designed to flex across digital, retail, and experiential touchpoints.</p>
          </div>
        </div>
      </section>

      {/* ④ FLAVOURS */}
      <FlavoursSection />

      {/* ⑤ CAMPAIGN STORY */}
      <section className={styles.campaign}>
        <div className={styles.campaignInner}>
          <div className={`${styles.whatLabel} ${styles.labelLight}`}>BEHIND THE WORK</div>
          <h2 className={styles.campaignTitle}>THE GTM<br />STRATEGY</h2>
          <div className={styles.campaignGrid}>
            <div className={styles.campaignStep}>
              <span className={styles.stepNum}>01</span>
              <h3>MARKET RESEARCH</h3>
              <p>Mapped the competitive landscape of India&apos;s ₹30,000 Cr healthy snacking market. Identified a white space: premium, flavour-forward makhana targeting urban millennials aged 22–35.</p>
            </div>
            <div className={styles.campaignStep}>
              <span className={styles.stepNum}>02</span>
              <h3>POSITIONING</h3>
              <p>Repositioned makhana from a &quot;diet food&quot; to a &quot;bold lifestyle snack.&quot; The brief: make it feel as exciting as a bag of chips, with none of the compromise. Brand voice: confident, witty, unapologetic.</p>
            </div>
            <div className={styles.campaignStep}>
              <span className={styles.stepNum}>03</span>
              <h3>CAMPAIGN CONCEPT</h3>
              <p>&quot;Snack Smart. Snack Bold.&quot; — a campaign built around reclaiming snacking as a power move, not a guilty pleasure. Hero assets included digital-first content, influencer briefs, and D2C landing experience.</p>
            </div>
            <div className={styles.campaignStep}>
              <span className={styles.stepNum}>04</span>
              <h3>CHANNEL STRATEGY</h3>
              <p>Led D2C-first rollout via Instagram + quick commerce (Blinkit/Zepto), followed by retail distribution. Micro-influencer seeding in fitness, wellness, and foodie communities drove initial awareness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ CTA / BUY */}
      <section className={styles.buy} id="buy">
        <h2 className={styles.buyTitle}>READY TO<br />SNACK BOLD?</h2>
        <p className={styles.buySub}>Available online and at select stores across India.</p>
        <div className={styles.buyBtns}>
          <a href="#" className={styles.ctaBtn}>ORDER ONLINE →</a>
          <a href="#" className={styles.ctaOutline}>FIND A STORE</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <a href="/projects/" className={styles.back}>← BACK TO PROJECTS</a>
        <span>© 2026 MONIKA VAISHNAV</span>
      </footer>
    </div>
  );
}
