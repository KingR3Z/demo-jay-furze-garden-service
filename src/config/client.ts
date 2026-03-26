export const client = {
  // Business Details
  name: "Jay Furze Garden Service",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Bath.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01225 378862",
  email: "",
  website: "",

  // Location
  address: "Bath",
  city: "Bath",
  county: "",
  postcode: "",
  basedIn: "Bath",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Graham Groom", rating: 5, text: "A week of hard graft replacing rotting sleepers (around 15 total), remaking flight of steps and laying new gravel. Guys were great, very responsive and good to work with. Really pleased with the result, built to last! Jay and his team are highly recommended by this happy customer.", date: "3 months ago" },
    { name: "Sarah Moolla", rating: 5, text: "Was absolutely delighted with the work Jay and his team did – would have no problems recommending at all.", date: "11 months ago" },
    { name: "Richard Lucas", rating: 5, text: "Jay and his men did a brilliant job sorting out our garden with a superb decking area, new fencing, pathway and steps with a beautifully levelled patio area. Please view the photographs to see the finished work. All completed at a very competitive price", date: "a year ago" },
    { name: "Dominic DeCesare", rating: 5, text: "We hired Jay and his team to take out a hedge and put up a fence. They arrived on the day we arranged, completed the work one day faster than estimated. The fence is sturdy, level and straight. They cleaned up the site completely when they finished as well.  Absolutely excellent, a friendly team will definitely use again and recommend to others.", date: "a year ago" },
    { name: "Cath Pope", rating: 5, text: "Fantastic job on cutting my hedge again. 3rd year I’ve used this company and plan to do so for many more. Huge thanks to the team", date: "a year ago" },
    { name: "LOUISE RUSSELL", rating: 5, text: "Hard working team and easy to get along with.", date: "a year ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Jay Furze Garden Service | Landscaper in Bath",
    description: "Professional landscaper in Bath. 5.0-star rated on Google. Call for a free quote.",
  },
};
