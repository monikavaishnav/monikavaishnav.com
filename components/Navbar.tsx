"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume", newTab: true },
];

// Each page had its own recolored navbar via a body class in the old site
// (.home .navbar, .resume-page .navbar, .theme-clay .nav-logo, .makhana-page
// .navbar, ...). Centralized here instead of scattered across 4 stylesheets —
// boAt's pages never overrode the navbar, so they fall through to default.
function getVariant(pathname: string): string {
  if (pathname === "/") return styles.navHome;
  if (pathname.startsWith("/resume")) return styles.navResume;
  if (pathname.startsWith("/projects")) return styles.navClay;
  if (pathname.startsWith("/work/makhana")) return styles.navMakhana;
  return "";
}

export default function Navbar() {
  const pathname = usePathname();
  const variant = getVariant(pathname);

  return (
    <nav className={`${styles.navbar} ${variant}`}>
      <Link href="/" className={styles.logo}>MV</Link>
      <ul className={styles.links}>
        {NAV_LINKS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                target={item.newTab ? "_blank" : undefined}
                rel={item.newTab ? "noopener" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
