"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Lightbox } from "@/components/lightbox";
import type { gallery } from "@/data/gallery";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

type GalleryImage = (typeof gallery)[number];

const navButtonClass =
  "grid size-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:border-orange hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange";

export function GalleryCoverflow({ images }: { images: GalleryImage[] }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReducedMotion(mediaQuery.matches);
      const autoplay = swiperRef.current?.autoplay;
      if (!autoplay) return;
      if (mediaQuery.matches) autoplay.stop();
      else autoplay.start();
    };
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <Lightbox images={images}>
      {(open) => (
        <div className="flex flex-col gap-5">
          <Swiper
            modules={[EffectCoverflow, Navigation, Autoplay, A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            effect="coverflow"
            centeredSlides
            grabCursor
            rewind
            slidesPerView={1.15}
            spaceBetween={12}
            speed={reducedMotion ? 300 : 1500}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 28,
              stretch: 0,
              depth: 140,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
            }}
            a11y={{
              prevSlideMessage: "Previous project photo",
              nextSlideMessage: "Next project photo",
            }}
            className="w-full"
          >
            {images.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-secondary">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, (min-width: 640px) 66vw, 90vw"
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={(event) => open(index, event.currentTarget)}
                    aria-label={`View ${item.alt}`}
                    className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-orange"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous project photo"
              onClick={() => swiperRef.current?.slidePrev()}
              className={navButtonClass}
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next project photo"
              onClick={() => swiperRef.current?.slideNext()}
              className={navButtonClass}
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </Lightbox>
  );
}
