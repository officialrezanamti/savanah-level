import Image from 'next/image'
import Link from 'next/link'

import type { PostCard as PostCardType } from '@/lib/blog-types'
import { urlFor } from '@/sanity/lib/image'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function PostCard({ post, priority }: { post: PostCardType; priority?: boolean }) {
  const category = post.categories?.[0]

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        {post.coverImage && (
          <Image
            src={urlFor(post.coverImage).width(640).height(400).url()}
            alt={post.coverImage.alt || post.title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-orange px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-orange-foreground">
            {category.title}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs font-medium text-muted-foreground">{formatDate(post.publishedAt)}</p>
        <h3 className="text-balance font-heading text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-orange">
          {post.title}
        </h3>
        <p className="line-clamp-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        {post.author && (
          <div className="flex items-center gap-2 pt-1">
            {post.author.image ? (
              <div className="relative size-7 overflow-hidden rounded-full bg-secondary">
                <Image
                  src={urlFor(post.author.image).width(56).height(56).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="grid size-7 place-items-center rounded-full bg-navy text-xs font-bold text-navy-foreground">
                {post.author.name.charAt(0)}
              </div>
            )}
            <span className="text-xs font-medium text-foreground">{post.author.name}</span>
          </div>
        )}
      </div>
    </Link>
  )
}
