export interface HeroSlide {
  id: string;
  variant: 'light-cutout' | 'dark-fullbleed';
  headlineLines?: string[];
  highlightedWord?: string;
  headline: string;
  subtext: string;
  primaryCtaLabel: string;
  primaryCtaTarget: string;
  showVideoTrigger: boolean;
  image: string;
  imageAlt: string;
}

export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  highlights: string[];
  deliverables: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  iconImage: string;
  iconAlt: string;
  scope: string[];
  standards: string;
  turnaround: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  categories: string[];
  categoryLabel: string;
  image: string;
  imageAlt: string;
  client: string;
  location: string;
  year: string;
  area: string;
  summary: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  avatarAlt: string;
}

export const IMAGES = {
  logoHeader: '/src/assets/images/ref/logo-construction.png',
  logoFooter: '/src/assets/images/ref/footer-logo-construction.png',
  heroModel: '/src/assets/images/ref/man-model.png',
  heroSlide2: '/src/assets/images/ref/slide-2.jpg',
  featuresRowBg: '/src/assets/images/ref/row-bg.jpg',
  safetyIcon: '/src/assets/images/ref/safety-icon.png',
  serviceFlip1: '/src/assets/images/ref/service-1.jpg',
  serviceFlip2: '/src/assets/images/ref/service-2.jpg',
  serviceFlip3: '/src/assets/images/ref/service-3.jpg',
  aboutSite: '/src/assets/images/ref/about-company.jpg',
  serviceIcon1: '/src/assets/images/ref/s1.png',
  serviceIcon2: '/src/assets/images/ref/s2.png',
  serviceIcon3: '/src/assets/images/ref/s3.png',
  processTeam: '/src/assets/images/ref/process.jpg',
  project1: '/src/assets/images/ref/personal_gift-1-600x600.jpg',
  project2: '/src/assets/images/ref/tick_tock-1-1-600x600.jpg',
  project3: '/src/assets/images/ref/portfolio7-1-600x600.jpg',
  project4: '/src/assets/images/ref/portfolio10-1-600x600.jpg',
  project5: '/src/assets/images/ref/portfolio3-1-600x600.jpg',
  project6: '/src/assets/images/ref/portfolio6-1-600x600.jpg',
  project7: '/src/assets/images/ref/portfolio9-1-600x600.jpg',
  project8: '/src/assets/images/ref/portfolio2-1-600x600.jpg',
  client1: '/src/assets/images/ref/team1.jpg',
  client2: '/src/assets/images/ref/team2.jpg',
  client3: '/src/assets/images/ref/team3.jpg',
  partnerLogos: [
    {name: 'Partner 1', src: '/src/assets/images/ref/logo-4.png'},
    {name: 'Partner 2', src: '/src/assets/images/ref/logo-5.png'},
    {name: 'Partner 3', src: '/src/assets/images/ref/logo-3.png'},
    {name: 'Partner 4', src: '/src/assets/images/ref/logo-1.png'},
    {name: 'Partner 5', src: '/src/assets/images/ref/logo-2.png'},
  ],
} as const;

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    variant: 'light-cutout',
    headlineLines: ['START', 'NEW'],
    highlightedWord: 'PROJECTS',
    headline: 'START NEW PROJECTS',
    subtext: "Don't get framed by the competition, trust our solid reputation.",
    primaryCtaLabel: 'Why choose us?',
    primaryCtaTarget: '#about',
    showVideoTrigger: true,
    image: IMAGES.heroModel,
    imageAlt: 'Construction project director in yellow hard hat holding blueprints',
  },
  {
    id: 'slide-2',
    variant: 'dark-fullbleed',
    headline: "We'll get it done, like us there are none",
    subtext: 'Committed to superior quality and results',
    primaryCtaLabel: 'Explore Projects',
    primaryCtaTarget: '#projects',
    showVideoTrigger: true,
    image: IMAGES.heroSlide2,
    imageAlt: 'Commercial construction engineering site at dusk',
  },
];

