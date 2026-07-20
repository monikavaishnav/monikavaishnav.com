import type { Metadata } from "next";
import Footer from "@/components/Footer";
import GlowText from "@/components/GlowText";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About — Monika Vaishnav",
};

export default function AboutPage() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className="section-title">About</h1>
        <p className={styles.pageHeaderSub}>A little more about how I got here.</p>
      </div>

      <div className={styles.divider} />

      <main className={styles.aboutPage}>
        <div className={styles.aboutBio}>
          <p>
            <GlowText>
              I started in a field far from business — pharmaceutical sciences — which turned out to be the best thing that ever happened to my career. It gave me a curious, research-first lens, and an MBA later gave that curiosity rigour. Somewhere between consumer research and brand campaigns, I found my sweet spot: <strong>building brands that people actually feel something for.</strong>
            </GlowText>
          </p>
          <p>
            <GlowText>
              I&apos;m drawn to FMCG and fashion &amp; lifestyle brands because they live closest to culture — the best ones don&apos;t just sell products, they shift behaviours and become part of people&apos;s identities. Thanks for stopping by; I&apos;d love to make something great together.
            </GlowText>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
