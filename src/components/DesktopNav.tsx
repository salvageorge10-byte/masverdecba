"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV_LINKS } from "@/data/nav";

export default function DesktopNav({ light }: { light: boolean }) {
  const pathname = usePathname();
  const linkColor = light ? "text-white/90 hover:text-white" : "text-[var(--color-ink)]/80 hover:text-[var(--color-ink)]";

  return (
    <nav className="hidden items-center gap-7 xl:flex">
      {MAIN_NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative py-1 text-[13px] font-medium tracking-wide ${linkColor} ${
              isActive ? (light ? "text-white" : "text-[var(--color-ink)]") : ""
            }`}
          >
            {link.label}
            <span
              className={`absolute -bottom-0.5 left-0 h-px bg-current transition-all duration-300 ${
                isActive ? "w-full" : "w-0"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
