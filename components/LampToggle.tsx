"use client";

import { useState } from "react";
import styles from "./LampToggle.module.css";

// Clicking the pendant lamp toggles a `lamp-on` class on <body> — read by the
// portrait-hero background, the lamp's own glow/pool/bulb, and the home navbar
// (see :global(body.lamp-on) rules in this module and in Navbar.module.css).
export default function LampToggle() {
  const [on, setOn] = useState(false);

  const toggle = () => {
    const next = !on;
    setOn(next);
    document.body.classList.toggle("lamp-on", next);
  };

  return (
    <button
      className={styles.lamp}
      type="button"
      aria-label="Turn the lamp on or off"
      aria-pressed={on}
      onClick={toggle}
    >
      <svg className={styles.lampSvg} viewBox="0 0 360 470" aria-hidden="true">
        <defs>
          <linearGradient id="lampCopper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D6935B" />
            <stop offset="0.5" stopColor="#A9683B" />
            <stop offset="1" stopColor="#6E3F1E" />
          </linearGradient>
        </defs>
        {/* warm light pool cast below when on */}
        <ellipse className={styles.lampPool} cx="180" cy="300" rx="170" ry="150" />
        {/* cord from ceiling */}
        <line className={styles.lampCord} x1="180" y1="0" x2="180" y2="150" />
        {/* socket */}
        <rect className={styles.lampSocket} x="166" y="146" width="28" height="30" rx="5" />
        {/* shade: wide shallow copper cone */}
        <ellipse className={styles.lampInner} cx="180" cy="256" rx="150" ry="26" />
        <path className={styles.lampShade} d="M30 256 Q180 150 330 256 Q180 232 30 256 Z" />
        <path className={styles.lampRim} d="M30 256 Q180 280 330 256" />
        {/* bulb + glow */}
        <circle className={styles.lampGlow} cx="180" cy="286" r="40" />
        <circle className={styles.lampBulb} cx="180" cy="282" r="15" />
      </svg>
      <span className={styles.lampHint}>click me ✦</span>
    </button>
  );
}
