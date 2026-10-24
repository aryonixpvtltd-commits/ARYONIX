import { LogoLockup } from "./logo-lockup";
import { site } from "@/lib/site";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Selected Work" },
  { href: "#studio", label: "Studio" },
  { href: "#process", label: "Process" },
  { href: "#inquiry", label: "Inquiry" },
];

const contact = [
  { href: `mailto:${site.email}`, label: site.email },
  { href: `https://wa.me/${site.whatsappNumber}`, label: site.whatsappDisplay },
  { href: site.instagram, label: "Instagram" },
  { href: site.github, label: "GitHub" },
];

/**
 * Footer — logo, tagline, nav, contact index, auto-updating year.
 * Sits at the bottom via mt-auto on the page shell (sticky footer).
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-background pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <LogoLockup size="md" />
          <p className="mt-4 font-display text-sm font-medium tracking-[0.3em] text-muted-foreground">
            {site.tagline.toUpperCase()}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.description}
          </p>
        </div>

        <nav aria-label="Footer" className="lg:justify-self-center">
          <p className="label-micro text-muted-foreground">Site</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-foreground/85 transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:justify-self-center">
          <p className="label-micro text-muted-foreground">Contact</p>
          <ul className="mt-4 space-y-2.5">
            {contact.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={c.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="text-sm text-foreground/85 transition-colors hover:text-primary"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-micro text-muted-foreground">Studio</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {site.location}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Concept studies on this site are labelled as such — no client
            engagement is implied.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="shell flex flex-col items-start justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {site.legalName} — All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
