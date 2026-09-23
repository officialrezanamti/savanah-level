"use client";

import { useState } from "react";
import type { SVGProps } from "react";
import { Check, Link2 } from "lucide-react";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M18.9 2.6h3.2l-7 8.02 8.2 10.78h-6.4l-5.02-6.6-5.74 6.6H2.9l7.5-8.6L2.5 2.6h6.55l4.55 6.02Zm-1.12 16.9h1.77L7.32 4.42H5.42Z" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45Z" />
    </svg>
  );
}

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const links = [
    {
      label: "Share on Facebook",
      icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: "Share on X",
      icon: XIcon,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      label: "Share on LinkedIn",
      icon: LinkedInIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ];

  async function handleCopyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="flex items-center gap-2">
      <span className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
        Share
      </span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-orange hover:text-orange"
        >
          <link.icon className="size-4" aria-hidden="true" />
        </a>
      ))}
      <button
        type="button"
        onClick={handleCopyLink}
        aria-label="Copy link"
        className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-orange hover:text-orange"
      >
        {copied ? (
          <Check className="size-4 text-green" />
        ) : (
          <Link2 className="size-4" />
        )}
      </button>
    </div>
  );
}
