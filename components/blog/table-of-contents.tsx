"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/reading-time";

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-100px 0px -70% 0px" },
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <details
      className="rounded-2xl border border-border bg-card p-5 lg:open"
      open
    >
      <summary className="cursor-pointer list-none font-heading text-xs font-bold uppercase tracking-[0.15em] text-orange">
        On this page
      </summary>
      <nav aria-label="Table of contents">
        <ul className="mt-4 flex flex-col gap-2.5 border-l border-border pl-4">
          {headings.map((heading) => (
            <li key={heading.id} className={heading.level === 3 ? "pl-3" : ""}>
              <a
                href={`#${heading.id}`}
                className={`block text-sm leading-snug transition-colors ${
                  activeId === heading.id
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
