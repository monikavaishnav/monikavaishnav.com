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
          <div className={styles.resumeActions}>
            <a href="/assets/monika-resume.pdf" className={styles.resumeBtn} target="_blank" rel="noopener">View / Download PDF&nbsp;↗</a>
            <a href="mailto:monikavaishnav.mba@gmail.com" className={`${styles.resumeBtn} ${styles.resumeBtnGhost}`}>Email me&nbsp;✉</a>
            <a href="https://www.linkedin.com/in/monikavaishnav/" className={`${styles.resumeBtn} ${styles.resumeBtnGhost}`} target="_blank" rel="noopener">LinkedIn&nbsp;↗</a>
          </div>
        </div>

        {/* SKILLS */}
        <section className={styles.rsSection}>
          <div className={styles.rsSectionHead}>
            <span className={styles.resumeEyebrow}>SKILLS</span>
            <h2 className={styles.rsSectionTitle}>What I bring to the table</h2>
          </div>
          <div className={styles.rsSkillsGrid}>
            <div>
              <p className={styles.rsSkillLabel}>Technical</p>
              <ul className={styles.rsPillList}>
                <li className={styles.rsPill}>MS Excel &amp; PowerPoint</li>
                <li className={styles.rsPill}>Power BI</li>
                <li className={styles.rsPill}>SEO, Google Ads &amp; Digital Marketing</li>
                <li className={styles.rsPill}>Social Media Marketing (Meta, Pinterest, Canva)</li>
                <li className={styles.rsPill}>Claude Code</li>
              </ul>
            </div>
            <div>
              <p className={styles.rsSkillLabel}>Non-Technical</p>
              <ul className={styles.rsPillList}>
                <li className={styles.rsPill}>Time &amp; Project Management</li>
                <li className={styles.rsPill}>Communication &amp; Storytelling</li>
                <li className={styles.rsPill}>Team Leadership &amp; Collaboration</li>
              </ul>
            </div>
            <div>
              <p className={styles.rsSkillLabel}>Strengths</p>
              <ul className={styles.rsPillList}>
                <li className={styles.rsPill}>Creative &amp; idea-driven</li>
                <li className={styles.rsPill}>Analytical &amp; research mindset</li>
                <li className={styles.rsPill}>Customer-centric thinking</li>
                <li className={styles.rsPill}>Adaptable &amp; quick learner</li>
                <li className={styles.rsPill}>Dependable under deadlines</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className={styles.rsSection}>
          <div className={styles.rsSectionHead}>
            <span className={styles.resumeEyebrow}>EXPERIENCE</span>
            <h2 className={styles.rsSectionTitle}>Summer Internship Program</h2>
          </div>
          <div className={styles.rsExpCard}>
            <div className={styles.rsExpHead}>
              <div>
                <h3 className={styles.rsExpRole}>Integrated Business Growth Strategy for Textile &amp; Consumer Sector</h3>
                <span className={styles.rsExpOrg}>Iresh Consultants</span>
              </div>
              <span className={styles.rsExpMeta}>12 Weeks (3 Months) · Bangalore</span>
            </div>
            <ul className={styles.rsList}>
              <li>Built the end-to-end go-to-market strategy for a D2C brand&apos;s premium Makhana launch, owning it from market research to a market-ready plan.</li>
              <li>Ran secondary research and primary consumer surveys, then applied the STP framework, 4P marketing mix and three product levels to define positioning and the value proposition.</li>
              <li>Turned scattered data into a single clear customer insight and converted it into concrete marketing decisions — delivering the survey findings, positioning plan and launch campaign input.</li>
              <li>Conducted market research on the Indian textile and consumer sector, sizing the market and analyzing demand trends, competition and growth opportunities, then turned it into clear growth recommendations.</li>
            </ul>
          </div>
        </section>

        {/* EDUCATION */}
        <section className={styles.rsSection}>
          <div className={styles.rsSectionHead}>
            <span className={styles.resumeEyebrow}>EDUCATION</span>
            <h2 className={styles.rsSectionTitle}>Academic Background</h2>
          </div>
          <div className={styles.rsEduList}>
            <div className={styles.rsEduRow}>
              <span className={styles.rsEduDegree}>MBA</span>
              <div className={styles.rsEduDetail}>
                <span className={styles.rsEduCourse}>B2B Marketing / BIA</span>
                <span className={styles.rsEduSchool}>ICFAI Business School, Bangalore — IFHE · 2027</span>
              </div>
              <span className={styles.rsEduScore}>8.23 CGPA</span>
            </div>
            <div className={styles.rsEduRow}>
              <span className={styles.rsEduDegree}>M. Pharma</span>
              <div className={styles.rsEduDetail}>
                <span className={styles.rsEduCourse}>Pharmaceutical Chemistry</span>
                <span className={styles.rsEduSchool}>Maharishi Arvind College of Pharmacy, Jaipur — RUHS · 2023</span>
              </div>
              <span className={styles.rsEduScore}>7.7 CGPA</span>
            </div>
            <div className={styles.rsEduRow}>
              <span className={styles.rsEduDegree}>B. Pharma</span>
              <div className={styles.rsEduDetail}>
                <span className={styles.rsEduCourse}>Pharmacy</span>
                <span className={styles.rsEduSchool}>Shree Balaji College of Pharmacy, Jaipur — RUHS · 2021</span>
              </div>
              <span className={styles.rsEduScore}>69%</span>
            </div>
            <div className={styles.rsEduRow}>
              <span className={styles.rsEduDegree}>XII</span>
              <div className={styles.rsEduDetail}>
                <span className={styles.rsEduCourse}>Bio / Science</span>
                <span className={styles.rsEduSchool}>Choudhary Public Senior Sec. School, Jaipur — RBSE · 2016</span>
              </div>
              <span className={styles.rsEduScore}>72.80%</span>
            </div>
            <div className={styles.rsEduRow}>
              <span className={styles.rsEduDegree}>X</span>
              <div className={styles.rsEduDetail}>
                <span className={styles.rsEduCourse}>&nbsp;</span>
                <span className={styles.rsEduSchool}>Choudhary Public Senior Sec. School, Jaipur — RBSE · 2014</span>
              </div>
              <span className={styles.rsEduScore}>73.50%</span>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS + OTHER PROJECTS */}
        <section className={`${styles.rsSection} ${styles.rsTwoUp}`}>
          <div>
            <div className={styles.rsSectionHead}>
              <span className={styles.resumeEyebrow}>CERTIFICATIONS</span>
              <h2 className={styles.rsSectionTitle}>Additional Qualifications</h2>
            </div>
            <ul className={styles.rsList}>
              <li>Google Digital Marketing &amp; E-commerce Professional Certificate — Coursera</li>
              <li>Power BI — IBS</li>
              <li>Bloomberg Finance Fundamentals Course Certification</li>
              <li>Meta Social Media Marketing — Coursera</li>
            </ul>
          </div>
          <div>
            <div className={styles.rsSectionHead}>
              <span className={styles.resumeEyebrow}>OTHER PROJECTS</span>
              <h2 className={styles.rsSectionTitle}>Also Built</h2>
            </div>
            <ul className={styles.rsList}>
              <li><strong>Content Marketing — Pinterest:</strong> Built and manage a Pinterest account generating 3 lakh+ monthly views through organic, SEO-driven pin content.</li>
              <li><strong><a href="/work/makhana/">Makhana Brand Campaign ↗</a>:</strong> Extended marketing campaign for the D2C Makhana brand from my SIP, building on the go-to-market strategy with content and promotion ideas.</li>
            </ul>
          </div>
        </section>

        {/* ACTIVITIES + ACHIEVEMENTS */}
        <section className={`${styles.rsSection} ${styles.rsTwoUp}`}>
          <div>
            <div className={styles.rsSectionHead}>
              <span className={styles.resumeEyebrow}>ACTIVITIES</span>
              <h2 className={styles.rsSectionTitle}>Extracurricular</h2>
            </div>
            <ul className={styles.rsList}>
              <li>Participated in the 1st International Conference on Marketing by AIMA and the ICFAI Foundation for Higher Education, Bangalore.</li>
              <li>Participated in Manthan 2025, the intra-college management fest at ICFAI Business School, Bangalore.</li>
              <li>Took part in the Marketing Launchpad at IBS Bangalore.</li>
              <li>Awarded a certificate of appreciation for active participation in Taraksh 2026 – Niti Swarajyam, ICFAI Bangalore.</li>
            </ul>
          </div>
          <div>
            <div className={styles.rsSectionHead}>
              <span className={styles.resumeEyebrow}>ACHIEVEMENTS</span>
              <h2 className={styles.rsSectionTitle}>Major Achievements</h2>
            </div>
            <ul className={styles.rsList}>
              <li>Head of the IT Club at IBS Bangalore.</li>
              <li>Represented IBS at various college-level events in Bangalore.</li>
              <li>APTICON-2018: Volunteered at the 23rd Annual National Convention of the Association of Pharmaceutical Teachers of India, Swami Keshvanand Institute of Pharmacy, Jaipur.</li>
              <li>Participated in the International Conference on &quot;Fostering High-Quality Clinical Research for a Healthier World,&quot; organized by NIMS Institute of Pharmacy, NIMS University, Jaipur.</li>
            </ul>
          </div>
        </section>

        {/* BEYOND WORK */}
        <section className={styles.rsSection}>
          <div className={styles.rsSectionHead}>
            <span className={styles.resumeEyebrow}>BEYOND WORK</span>
            <h2 className={styles.rsSectionTitle}>Interests &amp; Languages</h2>
          </div>
          <div className={styles.rsTagsBlock}>
            <p className={styles.rsSkillLabel}>Interests</p>
            <ul className={styles.rsPillList}>
              <li className={styles.rsPill}>Content Creation (blogging &amp; social media)</li>
              <li className={styles.rsPill}>Volunteering &amp; Event Organization</li>
              <li className={styles.rsPill}>Yoga &amp; Meditation</li>
              <li className={styles.rsPill}>Kathak Dance</li>
            </ul>
          </div>
          <div className={styles.rsTagsBlock}>
            <p className={styles.rsSkillLabel}>Languages</p>
            <ul className={styles.rsPillList}>
              <li className={styles.rsPill}>English — Read, Write, Speak</li>
              <li className={styles.rsPill}>Hindi — Read, Write, Speak</li>
            </ul>
          </div>
        </section>

        {/* PDF PREVIEW */}
        <span className={styles.rsPdfNote}>Original PDF</span>
        <div className={styles.resumeViewer}>
          <object data="/assets/monika-resume.pdf" type="application/pdf">
            <p className={styles.resumeFallback}>
              Your resume preview will appear here once you add your file at{" "}
              <code>public/assets/monika-resume.pdf</code>.
            </p>
          </object>
        </div>
      </main>

      <Footer />
    </div>
  );
}
