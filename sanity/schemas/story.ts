import { defineField, defineType } from "@sanity/types";

export const storySchema = defineType({
  name: "story",
  title: "ストーリー",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "名前",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "ステータス",
      type: "string",
      description: "現役メンバーかアルムナイ（卒業生）か",
      options: {
        list: [
          { title: "現役メンバー", value: "current" },
          { title: "アルムナイ", value: "alumni" },
        ],
        layout: "radio",
      },
      initialValue: "current",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cohort",
      title: "期生",
      type: "number",
      description: "例: 6（第6期生）。アルムナイの整理にも使う",
    }),
    defineField({
      name: "team",
      title: "所属チーム",
      type: "string",
      description: "例: Vancouver Osusume IGチーム / Ryugaku+ / Engagement",
    }),
    defineField({
      name: "role",
      title: "役割 / 経歴",
      type: "string",
      description: "例: ワーホリ → エンジニア転職",
    }),
    defineField({
      name: "comment",
      title: "コメント",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo",
      title: "プロフィール写真",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", title: "Alt テキスト", type: "string" },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "公開日",
      type: "datetime",
    }),
    defineField({
      name: "featured",
      title: "トップページに表示",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo", status: "status" },
    prepare({ title, subtitle, media, status }) {
      const badge = status === "alumni" ? "🎓 アルムナイ" : "● 現役";
      return { title: `${badge}  ${title}`, subtitle, media };
    },
  },
});
