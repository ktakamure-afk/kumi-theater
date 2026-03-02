import styles from "./Ticket.module.css";

const tickets = [
  { type: "一般", price: "4,500円", note: "" },
  { type: "学生", price: "3,000円", note: "当日学生証提示" },
  { type: "高校生以下", price: "2,000円", note: "当日学生証提示" },
];

export default function Ticket() {
  return (
    <section id="ticket" className={styles.ticket}>
      <div className="container">
        <h2 className="sectionTitle">チケット</h2>
        <p className="sectionSubtitle">Ticket</p>
        <div className={styles.content}>
          <div className={styles.priceList}>
            {tickets.map((t) => (
              <div key={t.type} className={styles.priceItem}>
                <span className={styles.type}>{t.type}</span>
                <span className={styles.line} />
                <span className={styles.price}>{t.price}</span>
                {t.note && <span className={styles.note}>({t.note})</span>}
              </div>
            ))}
          </div>
          <p className={styles.tax}>※ 全席自由・税込</p>
          <div className={styles.buttons}>
            <a href="#" className={styles.ctaPrimary}>
              Web予約（準備中）
            </a>
            <a href="#" className={styles.ctaSecondary}>
              電話予約：03-XXXX-XXXX
            </a>
          </div>
          <div className={styles.notes}>
            <p>・未就学児の入場はご遠慮ください</p>
            <p>・開場は開演の30分前です</p>
            <p>・やむを得ない事情により、出演者が変更になる場合がございます</p>
          </div>
        </div>
      </div>
    </section>
  );
}
