import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

/**
 * Hero — exact brief copy, oversized display headline with the blue
 * period signature, dual CTAs, tagline row. The visual is an original
 * all-CSS composition: a browser frame containing a miniature
 * art-directed ARYONIX homepage, an overlapping type/palette specimen
 * card, and a blueprint dot grid with corner registration marks.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden pt-28 sm:pt-32"
    >
      {/* Blueprint dot grid + registration marks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(150,155,165,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 20%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 20%, black 30%, transparent 75%)",
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-24 h-4 w-4 border-l-2 border-t-2 border-muted-foreground/30"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-24 h-4 w-4 border-r-2 border-t-2 border-muted-foreground/30"
      />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="label-micro text-muted-foreground">
                Independent digital studio
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 font-display text-[clamp(2.9rem,8vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.035em]">
                Websites built
                <br />
                like they matter<span className="text-primary">.</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-muted-foreground">
                ARYONIX designs and builds fast, considered websites for
                businesses that want to look the way they actually are —
                sharp, credible, and ready to grow.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-3.5">
                <a
                  href="#inquiry"
                  className="group inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Start a Project
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  See the work
                  <ArrowDown
                    className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <p className="mt-10 font-display text-sm font-medium tracking-[0.34em] text-muted-foreground">
                DESIGN<span className="text-primary">.</span> DEVELOP
                <span className="text-primary">.</span> DEPLOY
                <span className="text-primary">.</span>
              </p>
            </Reveal>
          </div>

          {/* Visual composition */}
          <div className="relative lg:col-span-6">
            <Reveal delay={200}>
              <div className="relative mx-auto max-w-[34rem] hero-float">
                {/* corner registration marks */}
                <span
                  aria-hidden="true"
                  className="absolute -left-3 -top-3 h-5 w-5 border-l-2 border-t-2 border-primary/50"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-3 -right-3 h-5 w-5 border-b-2 border-r-2 border-primary/50"
                />

                {/* Browser frame with miniature ARYONIX homepage */}
                <div className="rounded-lg border border-border bg-card shadow-2xl shadow-black/50">
                  <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                    <span className="size-2.5 rounded-full bg-muted-foreground/40" />
                    <span className="size-2.5 rounded-full bg-muted-foreground/40" />
                    <span className="size-2.5 rounded-full bg-muted-foreground/40" />
                    <span className="ml-3 flex-1 rounded-sm bg-muted px-3 py-1 text-[9px] tracking-[0.18em] text-muted-foreground">
                      ARYONIX — DESIGN. DEVELOP. DEPLOY.
                    </span>
                  </div>
                  <div className="bg-[#0B0C0F] p-5 sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-[10px] font-bold tracking-[0.26em] text-foreground">
                        ARYONIX
                      </span>
                      <span className="rounded-sm bg-primary px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                        Start a project
                      </span>
                    </div>
                    <p className="mt-7 font-display text-[clamp(1.5rem,3.4vw,2.4rem)] font-medium leading-[1.02] tracking-[-0.02em]">
                      Design<span className="text-primary">.</span>
                      <br />
                      Develop<span className="text-primary">.</span>
                      <br />
                      Deploy<span className="text-primary">.</span>
                    </p>
                    <div className="mt-6 grid grid-cols-3 gap-2" aria-hidden="true">
                      <span className="h-9 rounded-sm border border-border bg-secondary/60" />
                      <span className="h-9 rounded-sm border border-border bg-secondary/30" />
                      <span className="h-9 rounded-sm border border-primary/40 bg-primary/10" />
                    </div>
                  </div>
                </div>

                {/* Overlapping type + palette specimen card */}
                <div className="absolute -bottom-8 -right-2 w-40 rotate-2 rounded-md border border-border bg-card p-3.5 shadow-xl shadow-black/60 sm:-right-6 sm:w-48">
                  <p className="label-micro text-muted-foreground">Palette</p>
                  <div className="mt-2.5 flex gap-1.5">
                    <span className="h-6 w-6 rounded-full bg-[#08090B] ring-1 ring-border" />
                    <span className="h-6 w-6 rounded-full bg-[#111317] ring-1 ring-border" />
                    <span className="h-6 w-6 rounded-full bg-[#F3F4F6]" />
                    <span className="h-6 w-6 rounded-full bg-[#386BFF]" />
                  </div>
                  <p className="label-micro mt-3 text-muted-foreground">Type</p>
                  <p className="mt-1 font-display text-lg font-medium leading-none">
                    Aa<span className="text-primary">.</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
