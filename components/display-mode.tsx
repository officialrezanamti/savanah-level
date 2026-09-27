"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement only: content ships fully visible in the server HTML
 * ("feed mode"). After hydration this opts `.reveal` blocks into "display mode"
 * and reveals each one exactly once when the visitor reaches or interacts with
 * it, so nothing flips back and forth while scrolling.
 */
export function DisplayMode() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );

    const display = (el: Element) => el.classList.add("is-displayed");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          display(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    for (const el of targets) {
      if (el.getBoundingClientRect().top < window.innerHeight) display(el);
      else observer.observe(el);
    }

    const onInteract = (event: Event) => {
      const target = (event.target as Element | null)?.closest?.(".reveal");
      if (target) display(target);
    };
    document.addEventListener("focusin", onInteract);
    document.addEventListener("pointerdown", onInteract);

    root.classList.add("display-mode");

    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", onInteract);
      document.removeEventListener("pointerdown", onInteract);
      root.classList.remove("display-mode");
      for (const el of targets) el.classList.remove("is-displayed");
    };
  }, []);

  return null;
}
