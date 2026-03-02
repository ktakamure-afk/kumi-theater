"use client";

import { useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  { label: "概要", href: "#about" },
  { label: "あらすじ", href: "#story" },
  { label: "キャスト", href: "#cast" },
  { label: "公演情報", href: "#schedule" },
  { label: "チケット", href: "#ticket" },
  { label: "ギャラリー", href: "#gallery" },
  { label: "アクセス", href: "#access" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          劇団くみ
        </a>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
