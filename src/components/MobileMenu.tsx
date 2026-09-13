"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { MAIN_NAV_LINKS } from "@/data/nav";
import { COMPANY } from "@/data/company";
import { whatsapp } from "@/lib/whatsapp";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 xl:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-[var(--color-carbon)] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative flex h-full flex-col px-8 pt-28 pb-10 transition-transform duration-400 ${
          open ? "translate-y-0" : "-translate-y-4"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar menú"
          className="absolute right-7 top-8 flex h-10 w-10 items-center justify-center text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
            <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
          </svg>
        </button>

        <nav className="flex flex-col gap-1">
          {MAIN_NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`border-b border-white/10 py-4 text-3xl font-medium tracking-tight text-white transition-colors ${
                pathname === link.href ? "text-[var(--color-lime)]" : "hover:text-white/70"
              }`}
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <a
            href={whatsapp.general()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-lime)] px-6 py-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-carbon)]"
          >
            Hablar por WhatsApp
          </a>
          <div className="flex items-center justify-between text-sm text-white/60">
            <a href={`tel:${COMPANY.phoneWhatsapp}`}>{COMPANY.phoneDisplay}</a>
            <div className="flex gap-4">
              <a href={COMPANY.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2C16.5 3.1 15.4 3 14.2 3c-2.5 0-4.3 1.6-4.3 4.4v2.3H7.2v3.2h2.7V21h3.6z" />
                </svg>
              </a>
              <a href={COMPANY.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
