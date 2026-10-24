import { ArrowUpRight, Github, Globe, Instagram, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { site } from "@/lib/site";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: site.whatsappDisplay,
    href: `https://wa.me/${site.whatsappNumber}`,
    icon: MessageCircle,
  },
  {
    label: "Instagram",
    value: "@" + site.instagram.split("/").pop(),
    href: site.instagram,
    icon: Instagram,
  },
  {
    label: "GitHub",
    value: site.github.replace("https://", ""),
    href: site.github,
    icon: Github,
  },
  {
    label: "Website",
    value: site.website.replace("https://", ""),
    href: site.website,
    icon: Globe,
  },
];

/**
 * Final call to action — one clear next step plus a complete,
 * real-contacts-only index.
 */
export function FinalCta() {
  return (
    <section
      aria-label="Contact"
      className="border-t border-border bg-card/40 py-24 sm:py-32"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label-micro text-muted-foreground">06 / Contact</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2.3rem,6vw,4.2rem)] font-medium leading-[1.02] tracking-[-0.03em]">
                Ready when
                <br />
                you are<span className="text-primary">.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Tell us what you&apos;re building. We&apos;ll reply with honest
                thoughts on scope, timeline and whether we&apos;re the right
                studio for it.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <a
                href="#inquiry"
                className="group mt-9 inline-flex items-center gap-2 rounded-sm bg-foreground px-7 py-4 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Start a Project
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5">
            <ul className="divide-y divide-border rounded-lg border border-border bg-card">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={c.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-4 p-4 transition-colors hover:bg-secondary/60 sm:p-5"
                  >
                    <c.icon
                      className="size-4.5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="label-micro block text-muted-foreground">
                        {c.label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm text-foreground">
                        {c.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
