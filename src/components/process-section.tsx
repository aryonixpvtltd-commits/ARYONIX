import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We learn the business first — what you sell, who buys it and what currently gets in the way.",
  },
  {
    n: "02",
    title: "Define",
    body: "Scope, structure and success criteria are written down and agreed before any design starts.",
  },
  {
    n: "03",
    title: "Design",
    body: "Flows and layouts are decided with reasons you can hear, not taste you have to trust.",
  },
  {
    n: "04",
    title: "Develop",
    body: "The approved design is built properly — fast, accessible and structured for future edits.",
  },
  {
    n: "05",
    title: "Deploy",
    body: "Launch is measured: performance checked, forms tested, analytics verified, nothing left to luck.",
  },
  {
    n: "06",
    title: "Evolve",
    body: "After launch we watch real behaviour and improve in small, deliberate increments.",
  },
];

/**
 * Process — six numbered steps in an editorial grid.
 */
export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-20 py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          index="04"
          label="Process"
          title={
            <>
              Six steps<span className="text-primary">.</span>
              <br />
              No surprises<span className="text-primary">.</span>
            </>
          }
          lead="The same route every project takes, whether it's a one-page site or a full store. You always know which step you're on and what comes next."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 60}>
              <li className="h-full bg-card p-6 sm:p-7">
                <p className="font-display text-3xl font-medium tracking-[-0.02em] text-primary/90">
                  {step.n}
                </p>
                <h3 className="mt-4 font-display text-lg font-medium tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
