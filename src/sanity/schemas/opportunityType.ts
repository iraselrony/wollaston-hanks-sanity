import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'opportunityType',
  title: 'Opportunity Type (Homepage Grid)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "Strategic Land", "Mixed-Use Regeneration"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first (left to right, top to bottom)',
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: 'Sort Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
