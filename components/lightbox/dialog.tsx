import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { LightboxDialogProps } from "./types";

// Render the full-screen image viewer and its navigation controls.
export function LightboxDialog({
  activeImage,
  images,
  neighborSrcs,
  close,
  move,
  closeButtonRef,
  dialogRef,
}: LightboxDialogProps) {
  return (
    <div
      ref={dialogRef}
      data-lightbox
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image viewer"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={close}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange sm:right-8"
      >
        <X className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="relative h-[min(80vh,calc(100vw*0.75))] w-[min(90vw,1200px)]">
        <Image
          key={activeImage.src}
          src={activeImage.src || "/placeholder.svg"}
          alt={activeImage.alt}
          fill
          sizes="(max-width: 1200px) 90vw, 1200px"
          className="object-contain"
          priority
        />
      </div>

      {neighborSrcs.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={1}
          height={1}
          className="hidden"
          aria-hidden="true"
          loading="eager"
        />
      ))}

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange sm:left-8"
          >
            <ChevronLeft className="h-7 w-7" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange sm:right-8"
          >
            <ChevronRight className="h-7 w-7" aria-hidden="true" />
          </button>
        </>
      ) : null}
    </div>
  );
}
