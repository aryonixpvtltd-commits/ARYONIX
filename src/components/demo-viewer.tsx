"use client";

import { ArrowUpRight, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type DemoViewerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Path of the statically exported concept site, relative to site root. */
  href: string;
  /** Project title, e.g. "NEW DIMENSION". */
  title: string;
  /** Honest framing shown under the title for this specific demo. */
  note: string;
};

/**
 * Full-screen in-page viewer for a statically exported concept site.
 * Keeps the visitor on the ARYONIX page while letting them browse the
 * concept end-to-end; an "open in new tab" link is always visible as a
 * fallback if embedded browsing fails.
 */
export function DemoViewer({
  open,
  onOpenChange,
  href,
  title,
  note,
}: DemoViewerProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        aria-describedby={undefined}
        className="fixed inset-0 left-0 top-0 z-[90] flex h-[100dvh] max-h-[100dvh] w-screen max-w-none translate-x-0 translate-y-0 flex-col gap-0 overflow-hidden rounded-none border-0 bg-background p-0 duration-200 sm:max-w-none"
      >
        {/* Viewer chrome */}
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border bg-[#111317] px-4 py-2.5 sm:px-6">
          <div className="min-w-0">
            <DialogTitle className="truncate font-display text-sm font-medium tracking-[-0.01em]">
              {title} <span className="text-muted-foreground">— ARYONIX concept demo</span>
            </DialogTitle>
            <DialogDescription className="mt-0.5 truncate text-[11px] leading-snug text-muted-foreground">
              {note}
            </DialogDescription>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              Open in new tab
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
            <DialogClose asChild>
              <button
                type="button"
                aria-label="Close concept site viewer"
                className="inline-flex size-8 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </DialogClose>
          </div>
        </div>

        {/* Concept site itself */}
        <iframe
          src={href}
          title={`${title} — concept website preview`}
          className="min-h-0 w-full flex-1 border-0 bg-[#F2EDE3]"
        />
      </DialogContent>
    </Dialog>
  );
}
