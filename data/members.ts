// ============================================================
// SyncBuds メンバーデータ
// ------------------------------------------------------------
// 実在するメンバーだけを入れること。
// 以前ここには架空の20名が入っていたが、本番に出る事故を防ぐため削除した。
//
// 掲載には本人のオプトインが必須。参加者同意書には掲載・肖像の条項が
// 無いため、同意はサイト掲載用に別途取得する。
//   - 表示名は本名でもニックネームでもよい（displayName）
//   - 顔写真を出したくない人は白黒イラストを選べる（portraitStyle）
//   - 卒業後も載せてよいかは入会時に確認する（publishAfterLeaving）
//
// テンプレート定義: projects/syncbuds-core/onboarding/member-template.md
// Sanityスキーマ:   sanity/schemas/story.ts
// ============================================================

export type MemberStatus = "current" | "alumni";
export type PortraitStyle = "illustration" | "photo";

export interface Member {
  id: number;
  /** 表示名。本名でもニックネームでもよい */
  displayName: string;
  status: MemberStatus;
  /** 期生 */
  cohort: number;
  team: string;
  /** 経歴の一行サマリー（例: ワーホリ → エンジニア転職） */
  role: string;
  /** 短い引用コメント（カード用 / 60〜90字） */
  comment: string;
  /** 紹介本文（詳細ページ用 / 120〜200字） */
  body: string;
  /** 顔写真を出すか、白黒イラストにするか */
  portraitStyle: PortraitStyle;
  /** 画像パス */
  photo: string;
  /** 掲載同意を取った日（YYYY-MM-DD）。未取得なら掲載しない */
  consentedAt: string;
  /** 卒業後も掲載を続けてよいか */
  publishAfterLeaving: boolean;
  /** トップページ「仲間の声」に出すか */
  featured?: boolean;
}

// 掲載同意が取れたメンバーからここに追加する。
export const members: Member[] = [];

/** 同意が取れているものだけを通す安全弁 */
const consented = members.filter((m) => m.consentedAt);

export const featuredMembers = consented.filter((m) => m.featured);
export const currentMembers = consented.filter((m) => m.status === "current");
export const alumniMembers = consented.filter(
  (m) => m.status === "alumni" && m.publishAfterLeaving,
);
