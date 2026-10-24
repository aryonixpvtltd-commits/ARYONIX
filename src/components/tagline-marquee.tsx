import { site } from "@/lib/site";

/**
 * Full-width marquee band repeating the studio tagline.
 * The duplicate track is aria-hidden; screen readers get one static line.
 */
export function TaglineMarquee() {
  const phrase = `${site.tagline.toUpperCase()} — ARYONIX — `;
  const track = Array.from({ length: 6 }, () => phrase).join("");

  return (
    <section
      aria-label={`${site.tagline} — studio tagline`}
      className="overflow-hidden border-y border-border bg-card/40 py-5"
    >
      <p className="sr-only">{site.tagline} — ARYONIX</p>
      <div
        aria-hidden="true"
        className="flex w-max whitespace-nowrap marquee-track"
      >
        {[0, 1].map((half) => (
          <span
            key={half}
            className="font-display text-sm font-medium tracking-[0.3em] text-muted-foreground/80"
          >
            {track}
          </span>
        ))}
      </div>
    </section>
  );
}
