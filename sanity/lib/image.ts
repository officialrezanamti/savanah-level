import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({ projectId, dataset })

export function urlForImage(source: Image | undefined) {
  if (!source?.asset?._ref) {
    return undefined
  }
  return imageBuilder.image(source).auto('format').fit('max')
}

/** Alias used by blog components for building Sanity image URLs. */
export function urlFor(source: Image) {
  return imageBuilder.image(source).auto('format').fit('max')
}
