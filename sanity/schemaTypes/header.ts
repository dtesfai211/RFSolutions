// sanity/schemaTypes/header.ts
import { defineType, defineField } from "sanity"

export default defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "href", title: "URL", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "services",
      title: "Services Dropdown Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Service Name", type: "string" },
            { name: "href", title: "URL", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Button Label",
      type: "string",
    }),
  ],
})
