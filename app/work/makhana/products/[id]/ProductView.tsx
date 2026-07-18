"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import type { Product } from "@/lib/products";
import styles from "./product.module.css";

type Pkg = "regular" | "premium";

export default function ProductView({ product }: { product: Product }) {
  const [pkg, setPkg] = useState<Pkg>("regular");
  const pkgData = product[pkg];
  // art/artDesc/imgZoom only ever exist on the premium variant — read them off
  // product.premium directly instead of the union so they type-check cleanly.
  const { art, artDesc, imgZoom } = product.premium;
  const showArt = pkg === "premium" && Boolean(art);

  const imgStyle: CSSProperties = pkg === "premium" && imgZoom
    ? { objectPosition: "left center", transform: "scale(1.35)", transformOrigin: "left center" }
    : { objectPosition: "center", transform: "none" };

  const visualStyle: CSSProperties = {
    background: product.bgDark ? "#2A1F1A" : product.bg || "#F0EAE0",
  };

  const pageStyle = { "--pdp-accent": product.accent } as CSSProperties;

  return (
    <div className={styles.makhanaPage} style={pageStyle}>
      <div className={styles.pdpBreadcrumb}>
        <a href="/work/makhana/#flavours" className={styles.pdpBack}>← All Flavours</a>
        <span className={styles.pdpCrumbSep}>/</span>
        <span className={styles.pdpCrumbName}>{product.name}</span>
      </div>

      {/* HERO */}
      <section className={styles.pdpHero}>
        <div className={styles.pdpHeroVisual} style={visualStyle}>
          <div className={styles.pdpPkgTabs}>
            <button
              type="button"
              className={`${styles.pdpPkgTab} ${pkg === "regular" ? styles.pdpPkgTabActive : ""}`}
              onClick={() => setPkg("regular")}
            >
              Everyday Pouch
            </button>
            <button
              type="button"
              className={`${styles.pdpPkgTab} ${pkg === "premium" ? styles.pdpPkgTabActive : ""}`}
              onClick={() => setPkg("premium")}
            >
              Premium Jar
            </button>
          </div>
          <div className={styles.pdpImgWrap}>
            <Image
              src={pkgData.img}
              alt={`${product.name} — ${pkg === "regular" ? "Everyday Pouch" : "Premium Jar"}`}
              className={styles.pdpImg}
              style={imgStyle}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className={styles.pdpHeroInfo}>
          <p className={styles.pdpEyebrow}>मaka — MAKHANA</p>
          <h1 className={styles.pdpName}>{product.name}</h1>
          <p className={styles.pdpTagline}>{product.tagline}</p>
          <div className={styles.pdpPkgDetailRow}>
            <div className={styles.pdpPkgDetail}>
              <span className={styles.pdpPkgDetailVal}>{pkgData.weight}</span>
              <span className={styles.pdpPkgDetailKey}>Net Weight</span>
            </div>
            <div className={styles.pdpPkgDetail}>
              <span className={styles.pdpPkgDetailVal}>{pkgData.servings}</span>
              <span className={styles.pdpPkgDetailKey}>Servings</span>
            </div>
            <div className={styles.pdpPkgDetail}>
              <span className={styles.pdpPkgDetailVal}>{pkg === "regular" ? "Pouch" : "Glass Jar"}</span>
              <span className={styles.pdpPkgDetailKey}>Pack Type</span>
            </div>
          </div>
          <div className={styles.pdpPriceRow}>
            <span className={styles.pdpPrice}>₹{pkgData.price}</span>
            <span className={styles.pdpPriceNote}>incl. of all taxes</span>
          </div>
          {product.isLimited && (
            <p className={styles.pdpLimitedNote}>✦ Limited batch — no restocks</p>
          )}
          <a href="#" className={`${styles.mkCtaBtn} ${styles.pdpCta}`}>ADD TO CART →</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.pdpAbout}>
        <div className={styles.pdpAboutLabel}>About this Flavour</div>
        <p className={styles.pdpAboutText}>{product.about}</p>
      </section>

      {/* QUALITIES */}
      <section className={styles.pdpQualities}>
        <div className={styles.mkWhatLabel}>Why you&apos;ll love it</div>
        <div className={styles.pdpQualitiesGrid}>
          {product.qualities.map((q) => (
            <div className={styles.pdpQualityCard} key={q.title}>
              <span className={styles.pdpQualityIcon}>{q.icon}</span>
              <div className={styles.pdpQualityTitle}>{q.title}</div>
              <p className={styles.pdpQualityDesc}>{q.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NUTRITION */}
      <section className={styles.pdpNutrition}>
        <div className={styles.mkWhatLabel}>Nutrition — per 25g serving</div>
        <div className={styles.mkStatRow}>
          <div className={styles.mkStat}>
            <span className={styles.mkStatNum}>{product.nutrition.calories}</span>
            <span className={styles.mkStatLabel}>CALORIES</span>
          </div>
          <div className={styles.mkStat}>
            <span className={styles.mkStatNum}>{product.nutrition.protein}</span>
            <span className={styles.mkStatLabel}>PROTEIN</span>
          </div>
          <div className={styles.mkStat}>
            <span className={styles.mkStatNum}>{product.nutrition.fat}</span>
            <span className={styles.mkStatLabel}>TOTAL FAT</span>
          </div>
          <div className={styles.mkStat}>
            <span className={styles.mkStatNum}>{product.nutrition.carbs}</span>
            <span className={styles.mkStatLabel}>CARBOHYDRATES</span>
          </div>
        </div>
        <p className={styles.pdpIngredients}>
          <strong>Ingredients</strong>
          {product.ingredients}
        </p>
      </section>

      {/* PREMIUM ART */}
      <section className={`${styles.pdpArtSection} ${showArt ? "" : styles.pdpArtHidden}`}>
        <div className={styles.pdpArtInner}>
          <span className={styles.pdpArtTag}>{art}</span>
          <p className={styles.pdpArtDesc}>{artDesc}</p>
        </div>
      </section>

      <footer className={styles.mkFooter}>
        <a href="/work/makhana/#flavours" className={styles.mkBack}>← Back to Flavours</a>
        <span>© 2026 MONIKA VAISHNAV</span>
      </footer>
    </div>
  );
}
