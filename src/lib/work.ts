export type ProjectStatus =
  | "Concept Project"
  | "Prospective-Client Demo"
  | "Unapproved Concept Proposal";

export type Project = {
  id: "fitniq" | "orbit" | "meridian" | "folio" | "new-dimension" | "rockfold";
  index: string;
  title: string;
  category: string;
  description: string;
  status: ProjectStatus;
  /**
   * Visual composition variant rendered by the mockup components.
   * Each project gets a genuinely different layout treatment.
   */
  variant:
    | "fitness-bold"
    | "fitness-orbit"
    | "editorial-light"
    | "portfolio-min"
    | "nd-cinematic"
    | "rf-cinematic";
  /**
   * Browsable concept sites: statically exported builds served from
   * public/ and opened in the in-page demo viewer.
   */
  liveDemo?: {
    href: string;
    linkLabel: string;
    /** Honest framing shown in the viewer's top bar for this demo. */
    note: string;
  };
  caseStudy: {
    overview: string;
    scope: string[];
    buildNotes: string[];
    /**
     * Honest framing shown at the bottom of every case study.
     * Worded per project so each entry stays truthful about what it is.
     */
    disclaimer: string;
  };
};

export const projects: Project[] = [
  {
    id: "fitniq",
    index: "01",
    title: "FITNIQ",
    category: "Fitness & Gym",
    description:
      "A high-energy gym concept built around bold condensed typography, training schedules, and membership plans that are easy to compare on one screen.",
    status: "Concept Project",
    variant: "fitness-bold",
    caseStudy: {
      overview:
        "FITNIQ explores how a modern gym can present itself online without stock-photo clichés. The concept leans on oversized athletic typography, a strict dark palette, and one dominant call to action — booking a trial session — repeated at natural pause points.",
      scope: [
        "Home, programs, schedule, trainers, and membership pages",
        "Membership plan comparison with clear pricing tiers",
        "Weekly class schedule with day filters",
        "Trainer profiles with specialities",
        "Trial-session inquiry flow",
      ],
      buildNotes: [
        "Condensed display type paired with a quiet UI sans for readability",
        "High-contrast text combinations checked for WCAG AA",
        "Schedule data structured so it can later be managed without a developer",
      ],
      disclaimer:
        "Self-initiated concept study — presented to demonstrate approach, not client work.",
    },
  },
  {
    id: "orbit",
    index: "02",
    title: "ORBIT FITNESS",
    category: "Performance Fitness",
    description:
      "A performance-focused training concept with a orbital visual motif, structured class schedules, and a calm interface that lets coaching quality speak first.",
    status: "Concept Project",
    variant: "fitness-orbit",
    caseStudy: {
      overview:
        "ORBIT FITNESS targets coached, data-minded athletes. The concept swaps aggression for precision: a centered orbital motif, generous spacing, and schedule rows that read like a training calendar rather than a brochure.",
      scope: [
        "Home, coaching method, classes, and coaching team pages",
        "Class schedule organized by discipline and time of day",
        "Coach profiles with certifications",
        "Athlete inquiry and assessment booking flow",
      ],
      buildNotes: [
        "Geometric grid system with a single accent color",
        "Tables and schedules designed mobile-first, not squeezed down",
        "Reduced-motion friendly interactions throughout",
      ],
      disclaimer:
        "Self-initiated concept study — presented to demonstrate approach, not client work.",
    },
  },
  {
    id: "meridian",
    index: "03",
    title: "MERIDIAN & CO.",
    category: "Premium Business",
    description:
      "An editorial concept for a premium advisory brand — restrained color, serif-led typography, and a composition that signals confidence without shouting.",
    status: "Concept Project",
    variant: "editorial-light",
    caseStudy: {
      overview:
        "MERIDIAN & CO. studies how a premium business brand earns trust online. The concept uses a light, paper-like canvas, a strict typographic hierarchy, and almost no ornament — the confidence comes from spacing and alignment, not decoration.",
      scope: [
        "Home, practice areas, people, and contact pages",
        "Editorial homepage with a long-form introduction",
        "Practice-area pages with consistent structure",
        "Contact flow routed to the right team",
      ],
      buildNotes: [
        "Serif display face paired with a neutral text sans",
        "Warm-light palette with a single restrained accent",
        "Print-like grid that also collapses cleanly to mobile",
      ],
      disclaimer:
        "Self-initiated concept study — presented to demonstrate approach, not client work.",
    },
  },
  {
    id: "folio",
    index: "04",
    title: "FOLIO",
    category: "Personal Portfolio",
    description:
      "A minimal personal portfolio concept — generous whitespace, precise hierarchy, and a project index designed to be scanned in under a minute.",
    status: "Concept Project",
    variant: "portfolio-min",
    caseStudy: {
      overview:
        "FOLIO is a study in restraint for personal brands. The concept gives a portfolio exactly what it needs — a scannable project index, a short biography, and one honest contact link — and removes everything else.",
      scope: [
        "Home, selected work, about, and contact views",
        "Project index with expandable case entries",
        "Short-form biography and experience list",
        "Direct contact section with no forms required",
      ],
      buildNotes: [
        "Typographic scale built on a strict ratio",
        "Whitespace used as the primary layout device",
        "Content-first markup so the site reads well without styles",
      ],
      disclaimer:
        "Self-initiated concept study — presented to demonstrate approach, not client work.",
    },
  },
  {
    id: "new-dimension",
    index: "05",
    title: "NEW DIMENSION",
    category: "Interior Design Studio · Nagpur",
    description:
      "A cinematic, unofficial website redesign prepared as a prospective-client demonstration for New Dimension — every business fact on the page verified against the firm's own published website, and nothing invented.",
    status: "Prospective-Client Demo",
    variant: "nd-cinematic",
    liveDemo: {
      href: "/new-dimension/index.html",
      linkLabel: "Explore the concept site",
      note: "Unofficial design demonstration, built by ARYONIX — not affiliated with or endorsed by the firm.",
    },
    caseStudy: {
      overview:
        "Unlike the self-initiated studies above, this concept was built for a real business: New Dimension, a partner-led interior design studio in Nagpur. It reimagines the firm's web presence in a cinematic ivory-and-charcoal editorial language — Cormorant Garamond headlines, a slow-settling hero photograph, and a service and enquiry structure mapped from the firm's own published content. It is a demonstration of how ARYONIX would present this firm online: unofficial, unaffiliated, and honest about every placeholder.",
      scope: [
        "Cinematic full-height hero carrying the firm's own positioning words",
        "Verified facts row — established 2007, 14 services, 3 states, 2 partners",
        "All 14 service lines in the firm's own order, descriptions attributed to the firm",
        "Placeholder gallery, every photograph labelled as licensed stock imagery",
        "Studio cards for both partners, summarised from their published bios",
        "Client testimonials quoted verbatim, with attribution",
        "Enquiry journey handing off to the firm's published WhatsApp and email",
      ],
      buildNotes: [
        "Every business fact independently verified on newdimensionngp.com — nothing invented",
        "Honesty guards built into the UI: persistent demo ribbon, placeholder photo labels, source attributions",
        "Cormorant Garamond + Jost pairing on an ivory, charcoal and bronze palette",
        "Fully static build, served from this page — browseable with no server of its own",
      ],
      disclaimer:
        "Unofficial concept by ARYONIX, prepared as a prospective-client demonstration. Not affiliated with or endorsed by New Dimension — the firm's live website remains newdimensionngp.com.",
    },
  },
  {
    id: "rockfold",
    index: "06",
    title: "ROCKFOLD FITNESS",
    category: "Gym & Fitness Centre · Wagholi, Pune",
    description:
      "A cinematic single-page website proposal for Rockfold Fitness, built around a client-verified address, hours and phone number — clearly marked as an unapproved concept, with placeholder photography and demo-mode forms throughout.",
    status: "Unapproved Concept Proposal",
    variant: "rf-cinematic",
    liveDemo: {
      href: "/rockfold/index.html",
      linkLabel: "Open the full proposal",
      note: "Unapproved concept proposal, built by ARYONIX — not client-approved and not the gym's live website.",
    },
    caseStudy: {
      overview:
        "This one is a working proposal for a real business: Rockfold Fitness, a gym in Wagholi, Pune. A single self-contained page carries the whole pitch — a cinematic dark training atmosphere, a proposed membership structure, class and category sections, a Google Maps embed on the client-verified location, and one-tap call and directions actions. Everything the client still needs to decide on is labelled in the page itself: photography is licensed placeholder imagery, service categories are marked as proposals, and the enquiry form runs in an explicit demo mode.",
      scope: [
        "Cinematic single-page structure: hero, training, categories, membership, environment, contact",
        "Client-verified facts on the page — Wagholi address, 6 AM–11 PM daily hours, +91 96047 89090",
        "Live Google Maps embed with the client's own directions link",
        "Proposed service categories, labelled as proposals in the UI itself",
        "Membership plans with a demo-mode enquiry form — explicit success state, nothing sent",
        "Self-contained vector badge system with a built-in logo-setup tool for the client's real emblem",
      ],
      buildNotes: [
        "One hand-written HTML file — styles, scripts and badge embedded, no build step",
        "Every photograph labelled as concept placeholder imagery, none presented as the gym's own",
        "Copy that is not yet client-approved is marked as such, in the page, where it appears",
        "Verification checklist ships inside the file — what is confirmed vs. what is still pending",
      ],
      disclaimer:
        "Unapproved concept proposal by ARYONIX for Rockfold Fitness (Wagholi, Pune) — not client-approved and not the gym's live website. Photography is licensed placeholder imagery; some content remains pending client verification.",
    },
  },
];
