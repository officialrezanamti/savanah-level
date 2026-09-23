'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import type { Image as SanityImage } from 'sanity'

import { urlFor } from '@/sanity/lib/image'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

type GalleryImage = SanityImage & { alt?: string; caption?: string; _key: string }

export function PostGallery({ images }: { images: GalleryImage[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const mainSwiperRef = useRef<SwiperType | null>(null)

  if (images.length === 0) return null

  return (
    <div className="mt-8">
      <div className="relative overflow-hidden rounded-2xl bg-secondary">
        <Swiper
          modules={[Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={(swiper) => {
            mainSwiperRef.current = swiper
          }}
          className="aspect-video"
        >
          {images.map((image) => (
            <SwiperSlide key={image._key}>
              <div className="relative size-full">
                <Image
                  src={urlFor(image).width(1200).height(675).url()}
                  alt={image.alt || 'Project photo'}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => mainSwiperRef.current?.slidePrev()}
              className="absolute left-3 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-foreground shadow-sm transition-colors hover:bg-background"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => mainSwiperRef.current?.slideNext()}
              className="absolute right-3 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-foreground shadow-sm transition-colors hover:bg-background"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          slidesPerView={4.5}
          spaceBetween={10}
          className="mt-3"
        >
          {images.map((image) => (
            <SwiperSlide key={image._key} className="cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-lg opacity-60 transition-opacity [.swiper-slide-thumb-active_&]:opacity-100">
                <Image
                  src={urlFor(image).width(200).height(112).url()}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}
