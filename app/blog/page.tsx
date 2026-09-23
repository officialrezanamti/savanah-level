import type { Metadata } from 'next'

import { site } from '@/data/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { FeaturedSlider } from '@/components/blog/featured-slider'
import { CategoryFilter } from '@/components/blog/category-filter'
import { PostCard } from '@/components/blog/post-card'
import { client } from '@/sanity/lib/client'
import { allCategoriesQuery, allPostsQuery, featuredPostsQuery } from '@/sanity/lib/queries'
import type { Category, PostCard as PostCardType } from '@/lib/blog-types'

export const metadata: Metadata = {
  title: `Blog | ${site.name}`,
  description:
    'Home improvement tips, mounting guides, and project stories from the Savannah Level team, serving Savannah, Georgetown, Pooler, and the surrounding areas.',
  alternates: { canonical: '/blog' },
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams

  const [featuredPosts, posts, categories] = await Promise.all([
    client.fetch<PostCardType[]>(featuredPostsQuery).catch(() => []),
    client.fetch<PostCardType[]>(allPostsQuery, { category: category || null }).catch(() => []),
    client.fetch<Category[]>(allCategoriesQuery).catch(() => []),
  ])

  return (
    <>
      <SiteHeader />
      <main className="pb-20 lg:pb-0">
        <section className="bg-navy py-14 text-navy-foreground sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex flex-col gap-5">
              <h1 className="text-balance font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                The Savannah Level Blog
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
                Mounting tips, appliance install guides, and real project
                stories from around Savannah, Georgetown, and Pooler.
              </p>
            </div>
          </div>
        </section>

        {!category && featuredPosts.length > 0 && (
          <section className="bg-background py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <FeaturedSlider posts={featuredPosts} />
            </div>
          </section>
        )}

        <section className="bg-background pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {categories.length > 0 && (
              <div className="mb-10">
                <CategoryFilter categories={categories} active={category} />
              </div>
            )}

            {posts.length === 0 ? (
              <div className="rounded-2xl border border-border bg-card p-12 text-center">
                <p className="text-pretty text-base text-muted-foreground">
                  No posts here yet. Check back soon or browse another category.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                  <PostCard key={post._id} post={post} priority={index === 0} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}
