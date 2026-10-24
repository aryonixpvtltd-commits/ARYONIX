export type ProjectStatus =
  | "Prospective-Client Demo"
  | "Unapproved Concept Proposal"
  | "Unofficial Concept Study";

export type Project = {
  id: "new-dimension" | "rockfold" | "blend-studioo";
  index: string;
  title: string;
  category: string;
  description: string;
  status: ProjectStatus;
  /**
   * Visual composition variant rendered by the mockup components.
   * Each project gets a genuinely different layout treatment.
   */
  variant: "nd-cinematic" | "rf-cinematic" | "bs-editorial";
  /**
   * Browsable concept sites: statically exported builds served from
   * public/ and opened in the in-page demo viewer.
   */
  liveDemo: {
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
    id: "new-dimension",
    index: "01",
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
        "This concept was built for a real business: New Dimension, a partner-led interior design studio in Nagpur. It reimagines the firm's web presence in a cinematic ivory-and-charcoal editorial language — Cormorant Garamond headlines, a slow-settling hero photograph, and a service and enquiry structure mapped from the firm's own published content. It is a demonstration of how ARYONIX would present this firm online: unofficial, unaffiliated, and honest about every placeholder.",
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
    index: "02",
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
  {
    id: "blend-studioo",
    index: "03",
    title: "BLEND STUDIOO",
    category: "Hair, Beauty & Grooming Studio · Baner, Pune",
    description:
      "A calmer, more editorial redesign concept for Blend Studioo — built around the studio's name, location and live website only, with contact details, pricing and reviews deliberately left out until they can be verified with the salon.",
    status: "Unofficial Concept Study",
    variant: "bs-editorial",
    liveDemo: {
      href: "/blendstudio/index.html",
      linkLabel: "Open the full concept",
      note: "Unofficial redesign concept, built by ARYONIX — not commissioned or endorsed, and not the salon's live website.",
    },
    caseStudy: {
      overview:
        "A self-initiated concept study for Blend Studioo, a hair, beauty and grooming studio in Baner, Pune. It reimagines the salon's web presence in a quieter editorial language — Fraunces headlines on an ivory-and-charcoal canvas, a split hero with a slow-settling photograph, a numbered services menu, and a booking flow that says exactly what it is: a demonstration. Only three facts about the business are asserted anywhere — its name, its locality, and its live website — everything else waits for verification.",
      scope: [
        "Split editorial hero carrying the concept's own positioning — “Your beauty, your ritual.”",
        "Numbered services menu across six disciplines with expandable rows",
        "The Blend Ritual — a four-step service story on a dark chapter",
        "Reviews handled honestly: no invented testimonials — a link to the salon's Google listing instead",
        "Gallery labelled as licensed stock, none of it the salon's own work",
        "Demo-mode booking form — explicit demonstration notice, nothing stored or sent",
        "One-tap Google Maps directions and review links for the real studio",
      ],
      buildNotes: [
        "Only verified facts used: name, locality (Baner, Pune) and blendstudioo.com — no phone, hours or ratings anywhere",
        "Honesty guards in the UI: concept cover, demo-mode form, per-image stock labels, footer verification note",
        "Fraunces + Hanken Grotesk pairing on an ivory, charcoal and champagne palette",
        "Single self-contained HTML file with image fallback chains and reduced-motion support",
      ],
      disclaimer:
        "Unofficial concept study by ARYONIX for Blend Studioo (Baner, Pune) — not commissioned or endorsed, and not the salon's live website. Business details are illustrative pending verification; photography is licensed stock imagery.",
    },
  },
];
