import Image from "next/image";
import type { Project } from "@/lib/work";

/**
 * Original CSS-built visual compositions for each concept project.
 * Every variant uses a genuinely different layout language.
 */

export function ProjectMockup({ project }: { project: Project }) {
  switch (project.variant) {
    case "nd-cinematic":
      return <NewDimensionMockup />;
    case "rf-cinematic":
      return <RockfoldMockup />;
    case "bs-editorial":
      return <BlendStudiooMockup />;
  }
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

/* ------------------------------------------------------------------ */
/* BLEND STUDIOO — ivory editorial, Fraunces serif, split hero         */
/* ------------------------------------------------------------------ */
function BlendStudiooMockup() {
  return (
    <div className="relative flex aspect-[4/3] flex-col overflow-hidden rounded-lg border border-border bg-[#F7F4EF]">
      {/* honesty ribbon mirroring the concept's cover label */}
      <div className="flex shrink-0 items-center justify-center gap-2 bg-[#191816] px-3 py-1.5">
        <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#B89B72]">
          Aryonix concept study
        </span>
        <span aria-hidden="true" className="text-[8px] text-[#A69A8D]/60">
          —
        </span>
        <span className="text-[8px] uppercase leading-relaxed tracking-[0.22em] text-[#A69A8D]">
          not the salon&rsquo;s live website
        </span>
      </div>

      {/* main zone: copy left, photograph right — the concept's split hero */}
      <div className="grid min-h-0 flex-1 grid-cols-1 sm:grid-cols-[1.02fr_0.98fr]">
        <div className="flex min-w-0 flex-col justify-center gap-2 px-4 py-3 sm:gap-2.5 sm:px-6">
          <p className="text-[7px] font-semibold uppercase tracking-[0.24em] text-[#6E655B] sm:text-[8px]">
            Hair · Beauty · Grooming — Baner, Pune
          </p>
          <p className="font-fraunces text-[clamp(1.3rem,3.2vw,2.3rem)] font-[420] leading-[1.04] tracking-[-0.01em] text-[#191816]">
            Your beauty,
            <br />
            your <em className="font-[380] italic text-[#8F7350]">ritual.</em>
          </p>
          <p className="hidden max-w-[26ch] text-[9px] leading-relaxed text-[#5C554C] sm:block sm:text-[10px]">
            Thoughtfully crafted hair, beauty and grooming in the heart of
            Baner — from first consultation to final finish.
          </p>
          <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
            <span className="rounded-full bg-[#191816] px-3 py-1.5 text-[8px] font-medium text-[#F7F4EF] sm:text-[9px]">
              Book an appointment
            </span>
            {['Cuts', 'Colour', 'Skin'].map((c) => (
              <span
                key={c}
                className="hidden rounded-full border border-[#191816]/30 px-2.5 py-1 text-[7px] font-semibold uppercase tracking-[0.16em] text-[#6E655B] sm:inline-block sm:text-[8px]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <figure className="relative hidden min-h-0 overflow-hidden sm:block">
          <Image
            src="/work/blend-studioo/hero.jpg"
            alt="Placeholder photograph of a stylist finishing a client's hair in a bright salon studio — licensed stock imagery used in the Blend Studioo concept, not the salon's own work"
            fill
            sizes="(min-width: 1024px) 42vw, 50vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#F7F4EF] via-transparent to-transparent"
          />
          <figcaption className="absolute bottom-2 left-2.5 rounded-full bg-[#191816]/75 px-2 py-0.5 text-[7px] uppercase tracking-[0.16em] text-[#F7F4EF] sm:text-[8px]">
            Baner · Pune
          </figcaption>
          <span className="absolute right-2 top-2 text-[7px] uppercase tracking-[0.14em] text-white/70 sm:text-[8px]">
            Licensed stock · Unsplash
          </span>
        </figure>
      </div>

      {/* bottom strip: service ticker + honest label */}
      <div className="flex shrink-0 items-center justify-between gap-3 border-t border-[#191816]/15 bg-[#EEE8DF] px-4 py-2 sm:px-6">
        <p className="min-w-0 truncate text-[8px] font-semibold uppercase tracking-[0.2em] text-[#6E655B] sm:text-[9px]">
          Precision cuts · Hair colour · Balayage · Treatments · Facials ·
          Bridal · Grooming
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <div className="relative h-7 w-10 overflow-hidden rounded-[2px] sm:h-8 sm:w-12">
            <Image
              src="/work/blend-studioo/colour.jpg"
              alt="Placeholder photograph of a colourist at work — licensed stock imagery"
              fill
              sizes="48px"
              className="object-cover object-center"
            />
          </div>
          <span className="rounded-full border border-[#191816]/20 px-2 py-0.5 text-[7px] uppercase tracking-[0.16em] text-[#6E655B] sm:text-[8px]">
            Details pending verification
          </span>
        </div>
      </div>
    </div>
  );
}
