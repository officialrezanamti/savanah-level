import type { Service } from '@/data/services'

export type GalleryCategory = Service['slug']

export type GalleryItem = {
  id: string
  src: string
  alt: string
  category?: GalleryCategory
}

export const gallery: GalleryItem[] = [
  {
    id: 'tv-above-dresser-setup',
    src: '/gallery/tv-above-dresser-setup.webp',
    alt: 'Large flat-screen TV mounted level on a bedroom wall above a rattan dresser',
    category: 'tv-sound-bar-mounting',
  },
  {
    id: 'tv-above-fireplace-holiday',
    src: '/gallery/tv-above-fireplace-holiday.jpg',
    alt: 'TV mounted above a white brick fireplace decorated for the holidays',
    category: 'tv-sound-bar-mounting',
  },
  {
    id: 'samsung-tv-soundbar-home',
    src: '/gallery/samsung-tv-soundbar-home.jpg',
    alt: 'Samsung TV wall-mounted with a soundbar underneath in a living room',
    category: 'tv-sound-bar-mounting',
  },
  {
    id: 'curved-tv-above-dresser',
    src: '/gallery/curved-tv-above-dresser.webp',
    alt: 'Curved Samsung TV mounted on a bedroom wall above a mid-century dresser',
    category: 'tv-sound-bar-mounting',
  },
  {
    id: 'samsung-tv-soundbar-setup',
    src: '/gallery/samsung-tv-soundbar-setup.webp',
    alt: 'Wall-mounted Samsung TV with a soundbar during first-time setup',
    category: 'tv-sound-bar-mounting',
  },
  {
    id: 'tv-youtube-tv',
    src: '/gallery/tv-youtube-tv.webp',
    alt: 'Flat-screen TV mounted on a built-in wall displaying a streaming home screen',
    category: 'tv-sound-bar-mounting',
  },
  {
    id: 'sony-tv-mounting',
    src: '/gallery/sony-tv-mounting.webp',
    alt: 'Sony TV wall-mounted and aligned straight with a laser level on a tripod',
    category: 'tv-sound-bar-mounting',
  },
  {
    id: 'tv-mounted-website',
    src: '/gallery/tv-mounted-website.jpg',
    alt: 'Wall-mounted TV displaying the Savannah Level home services website',
    category: 'tv-sound-bar-mounting',
  },
  {
    id: 'cafe-double-wall-oven',
    src: '/gallery/cafe-double-wall-oven.webp',
    alt: 'White Café double wall oven with gold handles installed in white cabinetry',
    category: 'appliance-installation',
  },
  {
    id: 'kitchenaid-wall-oven',
    src: '/gallery/kitchenaid-wall-oven.webp',
    alt: 'KitchenAid stainless steel wall oven built into dark wood cabinetry',
    category: 'appliance-installation',
  },
  {
    id: 'wall-oven-microwave-combo',
    src: '/gallery/wall-oven-microwave-combo.webp',
    alt: 'Stainless steel wall oven and microwave combo installed in oak cabinetry',
    category: 'appliance-installation',
  },
  {
    id: 'over-range-microwave-green-tile',
    src: '/gallery/over-range-microwave-green-tile.webp',
    alt: 'Stainless steel over-the-range microwave installed above a stove with green subway tile',
    category: 'appliance-installation',
  },
  {
    id: 'range-hood-wood-cabinets',
    src: '/gallery/range-hood-wood-cabinets.webp',
    alt: 'Stainless steel range hood mounted under oak cabinets above a mosaic tile backsplash',
    category: 'appliance-installation',
  },
  {
    id: 'wall-mounting-the-tv',
    src: '/gallery/wall-mounting-the-tv.webp',
    alt: 'A wall-mounted TV with a black and white table underneath it.',
    category: 'tv-sound-bar-mounting',
  },
  {
    id: 'crystal-sputnik-chandelier',
    src: '/gallery/crystal-sputnik-chandelier.jpg',
    alt: 'Chrome crystal sputnik chandelier installed on a living room ceiling',
    category: 'home-maintenance',
  },
  {
    id: 'coastal-gallery-wall',
    src: '/gallery/coastal-gallery-wall.jpg',
    alt: 'Four gold-framed coastal prints hung level in a grid on a wall',
    category: 'wall-art-hanging',
  },
  {
    id: 'botanical-gallery-wall-laser',
    src: '/gallery/botanical-gallery-wall-laser.webp',
    alt: 'Six botanical prints hung in a grid and aligned straight with a laser level',
    category: 'wall-art-hanging',
  },
  {
    id: 'arched-mirror-sconces',
    src: '/gallery/arched-mirror-sconces.jpg',
    alt: 'Arched gold mirror hung between two black wall sconces above a black mantel',
    category: 'wall-art-hanging',
  },
  {
    id: 'paris-canvas-brick',
    src: '/gallery/paris-canvas-brick.webp',
    alt: 'Framed Paris canvas artwork mounted level on an exposed brick wall',
    category: 'wall-art-hanging',
  },
  {
    id: 'wall-mounted-tv-above-the-fireplace',
    src: '/gallery/wall-mounted-tv-above-the-fireplace.webp',
    alt: 'A wall-mounted TV positioned above the fireplace.',
    category: 'tv-sound-bar-mounting',
  },
  {
    id: 'pine-tree-painting',
    src: '/gallery/pine-tree-painting.webp',
    alt: 'The pine tree painting installed in the stairwell.',
    category: 'wall-art-hanging',
  },
  {
    id: 'sharp-microwave-oven',
    src: '/gallery/sharp-microwave-oven.webp',
    alt: 'Built-in microwave installed in the kitchen cabinet.',
    category: 'appliance-installation',
  },
  {
    id: 'built-in-oven-and-microwave-set',
    src: '/gallery/built-in-oven-and-microwave-set.webp',
    alt: 'Built-in oven and microwave set in kitchen cabinetry',
    category: 'appliance-installation',
  },
]
