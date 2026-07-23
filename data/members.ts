// ============================================================
// SyncBuds メンバーデータ（仮置き・架空）
// ------------------------------------------------------------
// ⚠️ これは全員フィクションです。実在のメンバーではありません。
// 6月の1on1対談後、実データ（Sanity）に差し替える前提のプレースホルダー。
//
// テンプレート定義は: projects/syncbuds-core/onboarding/member-template.md
// Sanityスキーマ:     sanity/schemas/story.ts
// ============================================================

export type MemberStatus = "current" | "alumni";

export interface Member {
  id: number;
  name: string;          // 表示名（ニックネーム可）
  status: MemberStatus;  // current = 現役 / alumni = 卒業生
  cohort: number;        // 期生
  team: string;          // 所属チーム
  role: string;          // 経歴の一行サマリー（例: ワーホリ → エンジニア転職）
  comment: string;       // 短い引用コメント（カード・トップ用 / 60〜90字）
  body: string;          // 紹介本文（詳細ページ用 / 120〜200字）
  photo: string;         // プロフィール写真パス
  featured?: boolean;    // トップページ「仲間の声」に出すか（3名）
}

// --- 20名（架空・テンプレート通り） -------------------------
export const members: Member[] = [
  {
    id: 1,
    name: "Yuki S.",
    status: "current",
    cohort: 6,
    team: "Ryugaku+ チーム",
    role: "ワーホリ → 現地エンジニア",
    comment:
      "SyncBudsで出会った仲間がいなければ、最初の3ヶ月を乗り越えられなかった。孤独な夜に「一緒にいる」と感じられる場所でした。",
    body: "ワーキングホリデーで来加。最初は何もわからなかったけれど、SyncBudsのイベントで出会った仲間と支え合い、現地でエンジニアとしての一歩を踏み出した。今はRyugaku+で同じ立場の人を支えている。",
    photo: "/images/members/avatar-04.png",
    featured: true,
  },
  {
    id: 2,
    name: "Haruka M.",
    status: "current",
    cohort: 6,
    team: "Engagement チーム",
    role: "語学留学 → Co-op プログラム",
    comment:
      "右も左もわからない状態で参加しました。今は自分がオンボーディングする側になれて、挑戦の連鎖を感じています。",
    body: "語学留学からCo-opへ。受け取る側だった自分が、今は新しいメンバーを迎える側に。「挑戦の連鎖」を一番体現しているメンバーのひとり。",
    photo: "/images/members/avatar-03.png",
    featured: true,
  },
  {
    id: 3,
    name: "Takumi N.",
    status: "alumni",
    cohort: 4,
    team: "Vancouver Osusume IGチーム",
    role: "バンおすIG → 帰国後 SNSマーケ",
    comment:
      "バンクーバーおすすめでコンテンツ制作を学んで、帰国後の仕事に直結しました。経験が本物だと実感できる場所です。",
    body: "バンおすのInstagram運用でコンテンツ制作スキルを磨き、帰国後はSNSマーケターとして活躍。SyncBudsでの経験がそのままキャリアになった。",
    photo: "/images/members/avatar-14.png",
    featured: true,
  },
  {
    id: 4,
    name: "Mei K.",
    status: "current",
    cohort: 6,
    team: "Vancouver Osusume WEBチーム",
    role: "正規留学（カレッジ）/ デザイン専攻",
    comment:
      "デザインを学びながら、実際に人に使われるWebサイトを作れる。学校だけでは得られない実践の場です。",
    body: "カレッジでデザインを学ぶ傍ら、バンおすの公式サイト制作に参加。授業の課題ではなく「本番」を経験できることに価値を感じている。",
    photo: "/images/members/avatar-15.png",
  },
  {
    id: 5,
    name: "Sota H.",
    status: "current",
    cohort: 5,
    team: "Sponsors / Sales",
    role: "ワーホリ / 元営業職",
    comment:
      "日本での営業経験を活かしつつ、英語環境での商談にも挑戦中。失敗してもいい場所だから踏み出せます。",
    body: "前職の営業経験を持ち込み、スポンサー獲得チームで活動。英語での商談という新しい挑戦に、仲間の支えを受けながら取り組んでいる。",
    photo: "/images/members/avatar-08.png",
  },
  {
    id: 6,
    name: "Rina T.",
    status: "current",
    cohort: 6,
    team: "Ecosystem PR（note）",
    role: "語学留学 / ライター志望",
    comment:
      "自分の留学体験を記事にして、これから来る人の役に立てる。書くことが誰かの一歩になるのが嬉しい。",
    body: "留学経験者視点の記事をnoteで執筆。自分が渡航前に欲しかった情報を、次の挑戦者に届けることをミッションにしている。",
    photo: "/images/members/avatar-10.png",
  },
  {
    id: 7,
    name: "Kenta A.",
    status: "current",
    cohort: 5,
    team: "Vancouver Osusume IGチーム",
    role: "ワーホリ / 飲食業勤務",
    comment:
      "現地のリアルな情報を発信する側に回れた。働きながらでも貢献できるのがSyncBudsのいいところ。",
    body: "現地レストランで働きながら、バンおすのIGでリアルな現地情報を発信。フルタイムの仕事と両立しながら活動するメンバーの代表例。",
    photo: "/images/members/avatar-16.png",
  },
  {
    id: 8,
    name: "Aoi F.",
    status: "current",
    cohort: 6,
    team: "Engagement チーム",
    role: "Co-op / マーケティング専攻",
    comment:
      "イベント運営を通して、人と人をつなぐ楽しさを知りました。ここでの経験を将来の仕事に活かしたい。",
    body: "Co-opでマーケティングを学びながら、コミュニティイベントの企画・運営を担当。人をつなぐ役割にやりがいを感じている。",
    photo: "/images/members/avatar-13.png",
  },
  {
    id: 9,
    name: "Daiki O.",
    status: "current",
    cohort: 5,
    team: "Ryugaku+ チーム",
    role: "正規留学（大学）/ CS専攻",
    comment:
      "学んだプログラミングを、実際のプロダクト開発で試せる。Ryugaku+は自分にとって最高の実験場です。",
    body: "大学でコンピュータサイエンスを学び、Ryugaku+のWebアプリ開発に参加。理論を実プロダクトで試せる環境を最大限に活かしている。",
    photo: "/images/members/avatar-06.png",
  },
  {
    id: 10,
    name: "Nanami I.",
    status: "current",
    cohort: 6,
    team: "Ecosystem PR（X）",
    role: "語学留学 / 渡航前から参加",
    comment:
      "渡航前からオンラインで参加できました。日本にいながら海外コミュニティの一員になれるなんて。",
    body: "渡航前から日本でオンライン参加。X（旧Twitter）で留学前層への発信を担当し、現地に来る前から仲間とつながっている。",
    photo: "/images/members/avatar-12.png",
  },
  {
    id: 11,
    name: "Sho W.",
    status: "current",
    cohort: 5,
    team: "Sponsors / Sales",
    role: "ワーホリ / 元イベント運営",
    comment:
      "企業との連携を一から作る経験は、どこでもできるものじゃない。責任ある役割を任せてもらえます。",
    body: "スポンサー企業とのパートナーシップ構築を担当。ゼロから関係を作る経験を通じて、ビジネス開発のスキルを磨いている。",
    photo: "/images/members/avatar-09.png",
  },
  {
    id: 12,
    name: "Yui N.",
    status: "current",
    cohort: 6,
    team: "Vancouver Osusume WEBチーム",
    role: "Co-op / Web開発",
    comment:
      "メンバー紹介ページを自分たちで作っています。誰かの挑戦を可視化する仕事に誇りを持っています。",
    body: "バンおすとSyncBudsのWebサイト制作に従事。メンバーの挑戦を「見える形」にすることにやりがいを感じている。",
    photo: "/images/members/avatar-02.png",
  },
  {
    id: 13,
    name: "Riku S.",
    status: "current",
    cohort: 5,
    team: "Ryugaku+ チーム",
    role: "ワーホリ / カスタマーサポート",
    comment:
      "相談に乗る側として、自分が悩んだ経験がそのまま誰かの役に立つ。過去の自分を救っている感覚です。",
    body: "Ryugaku+で留学生の相談対応を担当。自身が渡航初期に抱えた悩みを糧に、同じ立場の人を支えている。",
    photo: "/images/members/avatar-01.png",
  },
  {
    id: 14,
    name: "Hina M.",
    status: "current",
    cohort: 6,
    team: "Engagement チーム",
    role: "語学留学 / 元教員",
    comment:
      "人をサポートする経験を、新しい環境で活かせています。教えることと支えることは似ているんです。",
    body: "元教員の経験を活かし、新メンバーのオンボーディングと1on1を担当。人を支える役割でチームに安心感をもたらしている。",
    photo: "/images/members/avatar-17.png",
  },
  {
    id: 15,
    name: "Kaito Y.",
    status: "alumni",
    cohort: 3,
    team: "Vancouver Osusume IGチーム",
    role: "ワーホリ → 帰国後 動画クリエイター",
    comment:
      "バンおすで身につけた発信力で、今は独立して動画制作をしています。あの2年間が原点です。",
    body: "バンおすで動画コンテンツを制作。帰国後はフリーランスの動画クリエイターとして独立。SyncBudsでの経験がキャリアの土台になった。",
    photo: "/images/members/avatar-07.png",
  },
  {
    id: 16,
    name: "Saki E.",
    status: "alumni",
    cohort: 4,
    team: "Ecosystem PR（note）",
    role: "正規留学 → 帰国後 出版社勤務",
    comment:
      "noteで書き続けた経験が、編集の仕事につながりました。継続が力になることを学びました。",
    body: "留学体験記をnoteで継続執筆。その実績が評価され、帰国後は出版社で編集者として活躍している。",
    photo: "/images/members/avatar-05.png",
  },
  {
    id: 17,
    name: "Ren K.",
    status: "current",
    cohort: 6,
    team: "Sponsors / Sales",
    role: "Co-op / ビジネス専攻",
    comment:
      "教科書で読んだ営業を、本物の企業相手に実践できる。緊張するけど、これが一番の勉強です。",
    body: "ビジネスを学ぶCo-op生。授業で学んだ理論を、実際のスポンサー営業で試している。リアルな商談が最大の学びの場。",
    photo: "/images/members/avatar-11.png",
  },
  {
    id: 18,
    name: "Mio T.",
    status: "current",
    cohort: 5,
    team: "Vancouver Osusume IGチーム",
    role: "ワーホリ / フォトグラファー志望",
    comment:
      "撮った写真が何千人にも届く。趣味だった写真が、誰かの役に立つコンテンツになる実感があります。",
    body: "写真撮影が得意で、バンおすのビジュアルコンテンツを担当。趣味のスキルが多くの人に届くメディアの力を実感している。",
    photo: "/images/members/avatar-03.png",
  },
  {
    id: 19,
    name: "Gaku H.",
    status: "alumni",
    cohort: 3,
    team: "Engagement チーム",
    role: "ワーホリ → 帰国後 人事職",
    comment:
      "コミュニティ運営で学んだ「人の動かし方」が、今の人事の仕事の土台になっています。",
    body: "コミュニティ運営とイベント企画を担当。組織づくりの経験を活かし、帰国後は企業の人事として活躍している。",
    photo: "/images/members/avatar-08.png",
  },
  {
    id: 20,
    name: "Akari S.",
    status: "current",
    cohort: 6,
    team: "Ryugaku+ チーム",
    role: "語学留学 / コンテンツ企画",
    comment:
      "Ryugaku+の立ち上げに最初から関われる。何もないところから作る経験は、一生ものだと思います。",
    body: "Ryugaku+のコンテンツ企画を担当。サービス立ち上げ期ならではの「ゼロから作る」経験に大きなやりがいを感じている。",
    photo: "/images/members/avatar-02.png",
  },
];

// トップページ「仲間の声」用（featured 3名）
export const featuredMembers = members.filter((m) => m.featured);

// 現役メンバー
export const currentMembers = members.filter((m) => m.status === "current");

// アルムナイ
export const alumniMembers = members.filter((m) => m.status === "alumni");
