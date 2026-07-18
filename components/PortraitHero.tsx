"use client";

import { useRef, useState } from "react";
import styles from "./PortraitHero.module.css";

export default function PortraitHero() {
  const [lampOn, setLampOn] = useState(false);
  const [popped, setPopped] = useState(false);
  const portraitRef = useRef<HTMLImageElement>(null);

  const toggleLamp = () => {
    setLampOn((on) => {
      const next = !on;
      document.body.classList.toggle("lamp-on", next);
      return next;
    });
  };

  const handlePortraitClick = () => {
    setPopped((p) => !p);
    const img = portraitRef.current;
    if (img) {
      img.classList.remove(styles.bounce);
      void img.offsetWidth; // force reflow so the animation can replay
      img.classList.add(styles.bounce);
    }
  };

  return (
    <section className={`${styles.portraitHero} ${lampOn ? styles.lampOn : ""}`}>

      <div className={styles.greeting}>
        <svg className={`${styles.doodle} ${styles.doodleSpark}`} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C13 8 16 11 24 12 16 13 13 16 12 24 11 16 8 13 0 12 8 11 11 8 12 0Z" /></svg>
        <svg className={`${styles.doodle} ${styles.doodleStar}`} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1l3 7 7 .5-5.5 4.5 2 7-6.5-4-6.5 4 2-7L2 8.5 9 8z" /></svg>
        <svg className={`${styles.doodle} ${styles.doodleHeart}`} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-9-6.7-9-12.7A4.3 4.3 0 0 1 12 6a4.3 4.3 0 0 1 9 2.3C21 14.3 12 21 12 21z" /></svg>
        <svg className={`${styles.doodle} ${styles.doodleSwirl}`} viewBox="0 0 120 20" aria-hidden="true"><path d="M2 12 Q30 -4 60 10 T118 8" fill="none" strokeWidth="3" strokeLinecap="round" /></svg>
        <svg className={`${styles.doodle} ${styles.doodleArrow}`} viewBox="0 0 60 60" aria-hidden="true">
          <path d="M8 6 Q44 8 40 44" fill="none" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 44 l-9 -6 M40 44 l7 -8" fill="none" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <p className={styles.hi}>Hi, I am Monika</p>
        <h1 className={styles.tag}><span>I dream.</span> <span>design.</span> <span>deliver.</span></h1>
      </div>

      <button
        className={styles.lamp}
        type="button"
        aria-label="Turn the lamp on or off"
        aria-pressed={lampOn}
        onClick={toggleLamp}
      >
        <svg className={styles.lampSvg} viewBox="0 0 360 470" aria-hidden="true">
          <defs>
            <linearGradient id="lampCopper" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#D6935B" />
              <stop offset="0.5" stopColor="#A9683B" />
              <stop offset="1" stopColor="#6E3F1E" />
            </linearGradient>
          </defs>
          <ellipse className={styles.lampPool} cx="180" cy="300" rx="170" ry="150" />
          <line className={styles.lampCord} x1="180" y1="0" x2="180" y2="150" />
          <rect className={styles.lampSocket} x="166" y="146" width="28" height="30" rx="5" />
          <ellipse className={styles.lampInner} cx="180" cy="256" rx="150" ry="26" />
          <path className={styles.lampShade} d="M30 256 Q180 150 330 256 Q180 232 30 256 Z" />
          <path className={styles.lampRim} d="M30 256 Q180 280 330 256" />
          <circle className={styles.lampGlow} cx="180" cy="286" r="40" />
          <circle className={styles.lampBulb} cx="180" cy="282" r="15" />
        </svg>
        <span className={styles.lampHint}>click me ✦</span>
      </button>

      <div className={`${styles.stickerScene} ${popped ? styles.popped : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={portraitRef}
          src="/assets/portrait-sticker.png"
          alt="Monika Vaishnav"
          className={styles.portraitImg}
          onClick={handlePortraitClick}
          onAnimationEnd={() => portraitRef.current?.classList.remove(styles.bounce)}
        />

        <a href="#work" className={`${styles.sticker} ${styles.stickerCamera}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/sticker-camera.png" alt="Works" />
          <span className={styles.stickerLabel}>Works</span>
        </a>
        <a href="#about" className={`${styles.sticker} ${styles.stickerSunflowers}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/sticker-sunflowers.png" alt="About me" />
          <span className={styles.stickerLabel}>About Me</span>
        </a>
        <a href="/resume/" className={`${styles.sticker} ${styles.stickerJournal}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/sticker-journal.png" alt="Resume" />
          <span className={styles.stickerLabel}>Resume</span>
        </a>
        <a href="#connect" className={`${styles.sticker} ${styles.stickerTelephone}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/sticker-telephone.png" alt="Let's connect" />
          <span className={styles.stickerLabel}>Let&apos;s Connect</span>
        </a>
      </div>
    </section>
  );
}
