/**
 * SITE CONFIG — edit these values to customize the whole site.
 * Everything here feeds the SEO tags, structured data, and footer.
 */
export const site = {
  name: "Bryan Engel Photography",
  shortName: "Bryan Engel",
  tagline: "Fitness & Physique Competition Photography",

  // The single sentence used in search results & social previews.
  description:
    "Stage-ready fitness and physique photography for bodybuilding, bikini, figure, and men's physique competitors. Bryan Engel Photography captures the conditioning, power, and artistry of athletes who step on stage.",

  // ⬇️  CHANGE THIS to your real domain once you have one (no trailing slash).
  url: "https://www.bryanengelphotography.com",

  // ⬇️  Local SEO — update to your actual service area.
  location: {
    city: "San Diego",
    region: "CA", // state abbreviation
    regionFull: "California",
    country: "US",
    // Areas you serve, used in copy + structured data.
    serviceAreas: [
      "San Diego",
      "Chula Vista",
      "La Jolla",
      "Carlsbad",
      "Escondido",
      "Oceanside",
    ],
  },

  // ⬇️  Contact details — these appear on the site and in structured data.
  contact: {
    email: "thebryanengel@gmail.com",
    phone: "", // e.g. "+1-816-555-0100" (leave "" to hide)
  },

  // ⬇️  Online booking link (Cal.com). "Book" buttons point here. Leave "" to
  //     fall back to the contact form.
  bookingUrl: "https://cal.com/bryan-engel-amlxcu/fitness-shoot",

  // ⬇️  Social links — leave "" to hide a given icon.
  social: {
    instagram: "https://instagram.com/bryanengelphotography", // @bryanengelphotography
    facebook: "",
    tiktok: "",
    youtube: "",
  },

  // Brand color used for accents (crimson / oxblood — athletic intensity).
  accent: "#b11e2f",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
