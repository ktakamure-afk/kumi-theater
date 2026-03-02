import styles from "./Story.module.css";

export default function Story() {
  return (
    <section id="story" className={styles.story}>
      <div className="container">
        <h2 className="sectionTitle">あらすじ</h2>
        <p className="sectionSubtitle">Story</p>
        <div className={styles.content}>
          <p>
            ある秋の夜、古い洋館に集められた五人の男女。
            彼らに共通するのは、十年前のある出来事の記憶だった。
          </p>
          <p>
            主人公・葉月は、かつて幼馴染の透と交わした約束を忘れられずにいた。
            しかし透は十年前に姿を消し、誰もその行方を知らない。
          </p>
          <p>
            月明かりが差し込む館の中で、封じられた過去が少しずつ明かされていく。
            それぞれが隠してきた秘密、すれ違った想い、そして―。
          </p>
          <p>
            記憶の奥に眠る真実に辿り着いたとき、
            彼らは再び前を向いて歩き出すことができるのだろうか。
          </p>
        </div>
      </div>
    </section>
  );
}
