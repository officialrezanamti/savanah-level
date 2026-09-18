export type Service = {
  slug: string
  title: string
  short: string
  description: string
  icon: string
  features: string[]
}

export const services: Service[] = [
  {
    slug: 'tv-sound-bar-mounting',
    title: 'TV & Sound Bar Mounting',
    short:
      'Secure, level TV and sound bar mounting on any wall, with cables tucked out of sight.',
    description:
      'We mount flat-screen TVs and sound bars on drywall, brick, tile, and stone. Every install is checked with a level, anchored into studs or rated hardware, and finished with tidy cable management so your setup looks clean from day one.',
    icon: 'Tv',
    features: [
      'Fixed, tilting, and full-motion mounts',
      'In-wall and concealed cable routing',
      'Over-fireplace and accent-wall installs',
      'Sound bar and speaker mounting',
    ],
  },
  {
    slug: 'appliance-installation',
    title: 'Appliance Installation',
    short:
      'Professional hookup and installation of kitchen and laundry appliances.',
    description:
      'From dishwashers and ranges to washers and dryers, we handle the connections, leveling, and testing so your new appliance works right the first time. We remove packaging and confirm everything runs before we leave.',
    icon: 'WashingMachine',
    features: [
      'Dishwasher and range installation',
      'Washer and dryer hookups',
      'Over-the-range microwave mounting',
      'Leak and function testing',
    ],
  },
  {
    slug: 'furniture-assembly',
    title: 'Furniture Assembly',
    short: 'Fast, sturdy assembly of flat-pack and boxed furniture.',
    description:
      'Skip the confusing instructions. We assemble beds, dressers, desks, shelving, and outdoor furniture correctly and securely, then anchor tip-prone pieces to the wall for safety.',
    icon: 'Armchair',
    features: [
      'Beds, dressers, and desks',
      'Shelving and storage units',
      'Outdoor and patio furniture',
      'Anti-tip wall anchoring',
    ],
  },
  {
    slug: 'security-camera-installation',
    title: 'Security Camera Installation',
    short: 'Placement and setup of home security cameras and video doorbells.',
    description:
      'We help you cover the right angles, mount cameras cleanly, and get everything connected to your app so you can monitor your home from anywhere.',
    icon: 'Cctv',
    features: [
      'Wired and wireless cameras',
      'Video doorbell installation',
      'Optimal placement and coverage',
      'App and Wi-Fi setup',
    ],
  },
  {
    slug: 'home-maintenance',
    title: 'Home Maintenance',
    short: 'Small repairs and to-do list projects handled in one visit.',
    description:
      'Knock out that growing list of small jobs. We take on minor repairs, adjustments, and upkeep tasks around the house so you can get your weekends back.',
    icon: 'Wrench',
    features: [
      'Minor repairs and adjustments',
      'Fixture and hardware swaps',
      'Weatherproofing and touch-ups',
      'Seasonal to-do lists',
    ],
  },
  {
    slug: 'blinds-curtains-installation',
    title: 'Blinds & Curtains Installation',
    short: 'Level, secure installation of blinds, shades, and curtain rods.',
    description:
      'We measure, mount, and align blinds, shades, and curtain hardware so everything hangs straight and operates smoothly across every window.',
    icon: 'Blinds',
    features: [
      'Blinds and roller shades',
      'Curtain rods and tracks',
      'Precise measuring and leveling',
      'Multi-window projects',
    ],
  },
  {
    slug: 'wall-art-hanging',
    title: 'Wall Art Hanging',
    short: 'Gallery walls, mirrors, and heavy art hung level and secure.',
    description:
      'From a single mirror to a full gallery wall, we plan the layout, use the right anchors for the weight, and hang everything level so your walls look intentional.',
    icon: 'Frame',
    features: [
      'Single pieces and gallery walls',
      'Heavy mirrors and framed art',
      'Layout planning and spacing',
      'Weight-rated anchoring',
    ],
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
