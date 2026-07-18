import type { Metadata } from "next";
import Footer from "@/components/Footer";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Resume — Monika Vaishnav",
};

export default function ResumePage() {
  return (
    <div className={styles.resumePage}>
      <div className={styles.pageHeader}>
        <h1 className={`section-title ${styles.pageHeaderTitle}`}>Resume</h1>
        <p className={styles.pageHeaderSub}>A snapshot of my experience, skills, and education.</p>
      </div>

      <main className={styles.resumeMain}>
        <div className={styles.resumeCard}>
          <span className={styles.resumeEyebrow}>CV · RESUME</span>
          <h2 className={styles.resumeTitle}>Let&apos;s get to the details.</h2>
          <p className={styles.resumeText}>
            View or download my full resume below. Want a copy for your records?
            Grab the PDF, or drop me a line and I&apos;ll send it straight over.
          </p>
          <div className={styles.resumeActions}>
            <a href="/assets/monika-resume.pdf" className={styles.resumeBtn} target="_blank" rel="noopener">View / Download PDF&nbsp;↗</a>
            <a href="mailto:monikavaishnav.mba@gmail.com" className={`${styles.resumeBtn} ${styles.resumeBtnGhost}`}>Email me&nbsp;✉</a>
          </div>
        </div>

        {/* Once you add your PDF at public/assets/monika-resume.pdf it will preview here */}
        <div className={styles.resumeViewer}>
          <object data="/assets/monika-resume.pdf" type="application/pdf">
            <p className={styles.resumeFallback}>
              Your resume preview will appear here once you add your file at{" "}
              <code>public/assets/monika-resume.pdf</code>.
            </p>
          </object>
        </div>
      </main>

      <Footer variant="dark" />
    </div>
  );
}
