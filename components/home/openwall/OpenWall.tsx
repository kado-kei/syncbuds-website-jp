"use client";

import Link from "next/link";
import styles from "./OpenWall.module.css";
import { useOpenWall } from "./useOpenWall";

/** ナビの読み上げ用。表示は番号だけなので、行き先はここで言葉にする */
const sceneLabels = [
  "課題",
  "私たちの意思",
  "SyncBudsとは",
  "3つの接点",
  "参加する",
];

const solutions = [
  {
    num: "01",
    title: "リアルを届ける。",
    body: "経験者の声と現地の情報で、留学を自分で設計できるようにする。",
  },
  {
    num: "02",
    title: "仲間と出会う。",
    body: "コミュニティとイベントで、相談し学び挑戦できるつながりをつくる。",
  },
  {
    num: "03",
    title: "経験を未来へ。",
    body: "企業やキャリアとの接点をつくり、海外経験を次の可能性につなげる。",
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
          <p className={styles.eyebrow}>01 — THE PROBLEM</p>
          <h1>
            「知らなかった」が、
            <br />
            未来を狭めている。
          </h1>
          <p className={styles.body}>
            留学前は、現地のリアルが見えない。
            <br />
            留学中は、その先のキャリアが見えない。
          </p>
          <p className={styles.tag}>なくしたいのは、情報アクセスの壁です。</p>
        </section>

        {/* ② スローガン — 開口率30%。まだ細い隙間の中に収まる文字数にしてある */}
        <section className={`${styles.panel} ${styles.slogan}`} ref={(el) => {
            panelsRef.current[1] = el;
          }}>
          <p className={styles.eyebrow}>02 — OUR BELIEF</p>
          <h2>
            情報の壁を、ひらく。
            <br />
            挑戦の、その先へ。
          </h2>
        </section>

        {/* ③ 組織紹介 — 開口率70% */}
        <section className={`${styles.panel} ${styles.about}`} ref={(el) => {
            panelsRef.current[2] = el;
          }}>
          <p className={styles.eyebrow}>03 — WHO WE ARE</p>
          <p className={styles.wordmark}>SyncBuds</p>
          <h2>自分の未来を、自分で選べるように。</h2>
          <p className={styles.body}>
            留学前・留学中・帰国後をつなぐNPO。情報と人との出会いを通じて、
            一人ひとりの納得できる選択を支えます。
          </p>
        </section>

        {/* ④ 3つの接点 — 開口率90%。ここから光が現れる */}
        <section className={`${styles.panel} ${styles.solutions}`} ref={(el) => {
            panelsRef.current[3] = el;
          }}>
          <p className={styles.eyebrow}>04 — THREE WAYS FORWARD</p>
          <h2>未来をひらく、3つの接点。</h2>
          <div className={styles.cards}>
            {solutions.map((s) => (
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
          <p className={styles.eyebrow}>05 — BETTER, TOGETHER</p>
          <h2>つながるほど、可能性は広がる。</h2>
          <p className={styles.body}>
            情報、人、機会。それぞれが重なるとき、
            <br />
            一人ではつくれない未来が動き出す。
          </p>
          <div className={styles.actions}>
            <Link href="/partners" className={`${styles.cta} ${styles.secondary}`}>
              パートナーとして関わる <span aria-hidden="true">→</span>
            </Link>
            <Link href="/join" className={styles.cta}>
              メンバーとして参加する <span aria-hidden="true">→</span>
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
