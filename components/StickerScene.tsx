"use client";

import { useState } from "react";
import styles from "./StickerScene.module.css";

const STICKERS = [
  { key: "camera", href: "#work", cls: "stickerCamera", img: "/assets/sticker-camera.png", alt: "Works", label: "Works" },
  { key: "sunflowers", href: "#about", cls: "stickerSunflowers", img: "/assets/sticker-sunflowers.png", alt: "About me", label: "About Me" },
  { key: "journal", href: "/resume", cls: "stickerJournal", img: "/assets/sticker-journal.png", alt: "Resume", label: "Resume" },
  { key: "telephone", href: "#connect", cls: "stickerTelephone", img: "/assets/sticker-telephone.png", alt: "Let's connect", label: "Let's Connect" },
] as const;

// Click the portrait to pop the stickers out from behind it, with a quick
// squash-and-bounce replay on the portrait itself each time.
export default function StickerScene() {
  const [popped, setPopped] = useState(false);
  const [bounceKey, setBounceKey] = useState(0);

  const handleClick = () => {
    setPopped((p) => !p);
    setBounceKey((k) => k + 1);
  };

  return (
    <div className={`${styles.stickerScene} ${popped ? styles.popped : ""}`}>
      <img
        key={bounceKey}
        src="/assets/portrait-sticker.png"
        alt="Monika Vaishnav"
        className={`${styles.portraitImg} ${styles.bounce}`}
        onClick={handleClick}
      />
      {STICKERS.map((s) => (
        <a key={s.key} href={s.href} className={`${styles.sticker} ${styles[s.cls]}`}>
          <img src={s.img} alt={s.alt} />
          <span className={styles.stickerLabel}>{s.label}</span>
        </a>
      ))}
    </div>
  );
}
