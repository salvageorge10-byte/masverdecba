"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/data/products";
import { whatsapp } from "@/lib/whatsapp";
import { metaPixel } from "@/lib/analytics/metaPixel";

export default function CartDrawer() {
  const { items, isOpen, close, updateQuantity, removeItem, clear, totalItems, totalPrice } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCheckout = () => {
    const url = whatsapp.cartOrder(items);
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) return;
    metaPixel.initiateCheckout({ value: totalPrice, currency: "ARS", num_items: totalItems });
    clear();
    close();
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-[var(--color-carbon)]/70 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={close}
      />

      <div
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[var(--color-paper)] transition-transform duration-400 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-line)] px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-ink)]">
            Tu pedido {totalItems > 0 && `(${totalItems})`}
          </p>
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar carrito"
            className="flex h-9 w-9 items-center justify-center text-[var(--color-ink)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="text-sm text-[var(--color-ink-soft)]">Todavía no agregaste productos.</p>
            <p className="text-xs text-[var(--color-ink-soft)]/70">
              Sumá césped decorativo o jardín vertical desde su ficha de producto.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y divide-[var(--color-line)] overflow-y-auto px-6">
              {items.map((item) => (
                <div key={item.slug} className="flex gap-4 py-5">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden bg-white/5">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-[var(--color-ink)]">{item.name}</p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug)}
                        aria-label={`Quitar ${item.name}`}
                        className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                          <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.slug, item.quantity - item.step)}
                          aria-label="Restar cantidad"
                          className="flex h-7 w-7 items-center justify-center border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-grass)]"
                        >
                          −
                        </button>
                        <span className="min-w-[2.5rem] text-center text-sm text-[var(--color-ink)]">
                          {item.quantity}
                          {item.priceUnit?.includes("m2") ? " m²" : ""}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.slug, item.quantity + item.step)}
                          aria-label="Sumar cantidad"
                          className="flex h-7 w-7 items-center justify-center border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-grass)]"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm text-[var(--color-ink-soft)]">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--color-line)] px-6 py-6">
              <div className="flex items-baseline justify-between text-[var(--color-ink)]">
                <p className="text-sm uppercase tracking-wide text-[var(--color-ink-soft)]">Total estimado</p>
                <p className="text-lg font-medium">{formatPrice(totalPrice)}</p>
              </div>
              <p className="mt-1 text-xs text-[var(--color-ink-soft)]">
                El total final se confirma por WhatsApp según superficie exacta y envío.
              </p>
              <button
                type="button"
                onClick={handleCheckout}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-[var(--color-grass)] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-forest)]"
              >
                Finalizar pedido por WhatsApp
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
