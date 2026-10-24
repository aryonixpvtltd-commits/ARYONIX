/**
 * Single source of truth for real ARYONIX brand facts.
 * Only verifiable information lives here — nothing invented.
 */
export const site = {
  name: "ARYONIX",
  legalName: "ARYONIX Pvt. Ltd.",
  tagline: "Design. Develop. Deploy.",
  description:
    "ARYONIX is an independent digital studio designing and building fast, considered websites for businesses that want to look the way they actually are: sharp, credible and ready to grow.",
  email: "aryonixpvtltd@gmail.com",
  whatsappNumber: "919359368382",
  whatsappDisplay: "+91 93593 68382",
  instagram: "https://www.instagram.com/aryonixpvtltd",
  github: "https://github.com/aryonixpvtltd",
  website: "https://aryonixpvtltd.github.io",
  location: "India · working remotely with clients everywhere",
  url: "https://aryonix.dev",
} as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Selected Work" },
  { href: "#studio", label: "Studio" },
  { href: "#process", label: "Process" },
] as const;
