import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.logo}>劇団くみ</p>
        <p className={styles.copy}>&copy; 2026 劇団くみ All Rights Reserved.</p>
      </div>
    </footer>
  );
}
