"use client";

import { flushSync } from "react-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import {
  budgets,
  buildWhatsAppLink,
  buildWhatsAppMessage,
  projectTypes,
  timelines,
  type InquiryData,
} from "@/lib/inquiry";
import { site } from "@/lib/site";

type Step = 1 | 2 | 3 | 4;

type Errors = Partial<Record<"fullName" | "email" | "projectType" | "description", string>>;

const inputClass =
  "w-full rounded-sm border border-input bg-secondary/60 px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-ring focus:outline-none";
const chipBase =
  "cursor-pointer rounded-full border px-3.5 py-2 text-xs font-medium transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-ring peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-foreground hover:border-muted-foreground/50";
const labelMicro = "label-micro text-muted-foreground";

/**
 * Inquiry — 4-step progressive disclosure form ending in a WhatsApp
 * handoff. Nothing is ever transmitted or stored by the website itself:
 * submitting opens WhatsApp with a pre-filled message that the user
 * reviews and sends. A plain fallback link + copyable message are always
 * visible, so the flow works even if popups are blocked.
 */
export function InquirySection() {
  const [step, setStep] = useState<Step>(1);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brandName, setBrandName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [description, setDescription] = useState("");
  const [reference, setReference] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  const activeType = useMemo(
    () => projectTypes.find((t) => t.id === projectType) ?? null,
    [projectType],
  );

  const message = useMemo(
    () =>
      buildWhatsAppMessage({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        brandName: brandName.trim() || undefined,
        projectType,
        projectTypeLabel:
          projectTypes.find((t) => t.id === projectType)?.label ?? projectType,
        description: description.trim(),
        reference: reference.trim() || undefined,
        features: features.filter((f) =>
          projectTypes
            .find((t) => t.id === projectType)
            ?.features.includes(f) ?? false,
        ),
        budget: budget || undefined,
        timeline: timeline || undefined,
      }),
    [
      fullName,
      email,
      phone,
      brandName,
      projectType,
      description,
      reference,
      features,
      budget,
      timeline,
    ],
  );

  /* Render-time view model for the review step. */
  const data: InquiryData = {
    fullName: fullName.trim(),
    email: email.trim(),
    phone: phone.trim() || undefined,
    brandName: brandName.trim() || undefined,
    projectType,
    projectTypeLabel: activeType?.label ?? projectType,
    description: description.trim(),
    reference: reference.trim() || undefined,
    features: features.filter((f) => activeType?.features.includes(f) ?? false),
    budget: budget || undefined,
    timeline: timeline || undefined,
  };

  /* Service rows can preselect a project type and jump here. */
  useEffect(() => {
    const onPreselect = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (projectTypes.some((t) => t.id === id)) {
        setProjectType(id);
        setStep(2);
        setSent(false);
      }
    };
    window.addEventListener("aryonix:preselect-type", onPreselect);
    return () =>
      window.removeEventListener("aryonix:preselect-type", onPreselect);
  }, []);

  function validateStep(s: Step): Errors {
    const next: Errors = {};
    if (s === 1) {
      if (!fullName.trim()) next.fullName = "Please tell us your name.";
      if (!email.trim()) next.email = "An email address is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
        next.email = "That email address doesn't look complete.";
    }
    if (s === 2) {
      if (!projectType) next.projectType = "Choose the type that fits best.";
      if (description.trim().length < 10)
        next.description =
          "A sentence or two (at least 10 characters) helps us prepare properly.";
    }
    return next;
  }

  function goNext() {
    const found = validateStep(step);
    if (Object.keys(found).length > 0) {
      // Flush so the aria-invalid attributes exist before we move focus.
      flushSync(() => setErrors(found));
      const firstInvalid = formRef.current?.querySelector<HTMLElement>(
        '[aria-invalid="true"]',
      );
      firstInvalid?.focus();
      return;
    }
    setErrors({});
    setStep((s) => Math.min(4, s + 1) as Step);
  }

  function goBack() {
    setErrors({});
    setStep((s) => Math.max(1, s - 1) as Step);
  }

  function openWhatsApp() {
    setSent(true);
    window.open(
      buildWhatsAppLink(message),
      "_blank",
      "noopener,noreferrer",
    );
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  const stepTitles: Record<Step, string> = {
    1: "Contact",
    2: "Project",
    3: "Features & preferences",
    4: "Review & send",
  };

  return (
    <section id="inquiry" className="scroll-mt-20 py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          index="05"
          label="Inquiry"
          title={
            <>
              Tell us about
              <br />
              your project<span className="text-primary">.</span>
            </>
          }
          lead={
            <>
              Four short steps, about two minutes.{" "}
              <strong className="font-medium text-foreground">
                Nothing is sent automatically and nothing is stored
              </strong>{" "}
              — at the end, WhatsApp opens with your message ready for you to
              review and send.
            </>
          }
        />

        <Reveal delay={120}>
          <div className="mt-12 rounded-lg border border-border bg-card p-6 sm:p-10">
            {/* Progress */}
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.16em]">
              {([1, 2, 3, 4] as Step[]).map((s, i) => (
                <li key={s} className="flex items-center gap-2">
                  {i > 0 ? (
                    <span aria-hidden="true" className="text-muted-foreground/50">
                      /
                    </span>
                  ) : null}
                  <span
                    aria-current={step === s ? "step" : undefined}
                    className={
                      step === s
                        ? "font-semibold text-foreground"
                        : step > s
                          ? "text-primary"
                          : "text-muted-foreground/60"
                    }
                  >
                    {s}. {stepTitles[s]}
                  </span>
                </li>
              ))}
            </ol>

            {sent ? (
              /* Confirmation panel */
              <div className="mt-8 border-t border-border pt-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-xl font-medium">
                    Your message is ready in WhatsApp
                  </h3>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  If a WhatsApp window opened, your message is already drafted —{" "}
                  <strong className="text-foreground">
                    please check it and press send yourself
                  </strong>
                  . Nothing was sent automatically, and this website stores
                  nothing.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={buildWhatsAppLink(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Reopen WhatsApp
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={copyMessage}
                    className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    <Copy className="size-4" aria-hidden="true" />
                    {copied ? "Copied!" : "Copy the message"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPreview((v) => !v)}
                    className="text-sm font-medium text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
                    aria-expanded={showPreview}
                  >
                    {showPreview ? "Hide message preview" : "Preview the message"}
                  </button>
                </div>
                {showPreview ? (
                  <pre className="mt-4 max-h-72 overflow-auto whitespace-pre-wrap rounded-sm border border-border bg-secondary/50 p-4 text-xs leading-relaxed text-foreground/90">
                    {message}
                  </pre>
                ) : null}
                <p className="mt-5 text-xs text-muted-foreground/80">
                  Prefer email? Write to{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-foreground underline decoration-border underline-offset-4 hover:text-primary"
                  >
                    {site.email}
                  </a>{" "}
                  — or start a fresh inquiry:{" "}
                  <button
                    type="button"
                    className="text-foreground underline decoration-border underline-offset-4 hover:text-primary"
                    onClick={() => {
                      setSent(false);
                      setStep(1);
                    }}
                  >
                    new inquiry
                  </button>
                  .
                </p>
              </div>
            ) : (
              /* Form steps */
              <form
                ref={formRef}
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  if (step === 4) openWhatsApp();
                  else goNext();
                }}
                className="mt-8 border-t border-border pt-8"
              >
                {/* STEP 1 — Contact */}
                {step === 1 ? (
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="inq-fullName" className={labelMicro}>
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="inq-fullName"
                        type="text"
                        autoComplete="name"
                        className={`${inputClass} mt-2.5`}
                        placeholder="Your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={
                          errors.fullName ? "inq-fullName-error" : undefined
                        }
                      />
                      {errors.fullName ? (
                        <p
                          id="inq-fullName-error"
                          role="alert"
                          className="mt-2 text-xs text-destructive"
                        >
                          {errors.fullName}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <label htmlFor="inq-email" className={labelMicro}>
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        id="inq-email"
                        type="email"
                        autoComplete="email"
                        className={`${inputClass} mt-2.5`}
                        placeholder="you@business.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "inq-email-error" : undefined
                        }
                      />
                      {errors.email ? (
                        <p
                          id="inq-email-error"
                          role="alert"
                          className="mt-2 text-xs text-destructive"
                        >
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="inq-phone" className={labelMicro}>
                        Phone / WhatsApp <span className="text-muted-foreground/60">(optional)</span>
                      </label>
                      <input
                        id="inq-phone"
                        type="tel"
                        autoComplete="tel"
                        className={`${inputClass} mt-2.5`}
                        placeholder="+91 …"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                ) : null}

                {/* STEP 2 — Project */}
                {step === 2 ? (
                  <div className="grid gap-7">
                    <div>
                      <label htmlFor="inq-brand" className={labelMicro}>
                        Business / brand name <span className="text-muted-foreground/60">(optional)</span>
                      </label>
                      <input
                        id="inq-brand"
                        type="text"
                        autoComplete="organization"
                        className={`${inputClass} mt-2.5`}
                        placeholder="e.g. Sunrise Dental Clinic"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                      />
                    </div>

                    <fieldset>
                      <legend className={labelMicro}>
                        Project type <span className="text-primary">*</span>
                      </legend>
                      <div className="mt-3 flex flex-wrap gap-2.5">
                        {projectTypes.map((t) => (
                          <label key={t.id} className="inline-flex">
                            <input
                              type="radio"
                              name="projectType"
                              value={t.id}
                              checked={projectType === t.id}
                              onChange={() => {
                                setProjectType(t.id);
                                setFeatures([]); // features are type-specific
                              }}
                              className="peer sr-only"
                              aria-describedby={
                                errors.projectType ? "inq-type-error" : undefined
                              }
                            />
                            <span className={chipBase}>{t.label}</span>
                          </label>
                        ))}
                      </div>
                      {errors.projectType ? (
                        <p
                          id="inq-type-error"
                          role="alert"
                          className="mt-2 text-xs text-destructive"
                        >
                          {errors.projectType}
                        </p>
                      ) : null}
                    </fieldset>

                    <div>
                      <label htmlFor="inq-description" className={labelMicro}>
                        Describe the project <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="inq-description"
                        rows={4}
                        className={`${inputClass} mt-2.5 resize-y`}
                        placeholder="What does your business do, and what should this website achieve?"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        aria-invalid={!!errors.description}
                        aria-describedby={
                          errors.description ? "inq-desc-error" : undefined
                        }
                      />
                      {errors.description ? (
                        <p
                          id="inq-desc-error"
                          role="alert"
                          className="mt-2 text-xs text-destructive"
                        >
                          {errors.description}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="inq-reference" className={labelMicro}>
                        Reference website <span className="text-muted-foreground/60">(optional)</span>
                      </label>
                      <input
                        id="inq-reference"
                        type="url"
                        inputMode="url"
                        className={`${inputClass} mt-2.5`}
                        placeholder="A site whose look or feel you like"
                        value={reference}
                        onChange={(e) => setReference(e.target.value)}
                      />
                    </div>
                  </div>
                ) : null}

                {/* STEP 3 — Features & preferences */}
                {step === 3 ? (
                  <div className="grid gap-8">
                    <fieldset>
                      <legend className={labelMicro}>
                        Wanted features{" "}
                        <span className="text-muted-foreground/60">
                          — based on {activeType?.label ?? "your project type"} (optional)
                        </span>
                      </legend>
                      <div className="mt-3 flex flex-wrap gap-2.5">
                        {(activeType?.features ?? []).map((f) => (
                          <label key={f} className="inline-flex">
                            <input
                              type="checkbox"
                              className="peer sr-only"
                              checked={features.includes(f)}
                              onChange={(e) =>
                                setFeatures((prev) =>
                                  e.target.checked
                                    ? [...prev, f]
                                    : prev.filter((x) => x !== f),
                                )
                              }
                            />
                            <span className={chipBase}>{f}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend className={labelMicro}>
                        Budget <span className="text-muted-foreground/60">(optional)</span>
                      </legend>
                      <div className="mt-3 flex flex-wrap gap-2.5">
                        {budgets.map((b) => (
                          <label key={b} className="inline-flex">
                            <input
                              type="radio"
                              name="budget"
                              value={b}
                              checked={budget === b}
                              onChange={() => setBudget(b)}
                              className="peer sr-only"
                            />
                            <span className={chipBase}>{b}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend className={labelMicro}>
                        Timeline <span className="text-muted-foreground/60">(optional)</span>
                      </legend>
                      <div className="mt-3 flex flex-wrap gap-2.5">
                        {timelines.map((t) => (
                          <label key={t} className="inline-flex">
                            <input
                              type="radio"
                              name="timeline"
                              value={t}
                              checked={timeline === t}
                              onChange={() => setTimeline(t)}
                              className="peer sr-only"
                            />
                            <span className={chipBase}>{t}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                ) : null}

                {/* STEP 4 — Review & send */}
                {step === 4 ? (
                  <div className="grid gap-6 text-sm">
                    <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                      <ReviewRow
                        label="Contact"
                        value={`${data.fullName} · ${data.email}${data.phone ? ` · ${data.phone}` : ""}`}
                        onEdit={() => setStep(1)}
                      />
                      <ReviewRow
                        label="Project"
                        value={`${data.projectTypeLabel} — ${data.description}${data.reference ? ` — ref: ${data.reference}` : ""}`}
                        onEdit={() => setStep(2)}
                      />
                      <ReviewRow
                        label="Features"
                        value={
                          data.features.length > 0
                            ? data.features.join(", ")
                            : "—"
                        }
                        onEdit={() => setStep(3)}
                      />
                      <ReviewRow
                        label="Preferences"
                        value={`Budget: ${data.budget ?? "—"} · Timeline: ${data.timeline ?? "—"}`}
                        onEdit={() => setStep(3)}
                      />
                    </dl>
                    <p className="rounded-sm border border-border bg-secondary/50 p-4 text-xs leading-relaxed text-muted-foreground">
                      Sending opens WhatsApp with this message pre-filled for{" "}
                      <span className="text-foreground">{site.whatsappDisplay}</span>.
                      You review it and press send —{" "}
                      <strong className="text-foreground">
                        nothing is sent automatically and nothing is stored by
                        this website.
                      </strong>
                    </p>
                  </div>
                ) : null}

                {/* Step controls */}
                <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={step === 1}
                    className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 disabled:pointer-events-none disabled:opacity-40"
                  >
                    <ArrowLeft className="size-4" aria-hidden="true" />
                    Back
                  </button>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                    Step {step} of 4
                  </span>
                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={goNext}
                      className="inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Continue
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <MessageCircle className="size-4" aria-hidden="true" />
                      Open WhatsApp with my message
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ReviewRow({
  label,
  value,
  onEdit,
}: {
  label: string;
  value: string;
  onEdit: () => void;
}) {
  return (
    <div className="border-b border-border pb-3">
      <div className="flex items-center justify-between gap-3">
        <dt className={labelMicro}>{label}</dt>
        <button
          type="button"
          onClick={onEdit}
          className="text-xs font-medium text-primary underline-offset-4 hover:underline"
        >
          Edit
        </button>
      </div>
      <dd className="mt-1.5 leading-relaxed text-foreground/90">{value}</dd>
    </div>
  );
}
