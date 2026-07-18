import type { Metadata } from "next";
import { Noto_Sans_Devanagari, Space_Mono, Baloo_2, Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import styles from "./projects.module.css";

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["700"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

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
  title: "Projects — Monika Vaishnav",
};

export default function ProjectsPage() {
  return (
    <div
      className={`theme-clay ${notoDevanagari.variable} ${spaceMono.variable} ${baloo2.variable} ${spaceGrotesk.variable}`}
    >
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
                  <div className={styles.mkLogoLockup}>
                    <div className={styles.mkLogoBar} />
                    <div className={styles.mkLogoWm}>
                      <span className={styles.mkLogoDev}>म</span><span className={styles.mkLogoLat}>aka</span>
                    </div>
                  </div>
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
                  <span className={styles.boatThumbWord}>b<span className={styles.boatThumbWordO}>O</span>At</span>
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
