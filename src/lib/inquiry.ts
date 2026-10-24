/**
 * Inquiry configuration + WhatsApp handoff.
 *
 * The form never sends anything anywhere by itself: submitting opens
 * WhatsApp (wa.me) with a fully pre-filled message that the user reviews
 * and sends themselves. Nothing is stored on any server.
 */

export type ProjectType = {
  id: string;
  label: string;
  features: string[];
};

export const projectTypes: ProjectType[] = [
  {
    id: "business",
    label: "Business website",
    features: [
      "Services / product pages",
      "Contact form",
      "Google Maps embed",
      "Appointment booking",
      "Testimonials section",
      "SEO setup",
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce store",
    features: [
      "Product catalogue",
      "Shopping cart",
      "Online payments",
      "Inventory management",
      "Customer accounts",
      "Shipping & tax setup",
    ],
  },
  {
    id: "fitness",
    label: "Gym / fitness centre",
    features: [
      "Membership plans",
      "Trainer profiles",
      "Class schedule",
      "Photo gallery",
      "Trial / consultation booking",
    ],
  },
  {
    id: "restaurant",
    label: "Restaurant / café",
    features: [
      "Digital menu",
      "Table reservations",
      "Opening hours",
      "Photo gallery",
      "Reviews section",
    ],
  },
  {
    id: "portfolio",
    label: "Personal portfolio",
    features: [
      "Project showcase",
      "About / bio page",
      "Experience timeline",
      "Blog",
      "Contact section",
    ],
  },
  {
    id: "landing",
    label: "Landing page",
    features: [
      "Single conversion goal",
      "Lead capture form",
      "WhatsApp button",
      "Analytics tracking",
    ],
  },
  {
    id: "uiux",
    label: "UI/UX design only",
    features: [
      "Wireframes",
      "Visual design",
      "Interactive prototype",
      "Design system",
    ],
  },
  {
    id: "redesign",
    label: "Website redesign",
    features: [
      "Audit of current site",
      "Content migration",
      "SEO continuity",
      "Fresh visual language",
    ],
  },
  {
    id: "booking",
    label: "Booking / scheduling site",
    features: [
      "Time-slot calendar",
      "Reminders",
      "Admin dashboard",
      "Payments for slots",
    ],
  },
  {
    id: "webapp",
    label: "Custom web app",
    features: [
      "User accounts",
      "Database & dashboard",
      "Role-based access",
      "API integrations",
    ],
  },
  {
    id: "other",
    label: "Something else",
    features: [
      "Scope defined together",
      "Phased delivery",
    ],
  },
];

export const budgets = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹75,000",
  "₹75,000 – ₹1,00,000",
  "Over ₹1,00,000",
] as const;

export const timelines = [
  "As soon as possible",
  "Within 2 weeks",
  "Within a month",
  "1 – 3 months",
  "Flexible / planning ahead",
] as const;

export type InquiryData = {
  fullName: string;
  email: string;
  phone?: string;
  brandName?: string;
  projectType: string;
  projectTypeLabel: string;
  description: string;
  reference?: string;
  features: string[];
  budget?: string;
  timeline?: string;
};

/** Human-readable, reviewable WhatsApp message from the inquiry. */
export function buildWhatsAppMessage(d: InquiryData): string {
  const lines: string[] = [];
  lines.push("Hello ARYONIX! I'd like to discuss a project.");
  lines.push("");
  lines.push("— Contact —");
  lines.push(`Name: ${d.fullName}`);
  lines.push(`Email: ${d.email}`);
  if (d.phone) lines.push(`Phone: ${d.phone}`);
  if (d.brandName) lines.push(`Business / brand: ${d.brandName}`);
  lines.push("");
  lines.push("— Project —");
  lines.push(`Type: ${d.projectTypeLabel}`);
  lines.push(`Details: ${d.description}`);
  if (d.reference) lines.push(`Reference website: ${d.reference}`);
  if (d.features.length > 0) {
    lines.push(`Wanted features: ${d.features.join(", ")}`);
  }
  lines.push("");
  lines.push("— Preferences —");
  if (d.budget) lines.push(`Budget: ${d.budget}`);
  if (d.timeline) lines.push(`Timeline: ${d.timeline}`);
  lines.push("");
  lines.push("(Sent via the ARYONIX website inquiry form — not sent automatically; I'll tap send.)");
  return lines.join("\n");
}

/** Deep link the form opens; the user reviews and presses send themselves. */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/919359368382?text=${encodeURIComponent(message)}`;
}
