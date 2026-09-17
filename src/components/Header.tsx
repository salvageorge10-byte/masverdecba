"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DesktopNav from "@/components/DesktopNav";
import MobileMenu from "@/components/MobileMenu";
import MegaMenu from "@/components/MegaMenu";
import CartButton from "@/components/cart/CartButton";
import { COMPANY, LOCATIONS } from "@/data/company";
import { PRODUCTS } from "@/data/products";

const OVERLAY_ROUTES = new Set(["/", "/cesped-deportivo", "/proyectos", "/empresa"]);

function SearchBox({ light }: { light: boolean }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const normalize = (s: string) =>
    s
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase();

  const results =
    query.trim().length > 1
      ? PRODUCTS.filter((p) => p.active && normalize(p.name).includes(normalize(query.trim()))).slice(0, 6)
      : [];

  return (
    <div ref={boxRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Buscar productos"
        className={`flex h-9 w-9 items-center justify-center transition-colors ${
          light ? "text-white/90 hover:text-white" : "text-[var(--color-ink)]/70 hover:text-[var(--color-ink)]"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-3 w-80 border border-[var(--color-line)] bg-[var(--color-carbon)] p-3 shadow-lg">
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar césped, jardín vertical…"
            className="w-full border border-[var(--color-line)] px-3 py-2 text-sm text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-grass)]"
          />
          {results.length > 0 && (
            <ul className="mt-2 divide-y divide-[var(--color-line)]">
              {results.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/producto/${p.slug}`}
                    onClick={() => {
                      setOpen(false);
                      setQuery("");
                    }}
                    className="block py-2.5 text-sm text-[var(--color-ink)] hover:text-[var(--color-grass)]"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {query.trim().length > 1 && results.length === 0 && (
            <p className="mt-2 py-2 text-sm text-[var(--color-ink-soft)]">Sin resultados para “{query}”.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const overlay = OVERLAY_ROUTES.has(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMegaMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaMenuOpen(true);
  };
  const scheduleCloseMegaMenu = () => {
    closeTimer.current = setTimeout(() => setMegaMenuOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!overlay) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const light = overlay && !scrolled;
  const city = LOCATIONS[0]?.city ?? "Córdoba";

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 hidden bg-[var(--color-carbon)] xl:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-10 py-2.5 text-[13px] text-white/85">
          <div className="flex items-center gap-7">
            <span className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px] text-[var(--color-lime)]">
                <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" strokeLinejoin="round" />
                <circle cx="7" cy="18" r="1.4" />
                <circle cx="17" cy="18" r="1.4" />
              </svg>
              Envíos a todo el país
            </span>
            <span className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px] text-[var(--color-lime)]">
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M3 9h18M8 3v3M16 3v3" strokeLinecap="round" />
              </svg>
              Hasta 3 cuotas sin interés
            </span>
            <span className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px] text-[var(--color-lime)]">
                <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" strokeLinejoin="round" />
                <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              5 años de garantía
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px] text-[var(--color-lime)]">
                <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="2.3" />
              </svg>
              {city}, Argentina
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center border border-white/20 text-white transition-colors hover:border-[var(--color-lime)] hover:text-[var(--color-lime)]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-[18px] w-[18px]">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={COMPANY.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center border border-white/20 text-white transition-colors hover:border-[var(--color-lime)] hover:text-[var(--color-lime)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
                  <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2C16.5 3.1 15.4 3 14.2 3c-2.5 0-4.3 1.6-4.3 4.4v2.3H7.2v3.2h2.7V21h3.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 xl:top-9 ${
          light ? "bg-transparent py-6" : "border-b border-white/10 bg-[var(--color-carbon)]/95 py-4 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Más Verde — inicio">
            <Image
              src="/images/brand/logo-white.svg"
              alt="Más Verde"
              width={150}
              height={36}
              priority
              className="h-7 w-auto"
            />
            <span
              className={`hidden border-l pl-2.5 text-[10px] font-semibold uppercase leading-tight tracking-[0.1em] lg:block ${
                light ? "border-white/25 text-white/60" : "border-[var(--color-line)] text-[var(--color-ink-soft)]"
              }`}
            >
              Superficies que
              <br />
              transforman
            </span>
          </Link>

          <DesktopNav light={light} onProductsEnter={openMegaMenu} onProductsLeave={scheduleCloseMegaMenu} />

          <div className="flex items-center gap-4">
            <div className="hidden xl:block">
              <SearchBox light={light} />
            </div>
            <CartButton light={light} />

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              className="flex h-9 w-9 items-center justify-center text-white xl:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <MegaMenu
          open={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
          onMouseEnter={openMegaMenu}
          onMouseLeave={scheduleCloseMegaMenu}
        />
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
