import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gallery } from "@/data/gallery";
import { GalleryCoverflow } from "@/components/gallery-coverflow";

const preview = gallery.slice(0, 7);

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="scroll-mt-20 overflow-hidden bg-background py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
            Our Work
          </p>
          <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            A few recent jobs around Savannah
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground">
            Clean, level, and done right. Here is a look at the kind of work we
            bring to every home.
          </p>
        </div>

        <div className="reveal mt-8 sm:mt-10">
          <GalleryCoverflow images={preview} />
        </div>

        <div className="reveal mt-8 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-heading text-sm font-bold text-background transition-colors hover:bg-orange"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
