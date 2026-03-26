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
    { name: "Graham Groom", rating: 5, text: "A week of hard graft replacing rotting sleepers (around 15 total), remaking flight of steps and laying new gravel. Guys were great, very responsive and good to work with. Really pleased with the result, built to last! Jay and his team are highly reco", date: "3 months ago" },
    { name: "Sarah Moolla", rating: 5, text: "Was absolutely delighted with the work Jay and his team did – would have no problems recommending at all. ", date: "11 months ago" },
    { name: "Divus Maximus", rating: 5, text: "We asked Jay and his team to demolish and remove a garage and garden rubbish, also to fence all around our garden, along with a few other smaller tasks. Jay and his team were very friendly, professional, down to earth guys who …  ", date: "6 years ago" },
    { name: "lorraine wilson-brown", rating: 5, text: "Jay and his team built 2 block built raised beds which are rendered. Great piece of work and the team tided up afterwards. We're very happy and will use Jay again ", date: "7 years ago" },
    { name: "Lynette Hardy", rating: 5, text: "Jay and his team did a great job on my garden and completely cleaned up afterwards, which in my experience is very rare.  He put up a new garden gate at the side of the house, painted my pergola, laid the lawn and painted the fence.........Would defi", date: "9 years ago" },
    { name: "Holly Abbott", rating: 5, text: "Called up to make an enquiry - the man that answered was rude and abrupt. I ended the call as it was not a pleasant invitation and sounded like he had better things to do. I'd rather part my money with someone who wants the business. ", date: "10 years ago" },
    { name: "gord", rating: 5, text: "Arranged for viewing for work to be done but Mr Furze failed to turn up. No explanation VERY RUDE ", date: "7 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Jay Furze Garden Service | Landscaper in Bath",
    description: "Professional landscaper in Bath. 5.0-star rated on Google. Call for a free quote.",
  },
};
