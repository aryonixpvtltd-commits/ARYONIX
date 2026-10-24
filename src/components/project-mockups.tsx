import Image from "next/image";
import type { Project } from "@/lib/work";

/**
 * Original CSS-built visual compositions for each concept project.
 * Every variant uses a genuinely different layout language.
 */

export function ProjectMockup({ project }: { project: Project }) {
  switch (project.variant) {
    case "fitness-bold":
      return <FitniqMockup />;
    case "fitness-orbit":
      return <OrbitMockup />;
    case "editorial-light":
      return <MeridianMockup />;
    case "portfolio-min":
      return <FolioMockup />;
    case "nd-cinematic":
      return <NewDimensionMockup />;
    case "rf-cinematic":
      return <RockfoldMockup />;
  }
}

/* ------------------------------------------------------------------ */
/* FITNIQ — bold, condensed, high energy                               */
/* ------------------------------------------------------------------ */
function FitniqMockup() {
  return (
    <div className="relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-lg border border-border bg-[#0B0C0F] p-5 sm:p-7">
      {/* diagonal energy stripes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(243,244,246,0.045) 0 2px, transparent 2px 22px)",
        }}
      />
      <div className="relative flex items-center justify-between">
        <span className="font-display text-sm font-bold italic tracking-tight">
          FITNIQ<span className="text-primary">®</span>
        </span>
        <span className="rounded-sm bg-primary px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
          Join now
        </span>
      </div>

      <div className="relative py-6">
        <p className="font-display text-[clamp(2.6rem,7vw,4.4rem)] font-bold italic leading-[0.9] tracking-[-0.03em]">
          TRAIN
          <br />
          <span className="text-stroke">HARDER.</span>
        </p>
        <div className="mt-4 h-1.5 w-24 bg-primary" aria-hidden="true" />
      </div>

      <div className="relative flex flex-wrap gap-2">
        {["Strength", "HIIT", "Mobility", "Boxing"].map((c) => (
          <span
            key={c}
            className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ORBIT FITNESS — centered, geometric, calm                           */
/* ------------------------------------------------------------------ */
function OrbitMockup() {
  return (
    <div className="relative flex aspect-[4/3] flex-col overflow-hidden rounded-lg border border-border bg-[#0A0B0E]">
      <div className="flex items-center justify-between px-5 pt-5 sm:px-7">
        <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-foreground">
          Orbit
        </span>
        <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
          Performance Training
        </span>
      </div>

      {/* orbital rings */}
      <div className="relative mx-auto flex w-full flex-1 items-center justify-center py-2">
        <div className="relative h-36 w-36 sm:h-44 sm:w-44" aria-hidden="true">
          <span className="absolute inset-0 rounded-full border border-foreground/15" />
          <span className="absolute inset-5 rounded-full border border-foreground/25" />
          <span className="absolute inset-10 rounded-full border border-foreground/40" />
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
          <span className="orbit-spin absolute inset-0">
            <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-foreground" />
          </span>
        </div>
      </div>

      {/* schedule rows */}
      <div className="border-t border-border px-5 sm:px-7">
        {[
          ["Mon", "Strength Block"],
          ["Wed", "Conditioning"],
          ["Fri", "Recovery Lab"],
        ].map(([day, cls]) => (
          <div
            key={day}
            className="flex items-baseline justify-between border-b border-border py-2.5 last:border-b-0"
          >
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              {day}
            </span>
            <span className="text-xs text-foreground">{cls}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MERIDIAN & CO. — light, editorial, restrained                       */
/* ------------------------------------------------------------------ */
function MeridianMockup() {
  return (
    <div className="relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-lg border border-border bg-[#F3F4F6] p-5 text-[#14161A] sm:p-8">
      <div>
        <div className="flex items-center justify-between border-b border-[#14161A]/15 pb-3">
          <span className="font-serif text-lg tracking-wide">
            Meridian &amp; Co.
          </span>
          <span className="text-[9px] uppercase tracking-[0.24em] text-[#14161A]/55">
            Menu
          </span>
        </div>
        <p className="mt-2 text-right text-[9px] uppercase tracking-[0.22em] text-[#14161A]/45">
          Editorial Concept — N° 01
        </p>
      </div>

      <div className="py-4">
        <p className="font-serif text-[clamp(1.7rem,4.4vw,2.7rem)] leading-[1.08] tracking-[-0.01em]">
          Clarity in every
          <br />
          <em className="font-normal italic text-[#14161A]/70">decision.</em>
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-[#14161A]/15 pt-3">
        {["Advisory", "Strategy", "Capital"].map((item, i) => (
          <span
            key={item}
            className={`text-[9px] uppercase tracking-[0.28em] ${
              i === 1 ? "text-[#14161A]" : "text-[#14161A]/55"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FOLIO — minimal, whitespace-led                                     */
/* ------------------------------------------------------------------ */
function FolioMockup() {
  return (
    <div className="relative flex aspect-[4/3] flex-col overflow-hidden rounded-lg border border-border bg-[#0A0B0D] p-5 sm:p-7">
      <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
        <span className="text-foreground">Folio</span>
        <div className="flex gap-4">
          <span>Work</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center py-4">
        <p className="max-w-[16ch] font-display text-[clamp(1.3rem,3.4vw,2rem)] font-normal leading-[1.15] tracking-[-0.02em] text-foreground">
          Selected works, kept simple.
        </p>
        <p className="mt-2 text-[10px] tracking-[0.2em] text-muted-foreground">
          2024 — 2025
        </p>
      </div>

      <div className="grid grid-cols-4 gap-2" aria-hidden="true">
        <span className="h-14 rounded-sm bg-foreground/25 transition-colors duration-300 group-hover:bg-foreground/40" />
        <span className="h-14 rounded-sm bg-foreground/12 transition-colors duration-300 group-hover:bg-foreground/25" />
        <span className="h-14 rounded-sm bg-foreground/8 transition-colors duration-300 group-hover:bg-foreground/18" />
        <span className="h-14 rounded-sm bg-primary/70 transition-colors duration-300 group-hover:bg-primary" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* NEW DIMENSION — cinematic ivory/charcoal, photo-led                 */
/* ------------------------------------------------------------------ */
function NewDimensionMockup() {
  return (
    <div className="relative flex aspect-[4/3] flex-col overflow-hidden rounded-lg border border-border bg-[#F2EDE3]">
      {/* demo ribbon, mirroring the concept site's honesty guard */}
      <div className="flex shrink-0 items-center justify-center gap-2 bg-[#171310] px-3 py-1.5">
        <span className="text-[8px] font-medium uppercase tracking-[0.22em] text-[#C2A878]">
          ARYONIX concept
        </span>
        <span aria-hidden="true" className="text-[8px] text-[#B3A68F]/60">
          —
        </span>
        <span className="truncate text-[8px] uppercase tracking-[0.22em] text-[#B3A68F]">
          design demo, not the live site
        </span>
      </div>

      {/* cinematic charcoal hero with settling photograph */}
      <div className="relative h-[58%] shrink-0 overflow-hidden bg-[#171310]">
        <Image
          src="/work/new-dimension/hero.jpg"
          alt="Placeholder photograph of a warm, sunlit interior — licensed stock imagery used in the New Dimension concept, not the firm's own project"
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#171310]/90 via-[#171310]/35 to-[#171310]/50"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#171310]/55 via-transparent to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
          <p className="text-[8px] uppercase tracking-[0.24em] text-[#C2A878] sm:text-[9px]">
            New Dimension · Interior design · Nagpur
          </p>
          <p className="mt-1.5 max-w-[22ch] font-cormorant text-[clamp(1.25rem,3vw,2.1rem)] font-light leading-[1.05] text-[#F2EDE3]">
            Interiors rooted in vastu, drawn with{" "}
            <em className="font-normal italic text-[#C2A878]">an artist&rsquo;s</em> hand.
          </p>
        </div>
        <p className="absolute right-3 top-2.5 text-[7px] uppercase tracking-[0.16em] text-[#F2EDE3]/40 sm:text-[8px]">
          Placeholder · Unsplash
        </p>
      </div>

      {/* ivory editorial strip */}
      <div className="flex min-h-0 flex-1 items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <p className="text-[8px] uppercase tracking-[0.28em] text-[#7D7263]">
            The practice
          </p>
          <p className="mt-1.5 font-cormorant text-[clamp(1rem,2.2vw,1.45rem)] leading-[1.12] text-[#211C16]">
            Edgy, yet attainable.
            <br />
            Current, yet timeless.
          </p>
          <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#7D7263]">
            Nagpur · Est. 2007
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <div className="relative h-14 w-[4.5rem] overflow-hidden rounded-[2px] sm:h-[4.75rem] sm:w-24">
            <Image
              src="/work/new-dimension/living-room.jpg"
              alt="Placeholder photograph of a styled living room — licensed stock imagery"
              fill
              sizes="96px"
              className="object-cover object-center"
            />
          </div>
          <div className="relative h-14 w-[4.5rem] overflow-hidden rounded-[2px] sm:h-[4.75rem] sm:w-24">
            <Image
              src="/work/new-dimension/kitchen.jpg"
              alt="Placeholder photograph of a bespoke kitchen — licensed stock imagery"
              fill
              sizes="96px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ROCKFOLD FITNESS — dark cinematic, badge + real training photos     */
/* ------------------------------------------------------------------ */

/** Miniature rendition of the concept's circular ROCK FOLD FITNESS badge. */
function RockfoldBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Rockfold Fitness badge — vector rendition from the concept"
    >
      <circle cx="100" cy="100" r="97" fill="#101216" />
      <circle cx="100" cy="100" r="93" fill="none" stroke="#F5F5F7" strokeWidth="5" />
      <circle cx="100" cy="100" r="56" fill="none" stroke="#F5F5F7" strokeWidth="2.5" />
      <path id="rf-arc-top" d="M31,100 A69,69 0 0 1 169,100" fill="none" />
      <path id="rf-arc-bot" d="M22,100 A78,78 0 0 0 178,100" fill="none" />
      <text fill="#F5F5F7" fontSize="26" fontWeight="900" letterSpacing="3.5" fontFamily="Arial Black, Arial, sans-serif">
        <textPath href="#rf-arc-top" startOffset="50%" textAnchor="middle">ROCK FOLD</textPath>
      </text>
      <text fill="#F5F5F7" fontSize="23" fontWeight="900" letterSpacing="7" fontFamily="Arial Black, Arial, sans-serif">
        <textPath href="#rf-arc-bot" startOffset="50%" textAnchor="middle">FITNESS</textPath>
      </text>
      {/* barbell pictogram with striped plates */}
      <g fill="#F5F5F7">
        <rect x="72" y="97.5" width="56" height="5" rx="2.5" />
        <rect x="79" y="93" width="4.5" height="14" rx="1" />
        <rect x="116.5" y="93" width="4.5" height="14" rx="1" />
        <rect x="70" y="90" width="4.5" height="20" rx="1" />
        <rect x="125.5" y="90" width="4.5" height="20" rx="1" />
      </g>
    </svg>
  );
}

function RockfoldMockup() {
  return (
    <div className="relative flex aspect-[4/3] flex-col overflow-hidden rounded-lg border border-border bg-[#0C0D10]">
      {/* honesty ribbon mirroring the proposal's unapproved status */}
      <div className="flex shrink-0 items-center justify-center gap-2 border-b border-white/10 bg-[#101216] px-3 py-1.5">
        <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#8b909a]">
          Unapproved concept proposal
        </span>
        <span aria-hidden="true" className="text-[8px] text-[#565b64]">
          ·
        </span>
        <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#F5F5F7]/70">
          Wagholi, Pune
        </span>
      </div>

      {/* main zone: copy left, hero photograph right */}
      <div className="grid min-h-0 flex-1 grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col justify-between p-4 sm:p-6">
          <RockfoldBadge className="h-12 w-12 sm:h-16 sm:w-16" />
          <div className="pb-1">
            <p className="font-archivo text-[clamp(1.5rem,3.6vw,2.5rem)] font-black leading-[0.95] tracking-[-0.01em] text-[#F5F5F7]">
              LIFT.
              <br />
              REPEAT.
              <br />
              <span className="text-[#3D7BFF]">BELONG.</span>
            </p>
            <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.18em] text-[#8b909a] sm:text-[9px]">
              Ubale Nagar, Pune · 6 AM–11 PM
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="/work/rockfold/hero.jpg"
            alt="Concept placeholder photograph — athlete preparing for strength training in a dark, industrial gym"
            fill
            sizes="(min-width: 1024px) 42vw, 50vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0C0D10] via-[#0C0D10]/25 to-transparent"
          />
          <span className="absolute right-2.5 top-2.5 max-w-[12ch] text-right font-mono text-[7px] uppercase leading-relaxed tracking-[0.14em] text-white/45 sm:text-[8px]">
            Concept
            <br />
            photography
          </span>
        </div>
      </div>

      {/* bottom strip: supporting thumbnails + honest labels */}
      <div className="flex shrink-0 items-center justify-between gap-3 border-t border-white/10 px-4 py-2.5 sm:px-6">
        <div className="flex gap-2">
          <div className="relative h-9 w-14 overflow-hidden rounded-[2px] sm:h-11 sm:w-[4.5rem]">
            <Image
              src="/work/rockfold/barbell.jpg"
              alt="Concept placeholder photograph — athlete gripping a loaded barbell"
              fill
              sizes="72px"
              className="object-cover object-center"
            />
          </div>
          <div className="relative h-9 w-14 overflow-hidden rounded-[2px] sm:h-11 sm:w-[4.5rem]">
            <Image
              src="/work/rockfold/training.jpg"
              alt="Concept placeholder photograph — functional training movements"
              fill
              sizes="72px"
              className="object-cover object-center"
            />
          </div>
        </div>
        <span className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.18em] text-[#8b909a] sm:text-[8px]">
          Demo form · placeholders only
        </span>
      </div>
    </div>
  );
}
