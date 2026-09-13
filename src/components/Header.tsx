"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DesktopNav from "@/components/DesktopNav";
import MobileMenu from "@/components/MobileMenu";
import { whatsapp } from "@/lib/whatsapp";

const OVERLAY_ROUTES = new Set(["/", "/cesped-deportivo", "/proyectos", "/empresa"]);

export default function Header() {
  const pathname = usePathname();
  const overlay = OVERLAY_ROUTES.has(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          light ? "bg-transparent py-6" : "border-b border-black/5 bg-white/95 py-4 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-2" aria-label="Más Verde — inicio">
            <Image
              src={light ? "/images/brand/logo-white.svg" : "/images/brand/logo.svg"}
              alt="Más Verde"
              width={150}
              height={36}
              priority
              className="h-7 w-auto"
            />
          </Link>

          <DesktopNav light={light} />

          <div className="flex items-center gap-5">
            <a
              href={whatsapp.general()}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center gap-2 border px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition-colors xl:inline-flex ${
                light
                  ? "border-white/50 text-white hover:bg-white hover:text-[var(--color-carbon)]"
                  : "border-[var(--color-carbon)] text-[var(--color-carbon)] hover:bg-[var(--color-carbon)] hover:text-white"
              }`}
            >
              Hablar por WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              className={`flex h-9 w-9 items-center justify-center xl:hidden ${
                light ? "text-white" : "text-[var(--color-carbon)]"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
