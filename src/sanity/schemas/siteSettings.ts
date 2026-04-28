import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — only one document of this type should exist
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'e.g. +44 (0)1234 567 890',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'e.g. contact@wollastonhanks.com',
    }),
    defineField({
      name: 'officeLocations',
      title: 'Office Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'city', title: 'City', type: 'string' }),
            defineField({ name: 'country', title: 'Country', type: 'string' }),
          ],
          preview: {
            select: { title: 'city', subtitle: 'country' },
          },
        },
      ],
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main heading on the homepage hero (default: WOLLASTON HANKS)',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      description: 'Subtitle below the gold divider (default: Planning-Led Strategic Development & Investment Platform)',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      description: 'Body text in the homepage hero section',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
