import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'opportunity',
  title: 'Opportunity',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Strategic Land', value: 'Strategic Land' },
          { title: 'Mixed-Use Regeneration', value: 'Regeneration' },
          { title: 'Asset Repositioning', value: 'Asset Repositioning' },
          { title: 'Hospitality', value: 'Hospitality' },
          { title: 'Urban Redevelopment', value: 'Urban Redevelopment' },
          { title: 'Luxury Residential', value: 'Residential' },
          { title: 'Development Partnership', value: 'Development Partnership' },
          { title: 'Commercial', value: 'Commercial' },
          { title: 'Other', value: 'Other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'Active' },
          { title: 'Pipeline', value: 'Pipeline' },
        ],
        layout: 'radio',
      },
      initialValue: 'Active',
      validation: (Rule) => Rule.required(),
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
      rows: 3,
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Homepage',
      type: 'boolean',
      description: 'Show in the Active Opportunities section on the homepage',
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
    {
      title: 'Status, then Title',
      name: 'statusTitle',
      by: [
        { field: 'status', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      status: 'status',
    },
    prepare({ title, subtitle, status }) {
      return {
        title,
        subtitle: `${status} — ${subtitle || 'No location'}`,
      }
    },
  },
})
