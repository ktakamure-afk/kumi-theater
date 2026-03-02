import styles from "./Cast.module.css";

const castMembers = [
  { name: "佐藤 美咲", role: "葉月", description: "物語の主人公。過去の約束に囚われている。" },
  { name: "田中 健一", role: "透", description: "葉月の幼馴染。十年前に姿を消した。" },
  { name: "鈴木 あかり", role: "凛", description: "葉月の親友。明るく振る舞うが秘密を抱えている。" },
  { name: "高橋 翔太", role: "蒼", description: "館の現在の管理人。過去を知る人物。" },
  { name: "中村 花", role: "雪乃", description: "謎めいた女性。事件の鍵を握る。" },
  { name: "山本 大輔", role: "誠一", description: "透の兄。家族の事情を背負う。" },
];

export default function Cast() {
  return (
    <section id="cast" className={styles.cast}>
      <div className="container">
        <h2 className="sectionTitle">キャスト</h2>
        <p className="sectionSubtitle">Cast</p>
        <div className={styles.grid}>
          {castMembers.map((member) => (
            <div key={member.name} className={styles.card}>
              <div className={styles.photo}>
                <div className={styles.photoPlaceholder}>
                  {member.name.charAt(0)}
                </div>
              </div>
              <div className={styles.info}>
                <p className={styles.role}>{member.role} 役</p>
                <p className={styles.name}>{member.name}</p>
                <p className={styles.description}>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
