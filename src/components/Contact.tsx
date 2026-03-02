import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="sectionTitle">お問い合わせ</h2>
        <p className="sectionSubtitle">Contact</p>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <h3 className={styles.label}>メール</h3>
              <p className={styles.value}>info@gekidan-kumi.example.com</p>
            </div>
            <div className={styles.infoItem}>
              <h3 className={styles.label}>電話</h3>
              <p className={styles.value}>03-XXXX-XXXX（平日 10:00〜18:00）</p>
            </div>
          </div>
          <div className={styles.social}>
            <h3 className={styles.socialTitle}>SNS</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>X (Twitter)</a>
              <a href="#" className={styles.socialLink}>Instagram</a>
              <a href="#" className={styles.socialLink}>YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
