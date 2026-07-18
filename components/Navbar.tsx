"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume", newTab: true },
];

// The portfolio shell (Home, Projects, Resume) all share one navbar style now.
// Makhana keeps its own distinct navbar — it's a separate branded case study,
// out of scope for the portfolio revamp. boAt has no override, so it falls
// through to the shared default.
function getVariant(pathname: string): string {
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
