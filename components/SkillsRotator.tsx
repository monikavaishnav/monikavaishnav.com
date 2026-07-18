"use client";

import { useEffect, useState } from "react";
import styles from "./SkillsRotator.module.css";

const SKILLS = [
  "Brand Strategy",
  "GTM Planning",
  "Consumer Insights",
  "Campaign Development",
  "Content & Copywriting",
  "Market Research",
];

export default function SkillsRotator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SKILLS.length);
    }, 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <ul className={styles.skillsList}>
      {SKILLS.map((skill, i) => (
        <li key={skill} className={`${styles.skillItem} ${i === active ? styles.active : ""}`}>
          <span className={styles.skillArrow}>→</span>
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  );
}
