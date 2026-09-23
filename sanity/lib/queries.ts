import { groq } from 'next-sanity'

export const POST_CARD_FIELDS = groq`
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt,
  featured,
  "categories": categories[]->{ title, "slug": slug.slug },
  "author": author->{ name, image }
`

export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc)[0...5] {
    ${POST_CARD_FIELDS}
  }
`

export const allPostsQuery = groq`
  *[_type == "post"
    && (!defined($category) || $category in categories[]->slug.current)
  ] | order(publishedAt desc) {
    ${POST_CARD_FIELDS}
  }
`

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    title,
    "slug": slug.current
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    excerpt,
    coverImage,
    gallery,
    publishedAt,
    seoTitle,
    seoDescription,
    body,
    "categories": categories[]->{ title, "slug": slug.current },
    "author": author->{ name, role, image }
  }
`

export const relatedPostsQuery = groq`
  *[_type == "post" && slug.current != $slug && count((categories[]->slug.current)[@ in $categorySlugs]) > 0]
    | order(publishedAt desc)[0...3] {
      ${POST_CARD_FIELDS}
    }
`

export const recentPostsFallbackQuery = groq`
  *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3] {
    ${POST_CARD_FIELDS}
  }
`

export const allPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`
