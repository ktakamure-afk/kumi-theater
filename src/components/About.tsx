import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="sectionTitle">公演概要</h2>
        <p className="sectionSubtitle">About</p>
        <div className={styles.content}>
          <p>
            劇団くみ第10回記念公演「月影の記憶」は、時を超えて紡がれる人々の絆を描いた物語です。
            記念すべき節目の公演として、これまでの歩みを振り返りながら、新たな挑戦に臨みます。
          </p>
          <div className={styles.message}>
            <h3 className={styles.messageTitle}>演出家メッセージ</h3>
            <p>
              「記憶とは何か。忘れたつもりでも、心の奥底に残り続けるもの。
              この作品は、私たちが無意識に抱え続ける"約束"について問いかけます。
              月の光に照らされた記憶の断片が、やがてひとつの物語として浮かび上がるとき、
              きっと皆さまの心にも、忘れていた大切な何かが蘇るはずです。」
            </p>
            <p className={styles.messageName}>演出・脚本　山田 太一</p>
          </div>
        </div>
      </div>
    </section>
  );
}
