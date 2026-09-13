import { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-[var(--color-lime)]" : "text-[var(--color-grass)]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl ${
          light ? "text-white" : "text-[var(--color-ink)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-[15px] leading-relaxed ${light ? "text-white/75" : "text-[var(--color-ink-soft)]"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
