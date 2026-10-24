"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { services } from "@/lib/services";

/**
 * Services — sticky intro column beside eight editorial rows.
 * Clicking a row scrolls to the inquiry form AND preselects the
 * matching project type via a CustomEvent the form listens for.
 */
export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                index="01"
                label="Services"
                title={
                  <>
                    What we do
                    <br />
                    <span className="text-muted-foreground">for you.</span>
                  </>
                }
                lead={
                  <>
                    Eight focused services, one standard: everything we ship
                    should be fast, honest and easy to live with.{" "}
                    <strong className="font-medium text-foreground">
                      Pick a service to start the conversation with the right
                      project type pre-selected.
                    </strong>
                  </>
                }
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            {services.map((service, i) => (
              <Reveal key={service.index} delay={i * 40}>
                <button
                  type="button"
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent("aryonix:preselect-type", {
                        detail: service.type,
                      }),
                    );
                    document
                      .getElementById("inquiry")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  aria-label={`Inquire about ${service.title}`}
                  className="group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-x-4 border-t border-border py-7 text-left transition-colors last:border-b hover:bg-card/50 sm:gap-x-6 sm:py-8"
                >
                  <span className="font-display text-sm text-muted-foreground">
                    {service.index}
                  </span>
                  <span>
                    <span className="block font-display text-xl font-medium tracking-[-0.02em] transition-colors group-hover:text-primary sm:text-2xl">
                      {service.title}
                    </span>
                    <span className="mt-1.5 block max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {service.value}
                    </span>
                    <span className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </span>
                  </span>
                  <ArrowRight
                    className="size-5 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
