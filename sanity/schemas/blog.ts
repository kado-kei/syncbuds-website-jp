import { defineField, defineType } from "@sanity/types";

export const blogSchema = defineType({
  name: "blog",
  title: "ブログ記事",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "タイトル",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "スラッグ",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "公開日",
      type: "datetime",
    }),
    defineField({
      name: "coverImage",
      title: "カバー画像",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", title: "Alt テキスト", type: "string" },
      ],
    }),
    defineField({
      name: "excerpt",
      title: "要約",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "本文",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
  ],
  preview: {
    select: { title: "title", media: "coverImage" },
  },
});
