import type { PortableTextBlock } from 'sanity'

const WORDS_PER_MINUTE = 200

/** Extracts a flat string of every span of text inside a portable text body. */
export function blockContentToPlainText(body: PortableTextBlock[] = []): string {
  return body
    .map((block) => {
      if (block._type !== 'block' || !Array.isArray(block.children)) return ''
      return block.children.map((child: { text?: string }) => child.text || '').join('')
    })
    .join(' ')
}

export function getReadingTime(body: PortableTextBlock[] = []): number {
  const text = blockContentToPlainText(body)
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

export type Heading = { id: string; text: string; level: 2 | 3 }

export function getHeadings(body: PortableTextBlock[] = []): Heading[] {
  return body
    .filter(
      (block): block is PortableTextBlock =>
        block._type === 'block' && (block.style === 'h2' || block.style === 'h3'),
    )
    .map((block) => {
      const text = Array.isArray(block.children)
        ? block.children.map((child: { text?: string }) => child.text || '').join('')
        : ''
      return {
        id: block._key,
        text,
        level: block.style === 'h3' ? 3 : 2,
      } as Heading
    })
    .filter((heading) => heading.text.trim().length > 0)
}
