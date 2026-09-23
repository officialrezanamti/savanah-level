import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock } from "lucide-react";

import { site } from "@/data/site";
import { SITE_URL } from "@/app/sitemap";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { PostBody } from "@/components/blog/post-body";
import { PostGallery } from "@/components/blog/post-gallery";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { ShareButtons } from "@/components/blog/share-buttons";
import { RelatedPosts } from "@/components/blog/related-posts";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  allPostSlugsQuery,
  postBySlugQuery,
  recentPostsFallbackQuery,
  relatedPostsQuery,
} from "@/sanity/lib/queries";
import type { PostCard as PostCardType, PostDetail } from "@/lib/blog-types";
import { getHeadings, getReadingTime } from "@/lib/reading-time";

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(allPostSlugsQuery).catch(() => []);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client
    .fetch<PostDetail | null>(postBySlugQuery, { slug })
    .catch(() => null);

  if (!post) return { title: `Blog | ${site.name}` };

  const title = post.seoTitle || `${post.title} | ${site.name} Blog`;
  const description = post.seoDescription || post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      images: post.coverImage
        ? [urlFor(post.coverImage).width(1200).height(630).url()]
        : [],
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client
    .fetch<PostDetail | null>(postBySlugQuery, { slug })
    .catch(() => null);

  if (!post) notFound();

  const categorySlugs = post.categories?.map((c) => c.slug) ?? [];

  const related = categorySlugs.length
    ? await client
        .fetch<PostCardType[]>(relatedPostsQuery, { slug, categorySlugs })
        .catch(() => [])
    : [];

  const relatedPosts = related.length
    ? related
    : await client
        .fetch<PostCardType[]>(recentPostsFallbackQuery, { slug })
        .catch(() => []);

  const headings = getHeadings(post.body);
  const readingTime = getReadingTime(post.body);
  const postUrl = new URL(`/blog/${slug}`, SITE_URL).toString();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: post.author
      ? { "@type": "Person", name: post.author.name }
      : undefined,
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: postUrl,
    image: post.coverImage
      ? urlFor(post.coverImage).width(1200).height(630).url()
      : undefined,
  };

  return (
    <>
      <SiteHeader />
      <main className="pb-20 lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />

        <section className="bg-navy pb-8 pt-10 text-navy-foreground sm:pt-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-white/60"
            >
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <ChevronRight className="size-3.5" />
              <span className="truncate text-white/80">{post.title}</span>
            </nav>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.categories?.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog?category=${cat.slug}`}
                  className="rounded-full bg-orange px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-orange-foreground"
                >
                  {cat.title}
                </Link>
              ))}
            </div>

            <h1 className="mt-4 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              {post.author && (
                <div className="flex items-center gap-3">
                  {post.author.image ? (
                    <div className="relative size-10 overflow-hidden rounded-full bg-white/10">
                      <Image
                        src={urlFor(post.author.image)
                          .width(80)
                          .height(80)
                          .url()}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="grid size-10 place-items-center rounded-full bg-white/10 text-sm font-bold text-white">
                      {post.author.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {post.author.name}
                    </p>
                    {post.author.role && (
                      <p className="text-xs text-white/60">
                        {post.author.role}
                      </p>
                    )}
                  </div>
                </div>
              )}
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span>{formatDate(post.publishedAt)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </section>

        {post.coverImage && (
          <section className="bg-background">
            <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
              <div className="relative aspect-video overflow-hidden rounded-3xl">
                <Image
                  src={urlFor(post.coverImage).width(1400).height(788).url()}
                  alt={post.coverImage.alt || post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        )}

        <section className="bg-background py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
              <article className="min-w-0">
                {headings.length > 0 && (
                  <div className="mb-8 lg:hidden">
                    <TableOfContents headings={headings} />
                  </div>
                )}
                <PostBody body={post.body} />
                {post.gallery && post.gallery.length > 0 && (
                  <PostGallery images={post.gallery} />
                )}

                <div className="mt-10 border-t border-border pt-6">
                  <ShareButtons url={postUrl} title={post.title} />
                </div>
              </article>

              {headings.length > 0 && (
                <aside className="hidden lg:block">
                  <div className="sticky top-24">
                    <TableOfContents headings={headings} />
                  </div>
                </aside>
              )}
            </div>

            <RelatedPosts posts={relatedPosts} />
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}
