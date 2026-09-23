import { groq } from "next-sanity";

export const POST_CARD_FIELDS = groq`
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt,
  featured,
  "categories": categories[]{ "title": @, "slug": @ },
  "author": author->{ name, image }
`;

export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(featuredOrder asc, publishedAt desc)[0...10] {
    ${POST_CARD_FIELDS}
  }
`;

export const allPostsQuery = groq`
  *[_type == "post"
    && featured != true
    && (!defined($category) || $category in categories)
  ] | order(publishedAt desc)[$start...$end] {
    ${POST_CARD_FIELDS}
  }
`;

export const postCountQuery = groq`
  count(*[_type == "post"
    && featured != true
    && (!defined($category) || $category in categories)
  ])
`;

export const allCategoriesQuery = groq`
  array::unique(*[_type == "post" && defined(categories)].categories[])[defined(@)] | order(@ asc)
`;

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
    "categories": categories[]{ "title": @, "slug": @ },
    "author": author->{ name, role, image }
  }
`;

export const relatedPostsQuery = groq`
  *[_type == "post" && slug.current != $slug && count((categories)[@ in $categorySlugs]) > 0]
    | order(publishedAt desc)[0...3] {
      ${POST_CARD_FIELDS}
    }
`;

export const recentPostsFallbackQuery = groq`
  *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3] {
    ${POST_CARD_FIELDS}
  }
`;

export const allPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;