export const FEATURE_FLIP_CARDS: FeatureCardItem[] = [
  {
    id: 'building-engineering',
    title: 'Building Engineering',
    description:
      'A Building Engineer is recognised as being expert in the use of technology for the design, construction, assessment and maintenance of the built environment.',
    image: IMAGES.serviceFlip1,
    imageAlt: 'Building engineering architecture and site construction',
    imagePosition: 'object-center',
    highlights: [
      'Structural load modeling & seismic compliance audits',
      'BIM coordination for MEP, steel, and concrete trades',
      'Energy-efficient envelope & sustainable glazing integration',
    ],
    deliverables: ['Stamped Structural Drawings', 'Value Engineering Schedule', 'As-Built Documentation'],
  },
  {
    id: 'safety-first',
    title: 'Safety First',
    description:
      'Safety First governs every active job site with rigorous daily inspections, fall-protection engineering, and certified OSHA compliance protocols for crews and visitors.',
    image: IMAGES.serviceFlip2,
    imageAlt: 'Construction safety inspector on an active building site',
    imagePosition: 'object-center',
    highlights: [
      'Zero-incident safety briefings before every shift',
      'Certified scaffolding, crane rigging & perimeter guardrails',
      'Independent third-party structural & air-quality testing',
    ],
    deliverables: ['Site Safety Plan', 'Weekly Audit Logs', 'OSHA 30-Hour Certified Supervision'],
  },
  {
    id: 'road-construction',
    title: 'Road Construction',
    description:
      'The construction of a new road whether from asphalt or concrete requires the production of a bonded pavement structure, beginning with a stable base.',
    image: IMAGES.serviceFlip3,
    imageAlt: 'Heavy civil machinery paving and building modern roadway infrastructure',
    imagePosition: 'object-center',
    highlights: [
      'Subgrade stabilization, geotextile reinforcement & drainage',
      'Hot-mix asphalt paving and slip-form concrete curbing',
      'Bridge approach slabs, signage, and traffic-flow striping',
    ],
    deliverables: ['Core Density Testing', 'Stormwater Grading Report', 'DOT Compliance Sign-off'],
  },
];

export const ABOUT_CHECKLIST: string[] = [
  'Excellent engineering',
  'Modern & up to date',
  'Grade #1 materials',
  'Structures with long life',
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'service-building',
    title: 'Building',
    summary:
      'A building, or edifice, is a structure with a roof and walls standing permanently in one place.',
    iconImage: IMAGES.serviceIcon1,
    iconAlt: 'Building construction icon',
    scope: [
      'Ground-up commercial office towers, retail centers, and hospitality structures',
      'Reinforced concrete foundations, structural steel framing, and curtain-wall envelopes',
      'Full interior build-outs, acoustic partitioning, and smart MEP commissioning',
    ],
    standards: 'IBC & LEED Gold Construction Standards',
    turnaround: '6 – 24 Months Turnkey Delivery',
  },
  {
    id: 'service-road',
    title: 'Road Construction',
    summary:
      'Road construction involves the use of asphalt, liquid asphalt, concrete, soil stabilization, rebar, paving and pavement recycling machines, and other road repair materials.',
    iconImage: IMAGES.serviceIcon2,
    iconAlt: 'Road construction icon',
    scope: [
      'Municipal arterial roads, highway interchanges, and heavy-duty industrial aprons',
      'Laser-guided grading, crushed-aggregate subbase compaction, and storm culverts',
      'Bridge deck resurfacing, concrete medians, and reflective lane marking',
    ],
    standards: 'AASHTO & DOT Heavy Civil Specifications',
    turnaround: '4 – 18 Months Phased Execution',
  },
  {
    id: 'service-maintenance',
    title: 'Maintenance',
    summary:
      'All assigned structural, envelope, and facility responsibilities related to the ongoing building maintenance mode.',
    iconImage: IMAGES.serviceIcon3,
    iconAlt: 'Building maintenance icon',
    scope: [
      '24/7 commercial facility response for roofing, waterproofing, and facade repairs',
      'Structural concrete spall restoration, seismic retrofits, and slab leveling',
      'Scheduled HVAC, electrical switchgear, and life-safety system modernizations',
    ],
    standards: 'ISO 41001 Facility Management Protocols',
    turnaround: 'Dedicated Retainer & 48h Mobilization',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Agency / Bidding',
    description: 'Ensure design documents are reviewed and permitted',
  },
  {
    stepNumber: '02',
    title: 'Construction',
    description: 'Helps to coordinate furnishings and move-in process',
  },
  {
    stepNumber: '03',
    title: 'Project Execution',
    description: 'Client directs move in of equipment, operations & staff',
  },
];

export const PROJECT_FILTERS = [
  'All',
  'Building',
  'Construction',
  'Road Construction',
  'Maintenance',
  'Architecture',
] as const;

