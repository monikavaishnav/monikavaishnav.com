"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume", newTab: true },
];

function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>, pathname: string, href: string) {
  const [path, hash] = href.split("#");
  if (!hash || (path && path !== pathname)) return; // let the browser navigate normally
  e.preventDefault();
  document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
  history.replaceState(null, "", href);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <svg className={styles.logoMark} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3C12.6 8 15 10.6 21 12 15 13.4 12.6 16 12 21 11.4 16 9 13.4 3 12 9 10.6 11.4 8 12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
        MV
      </Link>
      <div className={styles.navRight}>
        <ul className={styles.links}>
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            const className = `${styles.link} ${isActive ? styles.linkActive : ""}`;
            // Hash links use a plain <a> + manual scroll — neither next/link's
            // client transition nor the browser's default same-document click
            // behavior scroll to the fragment when only the hash changes.
            if (item.href.includes("#")) {
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={className}
                    onClick={(e) => scrollToHash(e, pathname, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            }
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={className}
                  target={item.newTab ? "_blank" : undefined}
                  rel={item.newTab ? "noopener" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/#contact" className={styles.navCta} onClick={(e) => scrollToHash(e, pathname, "/#contact")}>Contact Me</a>
      </div>
    </nav>
  );
}
