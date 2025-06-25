// sanity/schemaTypes/footer.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'links',
      title: 'Footer Links',
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
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
    }),
  ],
})
