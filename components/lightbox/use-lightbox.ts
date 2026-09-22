import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { RefObject } from "react";
import type { GalleryItem } from "@/data/gallery";
import { lockBodyScroll, unlockBodyScroll } from "./scroll-lock";

type UseLightboxResult = {
  activeIndex: number | null;
  activeImage: GalleryItem | null;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
  dialogRef: RefObject<HTMLDivElement | null>;
  neighborSrcs: string[];
  open: (index: number, trigger: HTMLElement) => void;
  close: () => void;
  move: (direction: 1 | -1) => void;
};

// Return the neighboring image sources that should be preloaded for navigation.
function getNeighborSrcs(images: GalleryItem[], activeIndex: number | null) {
  if (activeIndex === null || images.length < 2) return [];
  const next = images[(activeIndex + 1) % images.length]?.src;
  const prev = images[(activeIndex - 1 + images.length) % images.length]?.src;
  return [next, prev].filter(Boolean) as string[];
}

// Manage active image state, navigation, focus, and keyboard behavior.
export function useLightbox(images: GalleryItem[]): UseLightboxResult {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousTriggerRef = useRef<HTMLElement | null>(null);
  const isOpen = activeIndex !== null;
  const activeImage =
    activeIndex === null ? null : (images[activeIndex] ?? null);

  // Open an image and remember the thumbnail that should regain focus later.
  const open = useCallback((index: number, trigger: HTMLElement) => {
    previousTriggerRef.current = trigger;
    setActiveIndex(index);
  }, []);

  // Close the viewer and return keyboard focus to the original thumbnail.
  const close = useCallback(() => {
    setActiveIndex(null);
    previousTriggerRef.current?.focus();
    previousTriggerRef.current = null;
  }, []);

  // Move through the supplied image set, wrapping at either end.
  const move = useCallback(
    (direction: 1 | -1) => {
      setActiveIndex((currentIndex) => {
        if (currentIndex === null || images.length < 2) return currentIndex;
        return (currentIndex + direction + images.length) % images.length;
      });
    },
    [images.length],
  );

  const neighborSrcs = useMemo(
    () => getNeighborSrcs(images, activeIndex),
    [activeIndex, images],
  );

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();
    lockBodyScroll();

    // Handle keyboard navigation, closing, and focus trapping in the dialog.
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        move(-1);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        move(1);
        return;
      }
      if (event.key !== "Tab") return;

      const focusableElements =
        dialogRef.current?.querySelectorAll<HTMLElement>(
          "button:not([disabled])",
        ) ?? [];
      if (focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      unlockBodyScroll();
    };
  }, [isOpen, close, move]);

  // Release the scroll lock if the component unmounts while the viewer is open.
  useEffect(() => {
    return () => {
      if (activeIndex !== null) unlockBodyScroll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    activeIndex,
    activeImage,
    closeButtonRef,
    dialogRef,
    neighborSrcs,
    open,
    close,
    move,
  };
}
