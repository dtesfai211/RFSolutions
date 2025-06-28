import { defineType } from 'sanity'

export const tagType = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Tag Title" },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
    },
  ],
})