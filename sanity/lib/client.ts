import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-06-10",
  useCdn: process.env.NODE_ENV === "production",
});

// ── GROQ Queries ─────────────────────────────────────────────

/** トップページ用 Featured Stories (最大3件) */
export const FEATURED_STORIES_QUERY = `
  *[_type == "story" && featured == true] | order(publishedAt desc)[0...3] {
    _id, name, role, comment,
    photo { asset->{ url }, alt }
  }
`;

/** 現役メンバー一覧（メンバー紹介ページ用 / 〜20名想定） */
export const CURRENT_MEMBERS_QUERY = `
  *[_type == "story" && status == "current"] | order(cohort desc, publishedAt desc) {
    _id, name, role, team, cohort, comment,
    photo { asset->{ url }, alt }
  }
`;

/** アルムナイ一覧（軽量・名簿型 / 今後増える前提） */
export const ALUMNI_QUERY = `
  *[_type == "story" && status == "alumni"] | order(cohort asc, name asc) {
    _id, name, role, team, cohort,
    photo { asset->{ url }, alt }
  }
`;

/** ブログ記事一覧 */
export const ALL_BLOGS_QUERY = `
  *[_type == "blog"] | order(publishedAt desc) {
    _id, title, slug, publishedAt, excerpt,
    coverImage { asset->{ url }, alt }
  }
`;

/** ブログ記事詳細 */
export const BLOG_BY_SLUG_QUERY = `
  *[_type == "blog" && slug.current == $slug][0] {
    _id, title, publishedAt, body,
    coverImage { asset->{ url }, alt }
  }
`;
