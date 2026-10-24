import Image from "next/image";

type LogoLockupProps = {
  /** Height of the mark in px. Wordmark scales with it. */
  size?: "sm" | "md";
  className?: string;
};

/**
 * Official brand lockup — the keyed mark + wordmark from the original
 * logo file, composited side by side. The mark is never recolored or
 * redrawn; these are the exact pixels from upload/aryonixlogo.png.
 */
export function LogoLockup({ size = "sm", className }: LogoLockupProps) {
  const markH = size === "sm" ? 26 : 34;
  const markW = Math.round(markH * (288 / 244));
  const wordH = Math.round(markH * (52 / 244));

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <Image
        src="/brand/logo-mark.png"
        alt="ARYONIX mark"
        width={markW}
        height={markH}
        priority
        className="h-auto w-auto"
        style={{ height: markH, width: markW }}
      />
      <Image
        src="/brand/logo-wordmark.png"
        alt="ARYONIX"
        width={460}
        height={52}
        priority
        className="h-auto w-auto"
        style={{ height: wordH }}
      />
    </span>
  );
}
