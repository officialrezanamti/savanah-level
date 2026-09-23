import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";

import { urlFor } from "@/sanity/lib/image";
import { CodeBlock } from "@/components/blog/code-block";
import { VideoEmbed } from "@/components/blog/video-embed";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => (
      <h2
        id={value._key}
        className="mt-12 scroll-mt-24 font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3
        id={value._key}
        className="mt-8 scroll-mt-24 font-heading text-xl font-bold tracking-tight text-foreground"
      >
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-orange bg-secondary py-4 pl-5 pr-4 font-heading text-lg font-medium leading-relaxed text-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 flex flex-col gap-2 pl-5 text-base leading-relaxed text-muted-foreground [&>li]:list-disc">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 flex flex-col gap-2 pl-5 text-base leading-relaxed text-muted-foreground [&>li]:list-decimal">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    "strike-through": ({ children }) => <s>{children}</s>,
    highlight: ({ children }) => (
      <mark className="rounded-sm bg-orange/25 px-1 text-foreground">
        {children}
      </mark>
    ),
    sup: ({ children }) => <sup>{children}</sup>,
    sub: ({ children }) => <sub>{children}</sub>,
    textColor: ({ children, value }) => (
      <span style={{ color: value?.color || undefined }}>{children}</span>
    ),
    code: ({ children }) => (
      <code className="rounded-sm bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <Link
        href={value?.href || "#"}
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={
          value?.href?.startsWith("http") ? "noopener noreferrer" : undefined
        }
        className="font-medium text-blue underline underline-offset-2 hover:text-navy"
      >
        {children}
      </Link>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="mt-8">
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image
              src={urlFor(value).width(1200).height(675).url()}
              alt={value.alt || ""}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }) => (
      <CodeBlock
        code={value?.code || ""}
        language={value?.language}
        filename={value?.filename}
      />
    ),
    videoEmbed: ({ value }) => (
      <VideoEmbed url={value?.url} caption={value?.caption} />
    ),
  },
};

export function PostBody({ body }: { body: PortableTextBlock[] }) {
  return (
    <div className="max-w-none">
      <PortableText value={body} components={components} />
    </div>
  );
}

export { slugify };
