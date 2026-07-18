"use client";

import { useState } from "react";
import styles from "./boat.module.css";

function speakNirvana() {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance("Plug into nirvana.");
  u.rate = 0.92;
  u.pitch = 0.85;
  window.speechSynthesis.speak(u);
}

export default function VolumeReveal() {
  const [volume, setVolume] = useState(100);

  return (
    <>
      <div className={styles["ca-3am"]}>
        <div className={styles["ca-hush"]}>
          <span className={styles["ca-3am-moon"]}>🌙</span>
          <p className={styles["ca-3am-kicker"]}>the move —</p>
          <h3 className={styles["ca-3am-line"]}>
            boAt claims the hour <span className={styles.accent}>nobody owns.</span>
          </h3>
          <p>
            One quiet question on a black screen: <em>&quot;what are you listening to at 3AM?&quot;</em>{" "}
            That&apos;s the whole opener. It grows into a living <b>#3AMPlaylist</b> people actually
            add to. Not a louder drop — a deeper one.
          </p>
          <div className={styles["ca-hashtags"]}>
            <span className={styles["ca-hash"]}>#3AMPlaylist</span>
            <span className={styles["ca-hash"]}>#BornToBoAt</span>
            <span className={styles["ca-hash"]}>#LateNightLoFi</span>
            <span className={styles["ca-hash"]}>#IYKYK</span>
          </div>
          <button className={styles["ca-vo-btn"]} type="button" onClick={speakNirvana}>
            🔈 Plug into nirvana
          </button>

          {/* the tie-in product — grounds the idea in a real boAt line */}
          <div className={styles["ca-asset"]}>
            <span className={`${styles["ca-anchor"]} ${styles["ca-asset-anchor"]}`} aria-hidden="true">
              <svg viewBox="0 0 100 110">
                <circle cx="50" cy="15" r="8" />
                <line x1="50" y1="23" x2="50" y2="94" />
                <line x1="33" y1="40" x2="67" y2="40" />
                <path d="M22 66 q0 30 28 30 q28 0 28 -30" />
                <path d="M22 66 l-8 6 M22 66 l10 4 M78 66 l8 6 M78 66 l-10 4" />
              </svg>
            </span>
            <div>
              <span className={styles["ca-asset-tag"]}>Limited Drop</span>
              <div className={styles["ca-asset-name"]}>
                Airdopes <span className={styles.accent}>3AM Edition</span>
              </div>
              <p className={styles["ca-asset-sub"]}>
                Matte navy shell, amber LED glow, engraved &quot;what are you listening to at 3AM?&quot; on
                the case. Same buds. Different hour.
              </p>
            </div>
          </div>
        </div>

        <div className={styles["ca-loud"]} style={{ opacity: volume / 100 }} aria-hidden="true">
          <div className={`${styles["bt-word"]} ${styles["ca-loud-word"]}`}>
            <span className={styles["bt-b"]}>b</span>
            <span className={styles["bt-o"]}>O</span>
            <span className={styles["bt-at"]}>At</span>
          </div>
          <div className={styles["ca-loud-badges"]}>
            <span>#PlayWithBoldness</span>
            <span>Full Blast</span>
          </div>
          <h3 className={styles["ca-loud-line"]}>
            Loud. Everywhere.
            <br />
            Felt nowhere.
          </h3>
          <div className={styles["ca-eq"]} aria-hidden="true">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles["ca-volume-row"]}>
        <label htmlFor="ca3amSlider">Volume</label>
        <input
          type="range"
          id="ca3amSlider"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="Turn the boAt brand volume down to reveal the 3AM idea"
        />
        <span className={styles["ca-volume-readout"]}>{volume}</span>
      </div>
    </>
  );
}
