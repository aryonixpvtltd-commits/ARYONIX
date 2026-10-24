import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
};

/**
 * Indexed editorial section header: "01 / Label" micro-row, oversized
 * display title, optional lead paragraph.
 */
export function SectionHeader({
  index,
  label,
  title,
  lead,
  className,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="label-micro text-primary/90">{index}</span>
          <span className="h-px w-10 bg-border" aria-hidden="true" />
          <span className="label-micro text-muted-foreground">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-6 font-display text-[clamp(2.1rem,5.2vw,3.6rem)] font-medium leading-[1.04] tracking-[-0.03em] text-foreground">
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={160}>
          <div className="mt-5 max-w-2xl text-[0.975rem] leading-relaxed text-muted-foreground">
            {lead}
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
