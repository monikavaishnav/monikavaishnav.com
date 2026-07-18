import styles from "./Footer.module.css";

export default function Footer({ variant }: { variant?: "dark" }) {
  return (
    <footer className={`${styles.footer} ${variant === "dark" ? styles.footerDark : ""}`}>
      <span>© 2026 MONIKA VAISHNAV</span>
      <span>@MONIKAVAISHNAV</span>
    </footer>
  );
}
