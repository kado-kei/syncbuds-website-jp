"use client";

import Link from "next/link";
import styles from "./OpenWall.module.css";
import { useOpenWall } from "./useOpenWall";

/** ナビの読み上げ用。表示は番号だけなので、行き先はここで言葉にする */
const sceneLabels = [
  "なぜSyncBudsが必要なのか",
  "私たちの意思",
  "SyncBudsとは",
  "主な取り組み",
  "参加する",
];

/* 既存サイトの Activities セクションと同じ3本柱・同じ説明文。
   演出のために別の言葉を作らない */
const activities = [
  {
    num: "01",
    title: "Community",
    body: "バンクーバーで挑戦する仲間と出会う場をつくる。",
  },
  {
    num: "02",
    title: "Media",
    body: "現地情報を届けながら、メンバーが実践経験を積む。",
  },
  {
    num: "03",
    title: "Career",
    body: "海外経験を次のキャリアにつなげる機会をつくる。",
  },
];

/**
 * スクロールで黒い壁が開き、その向こうにあった情報と選択肢が見えてくる。
 * 「情報アクセスの壁をなくす」という組織の役割を、読ませるのではなく体験させる。
 */
export default function OpenWall() {
  const { storyRef, stageRef, canvasRef, percentRef, panelsRef, navRef, goToScene } =
    useOpenWall(styles.active);

  return (
    <div className={styles.story} id="open-wall" ref={storyRef}>
      <div className={styles.stage} ref={stageRef}>
        <canvas className={styles.canvas} ref={canvasRef} aria-hidden="true" />

        {/* ① 課題 — 壁が閉じている間だけ、壁の上に白く乗る */}
        <section className={`${styles.panel} ${styles.problem}`} ref={(el) => {
            panelsRef.current[0] = el;
          }}>
          <p className={styles.eyebrow}>01 — WHY SYNCBUDS</p>
          <h1 className="jp-fit [--chars:10]">
            「知らなかった」で、
            <br />
            挑戦が止まる。
          </h1>
          <p className={styles.body}>
            信頼できる情報にたどり着けない。
            <br />
            頼れる人がいない。
            <br />
            環境の差で、機会すら得られない。
          </p>
          <p className={styles.tag}>情報アクセスの壁 / 孤立 / 機会の不平等</p>
        </section>

        {/* ② スローガン — 開口率30%。まだ細い隙間の中に収まる文字数にしてある */}
        <section className={`${styles.panel} ${styles.slogan}`} ref={(el) => {
            panelsRef.current[1] = el;
          }}>
          <p className={styles.eyebrow}>02 — OUR BELIEF</p>
          <h2 className="jp-fit [--chars:8]">
            情報は、ひらく。
            <br />
            ひとりにしない。
          </h2>
        </section>

        {/* ③ 組織紹介 — 開口率70% */}
        <section className={`${styles.panel} ${styles.about}`} ref={(el) => {
            panelsRef.current[2] = el;
          }}>
          <p className={styles.eyebrow}>03 — WHAT IS SYNCBUDS</p>
          <p className={styles.wordmark}>SyncBuds</p>
          <h2 className="jp-fit [--chars:12]">
            海外で挑戦する若者に、
            <br />
            実践機会と仲間を届ける。
          </h2>
          <p className={styles.body}>
            バンクーバー発。
            <br />
            留学生・Co-op生・若手社会人が、
            <br />
            実践を通じて成長するコミュニティ。
          </p>
        </section>

        {/* ④ 3つの接点 — 開口率90%。ここから光が現れる */}
        <section className={`${styles.panel} ${styles.solutions}`} ref={(el) => {
            panelsRef.current[3] = el;
          }}>
          <p className={styles.eyebrow}>04 — MAIN ACTIVITIES</p>
          <h2 className="jp-fit [--chars:6]">主な取り組み</h2>
          <div className={styles.cards}>
            {activities.map((s) => (
              <div className={styles.card} key={s.num}>
                <span className={styles.num}>{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⑤ 参加 — 壁が消え、3つの光が中央で混ざる */}
        <section className={`${styles.panel} ${styles.join}`} ref={(el) => {
            panelsRef.current[4] = el;
          }}>
          <p className={styles.eyebrow}>05 — JOIN US</p>
          <h2 className="jp-fit [--chars:12]">一緒に、挑戦しませんか。</h2>
          <p className={styles.body}>
            未経験でも、英語が完璧でなくても大丈夫。
            <br />
            「本気でやりたい」その気持ちがあれば、
            <br />
            ここがあなたの場所です。
          </p>
          <div className={styles.actions}>
            <Link href="/partners" className={`${styles.cta} ${styles.secondary}`}>
              Partner With Us <span aria-hidden="true">→</span>
            </Link>
            <Link href="/join" className={styles.cta}>
              Join Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <div className={styles.wall + " " + styles.left} aria-hidden="true">
          <div className={styles.wallEdge} />
        </div>
        <div className={styles.wall + " " + styles.right} aria-hidden="true">
          <div className={styles.wallEdge} />
        </div>

        <div className={styles.footer}>
          <p className={styles.readout}>
            OPEN ACCESS
            <strong>
              <span ref={percentRef}>0</span>%
            </strong>
          </p>
          <nav className={styles.nav} aria-label="ストーリーの章">
            {sceneLabels.map((label, i) => (
              <button
                key={label}
                type="button"
                aria-label={`${i + 1}. ${label}へ移動`}
                onClick={() => goToScene(i)}
                ref={(el) => {
                  navRef.current[i] = el;
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </nav>
          <p className={styles.scrollNote}>SCROLL TO UNFOLD ↓</p>
        </div>

        <div className={styles.progress} aria-hidden="true" />
      </div>
    </div>
  );
}
