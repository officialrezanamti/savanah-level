"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { gallery, type GalleryCategory } from "@/data/gallery";
import { services } from "@/data/services";
import { Lightbox } from "@/components/lightbox";

type Filter = "all" | GalleryCategory;

const categoryTitles = new Map(services.map((s) => [s.slug, s.title]));

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  const filters = useMemo(() => {
    const used = new Set<GalleryCategory>();
    for (const item of gallery) {
      if (item.category) used.add(item.category);
    }
    const ordered = services
      .filter((s) => used.has(s.slug))
      .map((s) => ({ value: s.slug as Filter, label: s.title }));
    return [{ value: "all" as Filter, label: "All Work" }, ...ordered];
  }, []);

  const items = useMemo(
    () =>
      filter === "all"
        ? gallery
        : gallery.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {filters.map((option) => {
          const active = filter === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setFilter(option.value)}
              aria-pressed={active}
              className={`rounded-full px-4 py-2 font-heading text-sm font-bold transition-colors ${
                active
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <Lightbox images={items}>
        {(open) => (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {items.map((item, index) => (
              <figure
                key={item.id}
                className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-secondary"
              >
                <button
                  type="button"
                  onClick={(event) => open(index, event.currentTarget)}
                  aria-label={`View ${item.alt}`}
                  className="absolute inset-0 z-10 cursor-zoom-in"
                />
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.category ? (
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-foreground/85 to-transparent p-3 font-heading text-xs font-bold uppercase tracking-wide text-background transition-transform duration-300 group-hover:translate-y-0">
                    {categoryTitles.get(item.category)}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        )}
      </Lightbox>
    </div>
  );
}
