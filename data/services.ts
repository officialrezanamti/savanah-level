export type PriceItem = {
  label: string
  price: string
}

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  icon: string
  features: string[]
  pricing: PriceItem[]
  pricingNote?: string
  estimateOnly?: boolean
}

const TRAVEL_FEE_NOTE =
  'Prices apply to Savannah, Downtown Savannah, and Midtown Savannah. Areas outside Savannah may include a $25\u2013$45 travel fee.'

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
    pricing: [
      { label: 'TVs under 48"', price: 'Starting at $95' },
      { label: 'TVs 50" to 64"', price: 'Starting at $125' },
      { label: 'TVs 65" to 74"', price: 'Starting at $165' },
      {
        label: 'TVs 75"+ (with customer assistance)',
        price: 'Starting at $175',
      },
      {
        label: 'TVs 75"+ (without assistance, 2-person job)',
        price: 'Starting at $245',
      },
      {
        label: 'Wire Concealment (materials included)',
        price: 'Starting at $95',
      },
      {
        label: 'TV Unmounting',
        price: '50% of the applicable TV mounting price',
      },
    ],
    pricingNote: TRAVEL_FEE_NOTE,
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
    pricing: [
      { label: 'Dishwashers', price: 'Starting at $195' },
      { label: 'Dishwasher Uninstallation', price: 'Starting at $55' },
      { label: 'Gas Stoves', price: 'Starting at $165' },
      { label: 'Electric Stoves', price: 'Starting at $135' },
      { label: 'Microwaves', price: 'Starting at $175' },
      { label: 'Microwave Uninstallation', price: 'Starting at $45' },
      { label: 'Dryers', price: 'Starting at $110' },
      { label: 'Washing Machines', price: 'Starting at $120' },
      { label: 'Electric Cooktops', price: 'Starting at $120' },
      { label: 'Gas Cooktops', price: 'Starting at $160' },
      { label: 'Kitchen Hoods', price: 'Starting at $120' },
      { label: 'Kitchen Hoods with Liner', price: 'Starting at $295' },
      { label: 'Single Wall Oven', price: 'Starting at $285' },
      { label: 'Double Wall Oven', price: 'Starting at $410' },
      { label: 'Ceiling Fans', price: 'Starting at $110' },
      { label: 'AC Window Units', price: 'Starting at $120' },
      { label: 'Garbage Disposal', price: 'Starting at $250' },
    ],
    pricingNote: `Delivery, parts, and disposal of old units are not included. ${TRAVEL_FEE_NOTE}`,
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
    pricing: [
      { label: 'Normal Bed Frame', price: 'Starting at $110' },
      { label: 'Bed Frame with Headboard', price: 'Starting at $165' },
      { label: 'Dining Table with 4 Chairs', price: 'Starting at $175' },
      { label: 'Dressers', price: 'Starting at $125' },
      { label: 'Nightstands', price: 'Starting at $75' },
      { label: 'Gas Grills', price: 'Starting at $185' },
    ],
    pricingNote: `Delivery, parts, and disposal of old packaging or materials are not included. ${TRAVEL_FEE_NOTE}`,
  },
  {
    slug: 'security-camera-installation',
    title: 'Security camera & doorbell installation ',
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
    pricing: [
      { label: 'Google Nest Cameras', price: 'Starting at $120' },
      { label: 'Google Doorbells', price: 'Starting at $95' },
    ],
    pricingNote: TRAVEL_FEE_NOTE,
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
    pricing: [],
    estimateOnly: true,
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
    pricing: [
      { label: 'Single window blind', price: '$45' },
      { label: 'Window with 3 brackets', price: '$65' },
      { label: 'Window with 4 brackets', price: '$86' },
      { label: 'Long vertical blind for sliding door', price: '$75' },
    ],
    pricingNote: `Delivery, parts, and disposal of old blinds are not included. ${TRAVEL_FEE_NOTE}`,
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
    pricing: [
      { label: 'Small', price: '$15' },
      { label: 'Medium', price: '$25' },
      { label: 'Large', price: '$45' },
      { label: 'XL', price: 'Starting at $65' },
      { label: 'Mirror', price: 'Starting at $55' },
    ],
    pricingNote: `Delivery, parts, and disposal are not included. ${TRAVEL_FEE_NOTE}`,
  },
  {
    slug: 'light-fixtures-and-chandelier',
    title: 'Light Fixtures & Chandelier',
    short:
      'Safe, secure installation of light fixtures, chandeliers, and ceiling lights.',
    description:
      'We install and replace ceiling lights, chandeliers, pendants, and wall sconces so they hang level, sit flush, and work perfectly. Every fixture is mounted to rated hardware and tested before we leave.',
    icon: 'LampCeiling',
    features: [
      'Chandeliers and pendant lights',
      'Ceiling and flush-mount fixtures',
      'Wall sconces and vanity lights',
      'Fixture replacement and testing',
    ],
    pricing: [
      { label: 'Standard Light Fixture', price: 'Starting at $85' },
      { label: 'Pendant Light', price: 'Starting at $110' },
      { label: 'Wall Sconce / Vanity Light', price: 'Starting at $95' },
      { label: 'Chandelier', price: 'Starting at $165' },
      { label: 'Large or Heavy Chandelier (2-person job)', price: 'Starting at $245' },
    ],
    pricingNote: `Fixtures, parts, and disposal of old units are not included. ${TRAVEL_FEE_NOTE}`,
  },

]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
