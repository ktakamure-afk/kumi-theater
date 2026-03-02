import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.company}>劇団くみ 第10回公演</p>
        <h1 className={styles.title}>月影の記憶</h1>
        <p className={styles.subtitle}>
          ― 忘れられた約束が、今ふたたび灯る ―
        </p>
        <div className={styles.dateInfo}>
          <p>2026.4.18 (土) ― 4.20 (月)</p>
          <p>シアターグリーン BASE THEATER</p>
        </div>
        <a href="#ticket" className={styles.cta}>
          チケットを予約する
        </a>
      </div>
    </section>
  );
}
