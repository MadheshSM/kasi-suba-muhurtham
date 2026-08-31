/**
 * Single source of truth for every business detail on the site.
 * All content here comes from the official Kasi Suba Muhurtham visiting card.
 * Update a value once here and it changes everywhere.
 */

export interface Service {
  id: string;
  /** Position on the printed card (1-11). */
  no: number;
  name: string;
  tagline: string;
  description: string;
  /** Key resolved by <app-icon>. */
  icon: string;
  highlights: string[];
}

export interface EventType {
  id: string;
  name: string;
  tamil: string;
  description: string;
  icon: string;
}

export const BUSINESS = {
  name: 'Kasi Suba Muhurtham',
  displayName: { first: 'Kasi', second: 'Suba Muhurtham' },
  tagline: 'Weddings & Events',
  subtitle: 'A to Z Event Management Services',
  shortPitch:
    'Traditional weddings and family functions in Kancheepuram, arranged end to end — catering, decoration, melam, photography and every ritual in between.',
  address: {
    line1: '69-A East Raja Street',
    city: 'Kancheepuram',
    pincode: '631 502',
    state: 'Tamil Nadu',
    full: '69-A East Raja Street, Kancheepuram - 631 502, Tamil Nadu',
  },
  phones: [
    { label: '9043 481 014', dial: '+919043481014', whatsapp: '919043481014' },
    { label: '9444 681 014', dial: '+919444681014', whatsapp: '919444681014' },
  ],
  hours: 'Open daily · 8:00 AM to 9:00 PM',
  serviceArea: [
    'Kancheepuram',
    'Sriperumbudur',
    'Walajabad',
    'Uthiramerur',
    'Chengalpattu',
    'Arakkonam',
    'Tiruvallur',
    'Chennai',
  ],
} as const;

/** Google Maps links built from the shop address. */
export const MAP_QUERY = encodeURIComponent(BUSINESS.address.full);
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
export const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

/** The 11 services printed on the card, in card order. */
export const SERVICES: Service[] = [
  {
    id: 'catering',
    no: 1,
    name: 'Catering & Traditional Foods',
    tagline: 'Traditional feasts on the banana leaf',
    description:
      'Full banana-leaf sadhya, tiffin counters and evening dinners cooked by traditional cooks. Dum briyani — mutton, chicken, egg or vegetable — cooked in the pot on site for receptions, birthdays and office lunches. Menus planned around your family customs, guest count and the muhurtham timings.',
    icon: 'catering',
    highlights: [
      'Banana leaf sadhya',
      'Dum briyani cooked on site',
      'Tiffin & dinner counters',
      'Custom menu planning',
      'Serving staff',
    ],
  },
  {
    id: 'nadaswaram',
    no: 2,
    name: 'Nadaswaram & Melam',
    tagline: 'The sound of an auspicious morning',
    description:
      'Experienced nadaswaram and thavil artists for muhurtham, kalyana oorvalam and temple ceremonies, playing the right raagam at the right moment of the ritual.',
    icon: 'nadaswaram',
    highlights: ['Nadaswaram & thavil sets', 'Muhurtham & oorvalam', 'Temple ceremonies', 'Getti melam'],
  },
  {
    id: 'decoration',
    no: 3,
    name: 'Flower, Balloon & Stage Decoration',
    tagline: 'Fresh flowers, built on the day',
    description:
      'Stage backdrops, mandapam work, entrance arches, car decoration and pathway florals, arranged with fresh flowers sourced the same morning so nothing looks tired by evening. The same team does balloon work — arches, ceiling clusters and themed backdrops for birthdays and office celebrations.',
    icon: 'flower',
    highlights: [
      'Stage & mandapam',
      'Balloon arches & themes',
      'Entrance arch',
      'Car decoration',
      'Fresh daily flowers',
    ],
  },
  {
    id: 'photo-video',
    no: 4,
    name: 'Photo & Video',
    tagline: 'Every ritual, properly covered',
    description:
      'Candid and traditional photography, video coverage, drone shots and live projection, with a team that knows when the important moments of a Tamil wedding actually happen.',
    icon: 'camera',
    highlights: ['Candid & traditional', 'Video & drone', 'Live LED projection', 'Albums & edits'],
  },
  {
    id: 'beauty',
    no: 5,
    name: 'Bride & Groom Beauty Decoration',
    tagline: 'Ready before the muhurtham',
    description:
      'Bridal makeup, hair styling, saree draping and groom grooming, scheduled backwards from your muhurtham time so no one is rushed on the morning of the function.',
    icon: 'beauty',
    highlights: ['Bridal makeup & hair', 'Saree draping', 'Groom grooming', 'On-time scheduling'],
  },
  {
    id: 'rituals',
    no: 6,
    name: 'Traditional Ritual Arrangements',
    tagline: 'Nothing forgotten on the list',
    description:
      'Every pooja item, kalasam, homam setup, purohit coordination and ritual material arranged and laid out in order, so the elders in the family are not sent looking for anything.',
    icon: 'ritual',
    highlights: ['Pooja & homam setup', 'Purohit coordination', 'Complete ritual items', 'Custom-wise checklist'],
  },
  {
    id: 'dj',
    no: 7,
    name: 'DJ & Music',
    tagline: 'For the reception evening',
    description:
      'Sound systems, DJ setups and live music for reception and celebration nights, with clean audio and volume levels that suit a family hall.',
    icon: 'dj',
    highlights: ['DJ & sound system', 'Reception music', 'Live band options', 'Mic & PA setup'],
  },
  {
    id: 'seer',
    no: 8,
    name: 'Gifts & Seer Arrangements',
    tagline: 'Seer varisai, arranged with care',
    description:
      'Seer thattu arrangement, return gifts, thamboolam bags and moi envelopes, packed, counted and presented the way both families expect.',
    icon: 'gift',
    highlights: ['Seer thattu decoration', 'Return gifts', 'Thamboolam bags', 'Counted & packed'],
  },
  {
    id: 'transport',
    no: 9,
    name: 'Transportation Facility',
    tagline: 'Guests picked up and dropped',
    description:
      'Cars, vans and buses for guest pick-up from stations and bus stands, temple trips and hall transfers, coordinated against the function schedule.',
    icon: 'transport',
    highlights: ['Guest pick-up & drop', 'Cars, vans & buses', 'Temple trips', 'Schedule coordination'],
  },
  {
    id: 'fireworks',
    no: 10,
    name: 'Fireworks Arrangements',
    tagline: 'A safe, licensed finish',
    description:
      'Crackers and fireworks for oorvalam, reception entry and celebration moments, handled by trained crew with proper safety distance and clearance.',
    icon: 'fireworks',
    highlights: ['Oorvalam crackers', 'Reception entry effects', 'Trained crew', 'Safety-first handling'],
  },
  {
    id: 'welcome',
    no: 11,
    name: 'Welcome Drinks & Food Stalls',
    tagline: 'Something in every guest hand',
    description:
      'Welcome drink counters, live chaat, panneer soda, filter coffee and dessert stalls placed where guests actually gather, at the entrance and around the waiting area.',
    icon: 'drinks',
    highlights: ['Welcome drink counter', 'Live chaat & snacks', 'Filter coffee stall', 'Dessert counters'],
  },
];

