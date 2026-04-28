import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      description: 'e.g. Founder & Development Director',
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials / Qualifications',
      type: 'string',
      description: 'e.g. BSc (Hons), MSc (Planning for Major Projects), MRTPI, MNAEA',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          marks: { decorators: [{ title: 'Strong', value: 'strong' }] },
        },
      ],
      description: 'Full biography. Each paragraph appears separately.',
    }),
    defineField({
      name: 'image',
      title: 'Portrait Photo',
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
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      initialValue: 1,
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
      title: 'name',
      subtitle: 'jobTitle',
      media: 'image',
    },
  },
})
