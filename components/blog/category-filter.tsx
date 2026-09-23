import Link from 'next/link'

import type { Category } from '@/lib/blog-types'

export function CategoryFilter({
  categories,
  active,
}: {
  categories: Category[]
  active?: string
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Link
        href="/blog"
        className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
          !active
            ? 'bg-navy text-navy-foreground'
            : 'bg-secondary text-foreground hover:bg-secondary/70'
        }`}
      >
        All Posts
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/blog?category=${category.slug}`}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            active === category.slug
              ? 'bg-navy text-navy-foreground'
              : 'bg-secondary text-foreground hover:bg-secondary/70'
          }`}
        >
          {category.title}
        </Link>
      ))}
    </div>
  )
}