export type ProjectFilterCategory = (typeof PROJECT_FILTERS)[number];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'riverview-green',
    title: 'Riverview Green Building',
    categories: ['Building', 'Road Construction'],
    categoryLabel: 'Building, Road Construction',
    image: IMAGES.project1,
    imageAlt: 'Riverview Green Building project photograph',
    client: 'Riverview Commercial Holdings',
    location: 'Portland, OR',
    year: '2025',
    area: '142,000 sq ft',
    summary:
      'Six-story sustainable commercial headquarters featuring architectural concrete fins, rooftop solar array, permeable courtyard plazas, and re-engineered access roadways.',
  },
  {
    id: 'langham-hotel',
    title: 'The Langham Hotel',
    categories: ['Building', 'Construction'],
    categoryLabel: 'Building, Construction',
    image: IMAGES.project2,
    imageAlt: 'The Langham Hotel project photograph',
    client: 'Langham Hospitality Group',
    location: 'Chicago, IL',
    year: '2025',
    area: '215,000 sq ft',
    summary:
      'Turnkey structural concrete and limestone facade construction for a 14-story urban luxury hotel featuring cantilevered glass suites and grand lobby canopy.',
  },
  {
    id: 'villa-rustica',
    title: 'Villa Rustica Renovation',
    categories: ['Construction', 'Road Construction'],
    categoryLabel: 'Construction, Road Construction',
    image: IMAGES.project3,
    imageAlt: 'Villa Rustica Renovation project photograph',
    client: 'Private Coastal Estate',
    location: 'Santa Barbara, CA',
    year: '2024',
    area: '8,400 sq ft',
    summary:
      'Comprehensive structural reinforcement, roof extension, custom steel glazing installation, and private paved estate driveway engineering.',
  },
  {
    id: 'land-rustica',
    title: 'Land Rustica Renovation',
    categories: ['Building', 'Maintenance'],
    categoryLabel: 'Building, Maintenance',
    image: IMAGES.project4,
    imageAlt: 'Land Rustica Renovation project photograph',
    client: 'Westfield Property Partners',
    location: 'Denver, CO',
    year: '2024',
    area: '64,000 sq ft',
    summary:
      'Adaptive commercial envelope modernization upgrading thermal curtain walls, structural steel bracing, and rooftop mechanical platforms.',
  },
  {
    id: 'kitchen-living',
    title: 'Kitchen And Living Room',
    categories: ['Architecture', 'Building'],
    categoryLabel: 'Architecture, Building',
    image: IMAGES.project5,
    imageAlt: 'Kitchen And Living Room renovation project photograph',
    client: 'Bespoke Residence Trust',
    location: 'Seattle, WA',
    year: '2025',
    area: '3,200 sq ft',
    summary:
      'Load-bearing wall removal with concealed steel moment frame, custom architectural millwork, honed stone island, and steel-framed garden doors.',
  },
  {
    id: 'house-under-palms',
    title: 'House Under The Palms',
    categories: ['Construction', 'Road Construction'],
    categoryLabel: 'Construction, Road Construction',
    image: IMAGES.project6,
    imageAlt: 'House Under The Palms project photograph',
    client: 'Coastal Living Developments',
    location: 'San Diego, CA',
    year: '2024',
    area: '6,800 sq ft',
    summary:
      'Contemporary residential construction featuring reinforced slab foundations, cantilevered shade canopies, and custom stone driveway paving.',
  },
  {
    id: 'green-house',
    title: 'Green House',
    categories: ['Construction', 'Road Construction'],
    categoryLabel: 'Construction, Road Construction',
    image: IMAGES.project7,
    imageAlt: 'Green House project photograph',
    client: 'Verdant Living Developments',
    location: 'Austin, TX',
    year: '2025',
    area: '5,100 sq ft',
    summary:
      'Net-zero timber and concrete residence featuring high-efficiency glazing, rainwater harvesting cisterns, and permeable stone walkways.',
  },
  {
    id: 'inside-renovation',
    title: 'Inside renovation',
    categories: ['Construction', 'Road Construction'],
    categoryLabel: 'Construction, Road Construction',
    image: IMAGES.project8,
    imageAlt: 'Inside renovation project photograph',
    client: 'Foundry Creative Studios',
    location: 'Brooklyn, NY',
    year: '2024',
    area: '11,800 sq ft',
    summary:
      'Interior commercial conversion featuring diamond-polished concrete slabs, acoustic partitions, exposed structural ceiling systems, and custom joinery.',
  },
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    quote:
      '"Great Experience!! Michael has made the whole process easy from the planning stage to the final finish going in. Steve & his crew did a great job. I felt like the team really listened to what I wanted, gave me ideas, and helped me decide how to make our property a place to relax and enjoy."',
    author: 'Richard Dowson',
    role: 'Estate Owner & Private Client',
    avatar: IMAGES.client1,
    avatarAlt: 'Richard Dowson portrait',
  },
  {
    id: 'testimonial-2',
    quote:
      '“I just wanted to say thank you to all of you for being so fun to work with and being rock stars with the best attitudes EVER on this 16th floor build for SPS. It means a great deal to me that you all come to the table every week with smiles on your faces and ready to solve whatever issue.”',
    author: 'Lisa Jordan',
    role: 'Director of Facilities, SPS',
    avatar: IMAGES.client2,
    avatarAlt: 'Lisa Jordan portrait',
  },
  {
    id: 'testimonial-3',
    quote:
      '"Greiner has been a critical partner to us on the redevelopment of West End Center Office Park. The team of project managers, supervisors, and their support teams can\'t be rivaled by any other contractor I have worked with over the past 15 years."',
    author: 'Michael Anderson',
    role: 'VP of Development, West End Park',
    avatar: IMAGES.client3,
    avatarAlt: 'Michael Anderson portrait',
  },
];
