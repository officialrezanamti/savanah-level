'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import type { PostCard } from '@/lib/blog-types'
import { urlFor } from '@/sanity/lib/image'

import 'swiper/css'
import 'swiper/css/navigation'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function FeaturedSlider({ posts }: { posts: PostCard[] }) {
  const swiperRef = useRef<SwiperType | null>(null)

  if (posts.length === 0) return null

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        loop={posts.length > 1}
        autoplay={posts.length > 1 ? { delay: 6000, disableOnInteraction: false } : false}
        spaceBetween={0}
        className="overflow-hidden rounded-3xl"
      >
        {posts.map((post) => (
          <SwiperSlide key={post._id}>
            <Link
              href={`/blog/${post.slug.current}`}
              className="brand-gradient-overlay relative flex min-h-[420px] items-end overflow-hidden sm:min-h-[480px]"
            >
              {post.coverImage && (
                <Image
                  src={urlFor(post.coverImage).width(1600).height(900).url()}
                  alt={post.coverImage.alt || post.title}
                  fill
                  priority
                  className="object-cover mix-blend-luminosity opacity-40"
                />
              )}
              <div className="relative z-10 flex max-w-2xl flex-col gap-3 p-8 sm:p-12">
                {post.categories?.[0] && (
                  <span className="w-fit rounded-full bg-orange px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-orange-foreground">
                    {post.categories[0].title}
                  </span>
                )}
                <h2 className="text-balance font-heading text-2xl font-extrabold leading-tight text-white sm:text-4xl">
                  {post.title}
                </h2>
                <p className="line-clamp-2 max-w-xl text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
                  {post.excerpt}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  {formatDate(post.publishedAt)}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {posts.length > 1 && (
        <div className="mt-4 flex items-center justify-end gap-2">
          <button
            type="button"
            aria-label="Previous featured post"
            onClick={() => swiperRef.current?.slidePrev()}
            className="grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-orange hover:text-orange"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next featured post"
            onClick={() => swiperRef.current?.slideNext()}
            className="grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-orange hover:text-orange"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </div>
  )
}
