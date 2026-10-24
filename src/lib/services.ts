/**
 * The studio's eight services, written in plain language.
 * `type` maps a service row to the matching inquiry project type,
 * so clicking a row preselects it in the form below.
 */
export type Service = {
  index: string;
  title: string;
  value: string;
  tags: string[];
  type: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Business Websites",
    value:
      "A complete, credible online presence for a real business — every page doing one clear job, from first impression to first conversation.",
    tags: ["Multi-page", "Content structure", "Contact flows"],
    type: "business",
  },
  {
    index: "02",
    title: "E-commerce Websites",
    value:
      "Stores that make buying feel effortless — a clean catalogue, a short path to checkout, and admin you can actually run yourself.",
    tags: ["Catalogue", "Payments", "Orders"],
    type: "ecommerce",
  },
  {
    index: "03",
    title: "Landing Pages",
    value:
      "One page with one job: turning a visitor into an enquiry. Written, designed and tuned around a single decision.",
    tags: ["Single focus", "Fast to ship", "Campaign-ready"],
    type: "landing",
  },
  {
    index: "04",
    title: "UI/UX Design",
    value:
      "Interfaces planned before they're painted — flows, hierarchy and states decided deliberately, so the build has no guesswork.",
    tags: ["Wireframes", "Design systems", "Prototypes"],
    type: "uiux",
  },
  {
    index: "05",
    title: "Website Redesigns",
    value:
      "For sites that no longer match the business behind them. Keep what works, rebuild what doesn't, lose nothing in transit.",
    tags: ["Audits", "Content migration", "SEO continuity"],
    type: "redesign",
  },
  {
    index: "06",
    title: "Performance & SEO",
    value:
      "Fast pages that search engines and humans both understand — measured, not promised.",
    tags: ["Core Web Vitals", "Technical SEO", "Analytics"],
    type: "business",
  },
  {
    index: "07",
    title: "Booking & Scheduling",
    value:
      "Appointment and reservation flows that fill your calendar without a single back-and-forth message.",
    tags: ["Calendars", "Reminders", "Time-slot logic"],
    type: "booking",
  },
  {
    index: "08",
    title: "Care & Maintenance",
    value:
      "Your site stays current, secure and quick after launch — small improvements shipped regularly, not a rebuild every three years.",
    tags: ["Updates", "Backups", "Monitoring"],
    type: "other",
  },
];
