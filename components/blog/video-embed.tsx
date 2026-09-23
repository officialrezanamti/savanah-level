function getEmbedUrl(url?: string) {
  if (!url) return null

  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/,
  )
  if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}`

  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`

  return null
}

export function VideoEmbed({ url, caption }: { url?: string; caption?: string }) {
  const embedUrl = getEmbedUrl(url)
  if (!embedUrl) return null

  return (
    <figure className="mt-8">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy">
        <iframe
          src={embedUrl}
          title={caption || 'Embedded video'}
          className="absolute inset-0 size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  )
}
