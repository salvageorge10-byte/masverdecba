"use client";

import { useCart } from "@/lib/cart-context";

export default function CartButton({ light }: { light: boolean }) {
  const { totalItems, open } = useCart();

  return (
    <button
      type="button"
      onClick={open}
      aria-label={`Ver carrito${totalItems > 0 ? ` (${totalItems} productos)` : ""}`}
      className={`relative flex h-9 w-9 items-center justify-center transition-colors ${
        light ? "text-white/90 hover:text-white" : "text-[var(--color-ink)]/70 hover:text-[var(--color-ink)]"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M3 4h2l1.4 11.2A2 2 0 0 0 8.4 17h9.2a2 2 0 0 0 2-1.7L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="20" r="1.3" />
        <circle cx="17" cy="20" r="1.3" />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center bg-[var(--color-lime)] px-1 text-[10px] font-bold leading-none text-[var(--color-carbon)]">
          {totalItems}
        </span>
      )}
    </button>
  );
}
