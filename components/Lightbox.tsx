"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxImage = {
  src: string;
  alt?: string;
};

type LightboxProps = {
  images: LightboxImage[];
  open: boolean;
  initialIndex: number;
  onClose: () => void;
};

export default function Lightbox({
  images,
  open,
  initialIndex,
  onClose,
}: LightboxProps) {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    previousFocusedElement.current =
      document.activeElement as HTMLElement | null;

    setCurrentIndex(initialIndex);

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = "";

      previousFocusedElement.current?.focus();
      previousFocusedElement.current = null;
    };
  }, [open, initialIndex]);

  // کنترل Escape + Arrow keys
  useEffect(() => {
    if (!open || images.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();

        setCurrentIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();

        setCurrentIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }

      // Focus trap
      if (e.key === "Tab") {
        const focusableElements = document.querySelectorAll<HTMLElement>(
          '[data-lightbox] button, [data-lightbox] [href], [data-lightbox] input, [data-lightbox] select, [data-lightbox] textarea, [data-lightbox] [tabindex]:not([tabindex="-1"])'
        );

        const elements = Array.from(focusableElements);

        if (elements.length === 0) return;

        const firstElement = elements[0];
        const lastElement = elements[elements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (
          !e.shiftKey &&
          document.activeElement === lastElement
        ) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, images.length, onClose]);

  if (!mounted || !open || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return createPortal(
    <div
      data-lightbox
      role="dialog"
      aria-modal="true"
      aria-label="Show image"
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Close */}
      <button
        ref={closeButtonRef}
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
      >
        <X size={24} />
      </button>

      {/* Previous */}
      {images.length > 1 && (
        <button
          type="button"
          aria-label="Previous image"
          onClick={goPrev}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Image */}
      <div className="relative flex max-h-[95vh] max-w-[95vw] items-center justify-center">
        <img
          src={currentImage.src}
          alt={currentImage.alt || ""}
          className="max-h-[95vh] max-w-[95vw] object-contain"
        />
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          type="button"
          aria-label="Next image"
          onClick={goNext}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
        >
          <ChevronRight size={28} />
        </button>
      )}
    </div>,
    document.body
  );
}