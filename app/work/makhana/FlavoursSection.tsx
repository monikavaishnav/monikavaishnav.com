"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./makhana.module.css";

type Product = {
  id: string;
  accent: string;
  img: string;
  imgClass?: string;
  wrapClass?: string;
  alt: string;
  name: React.ReactNode;
  desc: string;
  tag: string;
  tagClass?: string;
  limited?: boolean;
};

const EVERYDAY: Product[] = [
  { id: "himalayan-pink-salt", accent: "#C49A8A", img: "/assets/maka-regular-himalayan.png", alt: "Himalayan Pink Salt pouch", name: <>Himalayan<br />Pink Salt</>, desc: "The original. Pure roasted makhana with a light salt finish. Clean, simple, addictive.", tag: "BESTSELLER" },
  { id: "masala-chai", accent: "#B87A3C", img: "/assets/maka-regular-masalachai.png", alt: "Masala Chai pouch", name: <>Masala<br />Chai</>, desc: "Warm cardamom, star anise, and cinnamon. Chai on the go — without the cup.", tag: "FAN FAVOURITE" },
  { id: "mango-habanero", accent: "#C4511E", img: "/assets/maka-regular-mango.png", alt: "Mango Habanero pouch", name: <>Mango<br />Habanero</>, desc: "Sweet ripe mango meets the slow burn of habanero. Bold doesn't begin to cover it.", tag: "NEW" },
  { id: "pudina-chaat", accent: "#2B6B3E", img: "/assets/maka-regular-pudina.png", alt: "Pudina Chaat pouch", name: <>Pudina<br />Chaat</>, desc: "Tangy, zesty, refreshing. Inspired by street-food chutney that hits every single note.", tag: "HERO FLAVOUR" },
  { id: "dark-chocolate", accent: "#3A2018", img: "/assets/maka-regular-darkchoco.png", wrapClass: styles.productImgWrapDark, alt: "Dark Chocolate & Sea Salt pouch", name: <>Dark Chocolate<br />&amp; Sea Salt</>, desc: "70% dark cocoa meets a flake of sea salt. Indulgent. Guilt-free. Dangerous.", tag: "BOLD PICK" },
  { id: "saffron-rose", accent: "#A07840", img: "/assets/maka-regular-saffron.png", alt: "Saffron & Rose pouch", name: <>Saffron<br />&amp; Rose</>, desc: "A delicate collision — premium Kashmiri saffron and dried rose petals. For the daring.", tag: "LIMITED EDITION", tagClass: styles.productTagGold, limited: true },
];

const PREMIUM: Product[] = [
  { id: "himalayan-pink-salt", accent: "#8C3A1E", img: "/assets/maka-premium-himalayan.png", wrapClass: styles.productImgWrapWarm, alt: "Himalayan Pink Salt premium jar", name: <>Himalayan<br />Pink Salt</>, desc: "Warli tribal art in terracotta and cream. Celebrates community, harvest, and the purity of salt.", tag: "WARLI ART", tagClass: styles.productTagArt },
  { id: "masala-chai", accent: "#7A4B28", img: "/assets/maka-premium-masalachai.png", wrapClass: styles.productImgWrapWarm, imgClass: styles.productImgZoomL, alt: "Masala Chai premium jar", name: <>Masala<br />Chai</>, desc: "Madhubani peacock in ochre and rust. A love letter to Bihar — where the makhana grows.", tag: "MADHUBANI ART", tagClass: styles.productTagArt },
  { id: "mango-habanero", accent: "#5C3A18", img: "/assets/maka-premium-mango.png", wrapClass: styles.productImgWrapWarm, imgClass: styles.productImgZoomL, alt: "Mango Habanero premium jar", name: <>Mango<br />Habanero</>, desc: "Madhubani mango grove in bold primary colours. Ripe, vibrant, and impossibly lush.", tag: "MADHUBANI ART", tagClass: styles.productTagArt },
  { id: "pudina-chaat", accent: "#1E5C38", img: "/assets/maka-premium-pudina.png", alt: "Pudina Chaat premium jar", name: <>Pudina<br />Chaat</>, desc: "Rangoli geometry in emerald and gold. Fresh, festive, and full of energy.", tag: "RANGOLI ART", tagClass: styles.productTagArt },
  { id: "dark-chocolate", accent: "#1A0F08", img: "/assets/maka-premium-darkchoco.png", wrapClass: styles.productImgWrapDark, imgClass: styles.productImgZoomL, alt: "Dark Chocolate premium jar", name: <>Dark Chocolate<br />&amp; Sea Salt</>, desc: "Madhubani moonlit tree in deep indigo and violet. Rich, mysterious, unforgettable.", tag: "MADHUBANI ART", tagClass: styles.productTagArt },
  { id: "saffron-rose", accent: "#1C3461", img: "/assets/maka-premium-saffron.png", alt: "Saffron & Rose premium jar", name: <>Saffron<br />&amp; Rose</>, desc: "Mughal floral miniature in royal teal and gold. Limited. Collectible. Museum-worthy.", tag: "LIMITED EDITION", tagClass: styles.productTagGold, limited: true },
];

function ProductCard({ p, premium }: { p: Product; premium?: boolean }) {
  return (
    <a
      className={`${styles.productCard} ${premium ? styles.productCardPremium : ""} ${p.limited ? styles.productCardLimited : ""}`}
      href={`/work/makhana/products/${p.id}/`}
      style={{ "--pc-accent": p.accent } as CSSProperties}
    >
      <div className={`${styles.productImgWrap} ${p.wrapClass ?? ""}`}>
        <Image
          src={p.img}
          alt={p.alt}
          fill
          sizes="(max-width: 900px) 50vw, 33vw"
          className={`${styles.productImg} ${p.imgClass ?? ""}`}
        />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{p.name}</h3>
        <p className={styles.productDesc}>{p.desc}</p>
        <span className={`${styles.productTag} ${p.tagClass ?? ""}`}>{p.tag}</span>
      </div>
    </a>
  );
}

export default function FlavoursSection() {
  const [tab, setTab] = useState<"everyday" | "premium">("everyday");

  return (
    <section className={styles.flavours} id="flavours">
      <div className={styles.whatLabel}>THE RANGE</div>
      <div className={styles.flavoursHeader}>
        <h2 className={styles.flavoursTitle}>PICK YOUR<br />FLAVOUR.</h2>
        <div className={styles.rangeTabs} role="tablist">
          <button
            className={`${styles.rangeTab} ${tab === "everyday" ? styles.active : ""}`}
            role="tab"
            aria-selected={tab === "everyday"}
            onClick={() => setTab("everyday")}
          >
            EVERYDAY RANGE
          </button>
          <button
            className={`${styles.rangeTab} ${tab === "premium" ? styles.active : ""}`}
            role="tab"
            aria-selected={tab === "premium"}
            onClick={() => setTab("premium")}
          >
            PREMIUM COLLECTION
          </button>
        </div>
      </div>

      <div className={tab !== "everyday" ? styles.rangeHidden : ""}>
        <div className={styles.productGrid}>
          {EVERYDAY.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>

      <div className={tab !== "premium" ? styles.rangeHidden : ""}>
        <div className={styles.premiumIntro}>
          <p>Handcrafted in small batches. Each jar is dressed in a wraparound label inspired by India&apos;s living folk art traditions — Warli, Madhubani, Pichwai, and Mughal miniature.</p>
        </div>
        <div className={styles.productGrid}>
          {PREMIUM.map((p) => (
            <ProductCard key={p.id} p={p} premium />
          ))}
        </div>
      </div>
    </section>
  );
}
