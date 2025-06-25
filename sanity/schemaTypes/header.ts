// sanity/schemaTypes/header.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'href', type: 'string', title: 'Link' },
          ],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        { name: 'label', type: 'string', title: 'Label' },
        { name: 'href', type: 'string', title: 'Link' },
      ],
    }),
  ],
})
