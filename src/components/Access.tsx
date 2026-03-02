import styles from "./Access.module.css";

export default function Access() {
  return (
    <section id="access" className={styles.access}>
      <div className="container">
        <h2 className="sectionTitle">アクセス</h2>
        <p className="sectionSubtitle">Access</p>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <h3 className={styles.label}>会場名</h3>
              <p className={styles.value}>シアターグリーン BASE THEATER</p>
            </div>
            <div className={styles.infoItem}>
              <h3 className={styles.label}>住所</h3>
              <p className={styles.value}>
                〒171-0022 東京都豊島区南池袋2-20-4
              </p>
            </div>
            <div className={styles.infoItem}>
              <h3 className={styles.label}>最寄駅</h3>
              <p className={styles.value}>
                JR・東京メトロ「池袋駅」東口より徒歩5分
              </p>
            </div>
          </div>
          <div className={styles.map}>
            <div className={styles.mapPlaceholder}>
              <p>地図が表示されます</p>
              <p className={styles.mapNote}>
                （Google Maps埋め込み予定）
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