/**
 * Function types we take on. The first five are printed under "Event Services"
 * on the card; birthdays and office events were added afterwards.
 */
export const EVENT_TYPES: EventType[] = [
  {
    id: 'wedding',
    name: 'Wedding',
    tamil: 'திருமணம்',
    description:
      'The complete muhurtham, from nichayathartham to reception, mandapam to melam, with one team responsible for all of it.',
    icon: 'wedding',
  },
  {
    id: 'engagement',
    name: 'Engagement',
    tamil: 'நிச்சயதார்த்தம்',
    description:
      'Nichayathartham arrangements: thattu decoration, seer exchange, catering and photography for both families.',
    icon: 'engagement',
  },
  {
    id: 'reception',
    name: 'Reception',
    tamil: 'வரவேற்பு',
    description:
      'Evening stage, lighting, DJ, welcome counters and dinner service, planned for a smooth guest flow.',
    icon: 'reception',
  },
  {
    id: 'seemantham',
    name: 'Seemantham',
    tamil: 'சீமந்தம்',
    description:
      'Valaikaappu and seemantham: bangle ceremony setup, floral decoration, traditional lunch and family photography.',
    icon: 'seemantham',
  },
  {
    id: 'house-warming',
    name: 'House Warming',
    tamil: 'கிரகப்பிரவேசம்',
    description:
      'Gruhapravesam: paal kaaichal, homam arrangements, entrance decoration and lunch for the family and neighbours.',
    icon: 'house',
  },
  {
    id: 'birthday',
    name: 'Birthday',
    tamil: 'பிறந்தநாள்',
    description:
      'First birthdays, ear-piercing day and milestone birthdays: balloon and flower decoration, cake table, briyani or tiffin counters and photo coverage.',
    icon: 'cake',
  },
  {
    id: 'office-event',
    name: 'Office Events',
    tamil: 'அலுவலக விழா',
    description:
      'Shop openings, annual days, Diwali and Pongal celebrations for offices and factories: balloon and stage decoration, sound, briyani lunch and photography.',
    icon: 'balloon',
  },
];

export const WHY_US = [
  {
    icon: 'single-point',
    title: 'One Number for Everything',
    text: 'Catering, melam, flowers, photos, transport, all arranged by one team. You call one number instead of chasing eleven different vendors.',
  },
  {
    icon: 'tradition',
    title: 'Kancheepuram Customs, Done Right',
    text: 'We are based on East Raja Street and we know how functions here are run: the rituals, the timings and the family expectations.',
  },
  {
    icon: 'rupee',
    title: 'Clear, Itemised Pricing',
    text: 'A written quote listing every item and count before you commit. No last-minute additions on the day of the function.',
  },
  {
    icon: 'attention',
    title: 'Personal Attention',
    text: 'We take on a limited number of functions at a time, so your family gets the owner on the phone, not a call centre.',
  },
  {
    icon: 'clock',
    title: 'Built Around the Muhurtham',
    text: 'Every task is scheduled backwards from your muhurtham time, so decoration, makeup and food are all ready before the guests arrive.',
  },
  {
    icon: 'leaf',
    title: 'Fresh, Same-Day Sourcing',
    text: 'Flowers and provisions bought the same morning from local markets, so nothing on your stage or leaf looks a day old.',
  },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Talk to Us',
    text: 'Call or WhatsApp with your date, function type and rough guest count. You can also meet us at the East Raja Street office.',
  },
  {
    step: '02',
    title: 'Get a Written Quote',
    text: 'We visit the hall, plan the menu and decoration, and send an itemised quote with every count and rate spelled out.',
  },
  {
    step: '03',
    title: 'We Arrange Everything',
    text: 'Once confirmed, we book the cooks, artists, florists, photographers and vehicles, and share a schedule with your family.',
  },
  {
    step: '04',
    title: 'You Enjoy the Function',
    text: 'On the day our team runs it to the schedule, so your family attends the wedding instead of managing it.',
  },
];
