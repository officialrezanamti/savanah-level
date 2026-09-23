import { PlayCircle } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const videoEmbedType = defineType({
  name: 'videoEmbed',
  title: 'Video embed',
  type: 'object',
  icon: PlayCircle,
  fields: [
    defineField({
      name: 'url',
      title: 'Video URL',
      description: 'Paste a YouTube or Vimeo link.',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'url' },
    prepare({ title }) {
      return { title: title || 'Video embed', subtitle: 'Video' }
    },
  },
})
