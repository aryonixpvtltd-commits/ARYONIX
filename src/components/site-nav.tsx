"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoLockup } from "./logo-lockup";
import { navLinks } from "@/lib/site";

/**
 * Fixed navigation. Transparent over the hero, blurred once scrolling.
 * The mobile overlay is an accessible dialog-style menu: aria wiring,
 * Escape to close, focus moves in on open and returns to the button
 * on close, body scroll locked while open.
 */
export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes; body scroll locks while open; focus is managed.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // Return focus to the toggle after the menu closes.
  useEffect(() => {
    if (!open) toggleRef.current?.focus({ preventScroll: true });
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open
          ? "bg-background" // solid while the overlay is open — backdrop-filter
          : scrolled       // here would trap the fixed overlay
            ? "border-b border-border bg-background/85 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="shell flex h-16 items-center justify-between"
      >
        <a
          href="#top"
          className="rounded-sm"
          aria-label="ARYONIX — back to top"
        >
          <LogoLockup />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inquiry"
            className="rounded-sm bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-sm text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile overlay */}
      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-40 flex flex-col bg-background md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <nav aria-label="Mobile" className="shell flex flex-col gap-1 pt-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-2xl font-medium tracking-[-0.02em] text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inquiry"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-sm bg-foreground px-4 py-3.5 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Start a Project
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
