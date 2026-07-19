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

          <a href="https://maka.monikavaishnav.com/" className={styles.fwCard}>
            <div className={`${styles.fwThumb} ${styles.fwThumbMaka}`}>
              <div className={styles.fwPreview}>
                <iframe src="https://maka.monikavaishnav.com/" title="Makhana Brand Launch — live preview" loading="lazy" tabIndex={-1} aria-hidden="true" />
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
