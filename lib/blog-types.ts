import type { Image, PortableTextBlock } from 'sanity'

export type PostCard = {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  coverImage: Image & { alt?: string }
  publishedAt: string
  featured?: boolean
  categories?: { title: string; slug: string }[]
  author?: { name: string; image?: Image } | null
}

export type PostDetail = {
  _id: string
  title: string
  excerpt: string
  coverImage: Image & { alt?: string }
  gallery?: (Image & { alt?: string; caption?: string; _key: string })[]
  publishedAt: string
  seoTitle?: string
  seoDescription?: string
  body: PortableTextBlock[]
  categories?: { title: string; slug: string }[]
  author?: { name: string; role?: string; image?: Image } | null
}

export type Category = { title: string; slug: string }
