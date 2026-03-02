import styles from "./Schedule.module.css";

const performances = [
  { date: "4月18日（土）", times: ["14:00", "18:00"] },
  { date: "4月19日（日）", times: ["13:00", "17:00"] },
  { date: "4月20日（月）", times: ["14:00"] },
];

export default function Schedule() {
  return (
    <section id="schedule" className={styles.schedule}>
      <div className="container">
        <h2 className="sectionTitle">公演情報</h2>
        <p className="sectionSubtitle">Schedule</p>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <h3 className={styles.label}>会場</h3>
              <p className={styles.value}>シアターグリーン BASE THEATER</p>
            </div>
            <div className={styles.infoItem}>
              <h3 className={styles.label}>上演時間</h3>
              <p className={styles.value}>約120分（途中休憩15分含む）</p>
            </div>
          </div>

          <div className={styles.timetable}>
            <h3 className={styles.timetableTitle}>公演スケジュール</h3>
            <div className={styles.table}>
              {performances.map((perf) => (
                <div key={perf.date} className={styles.row}>
                  <span className={styles.date}>{perf.date}</span>
                  <span className={styles.times}>
                    {perf.times.map((time) => (
                      <span key={time} className={styles.time}>
                        {time} 開演
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
