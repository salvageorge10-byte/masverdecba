import Link from "next/link";
import { ReactNode } from "react";

type Variant = "solid" | "outline" | "outline-light" | "solid-light";

const VARIANT_CLASSES: Record<Variant, string> = {
  solid:
    "bg-[var(--color-carbon)] text-white hover:bg-[var(--color-forest)] border border-[var(--color-carbon)]",
  "solid-light":
    "bg-white text-[var(--color-carbon)] hover:bg-[var(--color-paper)] border border-white",
  outline:
    "border border-[var(--color-carbon)] text-[var(--color-carbon)] hover:bg-[var(--color-carbon)] hover:text-white",
  "outline-light":
    "border border-white/50 text-white hover:bg-white hover:text-[var(--color-carbon)]",
};

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function CtaButton({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
  onClick,
}: CtaButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${VARIANT_CLASSES[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
