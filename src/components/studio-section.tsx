import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

const principles = [
  {
    title: "Clarity over cleverness",
    body: "A website wins when a stranger understands it in seconds. We choose the plain option over the impressive one, every time it matters.",
  },
  {
    title: "Design decisions with reasons",
    body: "Every color, weight and spacing value exists because of something specific about your business. If we can't explain a choice, it doesn't ship.",
  },
  {
    title: "Engineering as a craft",
    body: "Fast load, clean markup, accessible interactions. The invisible parts are where a site earns the right to be trusted.",
  },
  {
    title: "Honest content only",
    body: "We build with what is real — verified facts, real photography plans, no invented clients or borrowed credibility.",
  },
  {
    title: "Built to be maintained",
    body: "A website is not a poster; it's a system your business lives in. We structure content so the next update is routine, not a rescue.",
  },
];

/**
 * Studio — the narrative + five working principles.
 */
export function StudioSection() {
  return (
    <section id="studio" className="scroll-mt-20 py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          index="03"
          label="Studio"
          title={
            <>
              Design-led<span className="text-primary">.</span>
              <br />
              Engineering-grade<span className="text-primary">.</span>
            </>
          }
          lead={
            <>
              ARYONIX is an independent digital studio. Small on purpose — every
              project gets the same hands from first sketch to launch day, and
              nothing is handed down to someone who wasn&apos;t in the room when
              it was decided.
            </>
          }
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article
                className={`h-full bg-card p-6 sm:p-7 ${
                  i === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <p className="label-micro text-primary/90">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-lg font-medium tracking-[-0.01em]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
