import type { PostCard as PostCardType } from '@/lib/blog-types'
import { PostCard } from '@/components/blog/post-card'

export function RelatedPosts({ posts }: { posts: PostCardType[] }) {
  if (posts.length === 0) return null

  return (
    <section className="mt-16 border-t border-border pt-12">
      <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
        Keep reading
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  )
}
