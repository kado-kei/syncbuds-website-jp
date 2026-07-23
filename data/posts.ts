export type PostCategory =
  | "Activity Report"
  | "Event Report"
  | "Partner Case"
  | "Member Story"
  | "News"
  | "Founder Note";

export interface Post {
  slug: string;
  category: PostCategory;
  title: string;
  excerpt: string;
  body: string;
  date: string;
}

export const posts: Post[] = [
  {
    slug: "career-seminar-vol1",
    category: "Partner Case",
    title: "Robert Walters × SyncBuds 共催キャリアセミナーを開催",
    excerpt:
      "グローバル人材紹介企業Robert Waltersと共催。海外経験を仕事に変えるキャリアセミナー。",
    body: "2026年6月、SyncBudsはRobert Walters Japanと共催で、キャリアセミナー「海外経験を、仕事に変える。」を開催しました。バンクーバーで挑戦する日本人の若者が、海外で得た経験をどうキャリアにつなげるかを語り合いました。SyncBudsは企画・集客・当日運営を担い、Robert Waltersからはキャリアコンサルタントが登壇。参加者にはグローバル就職の実践的なアドバイスが提供されました。今後も定期的な共催を計画しています。",
    date: "2026-06-08",
  },
  {
    slug: "member-story-yuki",
    category: "Member Story",
    title: "孤独な3ヶ月目を救ったもの — Yukiのストーリー",
    excerpt:
      "ワーホリで来加し、現地エンジニアへ。一番きつかった時期に支えになったのは、仲間の存在だった。",
    body: "ワーキングホリデーでバンクーバーに来たYuki。最初の3ヶ月は、情報も繋がりもなく、孤独な日々だった。そんなとき出会ったのがSyncBudsの仲間たち。「一緒にいる」と感じられる場所が、彼を次の一歩へと押し出した。",
    date: "2026-06-05",
  },
  {
    slug: "ryugaku-plus-beta",
    category: "News",
    title: "Ryugaku+ β版の登録受付を開始しました",
    excerpt:
      "バンクーバーの留学生・ワーホリ向けプラットフォーム Ryugaku+ のβ版がスタート。",
    body: "バンクーバーの日本人留学生・ワーホリ向けプラットフォーム「Ryugaku+」のβ版登録受付を開始しました。情報格差をなくし、誠実な事業者と挑戦者をつなぐ場を目指します。",
    date: "2026-06-01",
  },
  {
    slug: "ig-team-restructure",
    category: "Activity Report",
    title: "バンおすIGチームの体制をアップデート",
    excerpt:
      "フォロワー約6,000人のバンクーバーおすすめ。さらに価値を届けるためのチーム再編について。",
    body: "フォロワー約6,000人を抱えるInstagram「バンクーバーおすすめ」。より多くの価値を届けるため、IGチームの体制をアップデートしました。コンテンツの質とスピードの両立を目指します。",
    date: "2026-05-28",
  },
];
