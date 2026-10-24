"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectMockup } from "./project-mockups";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { DemoViewer } from "./demo-viewer";
import { projects, type Project } from "@/lib/work";

export function WorkSection() {
  const [active, setActive] = useState<Project | null>(null);
  const [viewerOpen, setViewerOpen] = useState(false);

  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          index="02"
          label="Selected Work"
          title={
            <>
              Work that shows
              <br />
              how we think<span className="text-primary">.</span>
            </>
          }
          lead={
            <>
              Four self-initiated concept studies, each exploring a different
              business and a different visual language — plus two full concepts
              built for real businesses, which you can browse in full right
              here.{" "}
              <strong className="font-medium text-foreground">
                Every entry is labelled honestly: four are self-initiated, one
                is an unofficial prospective-client demonstration and one is an
                unapproved proposal.
              </strong>
            </>
          }
        />

        <div className="mt-14 sm:mt-20">
          {projects.map((project, i) => (
            <Reveal key={project.id}>
              <article className="group border-t border-border py-12 last:border-b sm:py-16">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14">
                  {/* Visual preview */}
                  <div
                    className={`lg:col-span-7 ${
                      i % 2 === 1 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(project)}
                      aria-label={`Open case study: ${project.title} (${project.status.toLowerCase()})`}
                      className="block w-full cursor-pointer rounded-lg transition-transform duration-500 ease-out hover:scale-[1.012] focus-visible:scale-[1.012]"
                    >
                      <ProjectMockup project={project} />
                    </button>
                  </div>

                  {/* Meta */}
                  <div
                    className={`lg:col-span-5 ${
                      i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm text-muted-foreground">
                        {project.index}
                      </span>
                      <span className="h-px w-8 bg-border" aria-hidden="true" />
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="label-micro mt-2.5 text-primary/90">
                      {project.category}
                    </p>
                    <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setActive(project)}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      <span className="border-b border-foreground/25 pb-0.5 transition-colors group-hover:border-primary/50">
                        View case study
                      </span>
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Internal case-study presentation */}
      <Dialog
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) {
            setActive(null);
            setViewerOpen(false);
          }
        }}
      >
        <DialogContent className="max-h-[85vh] max-w-xl overflow-y-auto bg-card sm:max-w-2xl">
          {active ? (
            <>
              <DialogHeader>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {active.status}
                  </span>
                  <span className="label-micro text-primary/90">
                    {active.category}
                  </span>
                </div>
                <DialogTitle className="pt-2 font-display text-3xl font-medium tracking-[-0.02em]">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="max-w-lg leading-relaxed">
                  {active.caseStudy.overview}
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
                <div>
                  <h4 className="label-micro text-muted-foreground">
                    Included in the concept
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {active.caseStudy.scope.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm">
                        <span
                          className="mt-[7px] h-1 w-3 shrink-0 bg-primary/80"
                          aria-hidden="true"
                        />
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="label-micro text-muted-foreground">
                    Build notes
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {active.caseStudy.buildNotes.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm">
                        <span
                          className="mt-[7px] h-1 w-3 shrink-0 bg-muted-foreground/60"
                          aria-hidden="true"
                        />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-relaxed text-muted-foreground/80">
                  {active.caseStudy.disclaimer}
                </p>
                <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                  {active.liveDemo ? (
                    <button
                      type="button"
                      onClick={() => setViewerOpen(true)}
                      className="inline-flex items-center gap-2 rounded-sm bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {active.liveDemo.linkLabel}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </button>
                  ) : null}
                  <a
                    href="#inquiry"
                    onClick={() => setActive(null)}
                    className={
                      active.liveDemo
                        ? "inline-flex shrink-0 items-center gap-2 rounded-sm border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                        : "inline-flex shrink-0 items-center gap-2 rounded-sm bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                    }
                  >
                    Start a project like this
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>

      {/* Full-screen viewer for exported concept sites */}
      {active?.liveDemo ? (
        <DemoViewer
          open={viewerOpen}
          onOpenChange={setViewerOpen}
          href={active.liveDemo.href}
          title={active.title}
          note={active.liveDemo.note}
        />
      ) : null}
    </section>
  );
}
