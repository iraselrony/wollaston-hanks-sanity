import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'development',
  title: 'Development / Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'typeBadge',
      title: 'Type Badge',
      type: 'string',
      description: 'e.g. "Hospitality & Leisure", "Regeneration", "Strategic Development"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'statusBadge',
      title: 'Status Badge',
      type: 'string',
      options: {
        list: [
          { title: 'Case Study', value: 'Case Study' },
          { title: 'Illustrative Opportunity', value: 'Illustrative Opportunity' },
          { title: 'Development Investment Thesis', value: 'Development Investment Thesis' },
          { title: 'Active', value: 'Active' },
          { title: 'Completed', value: 'Completed' },
        ],
      },
      initialValue: 'Case Study',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bulletPoints',
      title: 'Bullet Points',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key highlights shown as bullet points (optional)',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Homepage',
      type: 'boolean',
      description: 'Show as the featured case study on the homepage (only one should be featured)',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first',
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
      subtitle: 'location',
      media: 'image',
    },
  },
})
