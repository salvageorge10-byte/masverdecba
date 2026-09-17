"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/data/products";
import { metaPixel } from "@/lib/analytics/metaPixel";

export default function CartDrawer() {
  const { items, isOpen, close, updateQuantity, removeItem, totalItems, totalPrice } = useCart();
  const [paying, setPaying] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMercadoPago = async () => {
    setPayError(null);
    setPaying(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({ slug: item.slug, quantity: item.quantity })),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.checkout_url) {
        throw new Error(data.error ?? "No se pudo iniciar el pago.");
      }
      metaPixel.initiateCheckout({ value: totalPrice, currency: "ARS", num_items: totalItems });
      window.location.href = data.checkout_url;
    } catch (err) {
      setPayError(err instanceof Error ? err.message : "No se pudo iniciar el pago.");
      setPaying(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-[var(--color-carbon)]/80 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={close}
      />

      <div
        className={`absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col bg-[var(--color-paper)] shadow-2xl transition-transform duration-400 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Encabezado */}
        <div className="flex items-center justify-between border-b border-[var(--color-line)] px-7 py-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--color-grass)]">
              Tu pedido
            </p>
            <p className="mt-1 font-display text-xl font-medium text-[var(--color-ink)]">
              {totalItems > 0
                ? `${items.length} ${items.length === 1 ? "producto" : "productos"}`
                : "Carrito vacío"}
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar carrito"
            className="flex h-10 w-10 items-center justify-center border border-[var(--color-line)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-grass)] hover:text-[var(--color-grass)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink-soft)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-7 w-7">
                <path d="M6 7h13l-1.2 9.5a2 2 0 0 1-2 1.75H9.2a2 2 0 0 1-2-1.75L6 7ZM6 7 5 3.5H3" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="21" r="1" />
                <circle cx="16" cy="21" r="1" />
              </svg>
            </div>
            <p className="text-[15px] font-medium text-[var(--color-ink)]">Todavía no agregaste productos</p>
            <p className="max-w-[16rem] text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
              Sumá césped sintético o jardín vertical desde la ficha de cada producto.
            </p>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-7">
              {items.map((item) => {
                const isM2 = Boolean(item.priceUnit?.includes("m2"));
                const minQty = item.min ?? item.step;
                const atMin = item.quantity <= minQty;

                return (
                  <div
                    key={item.slug}
                    className="flex gap-4 border-b border-[var(--color-line)] py-6 last:border-b-0"
                  >
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden bg-white/5 ring-1 ring-inset ring-[var(--color-line)]">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-[14px] font-medium leading-snug text-[var(--color-ink)]">
                            {item.name}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeItem(item.slug)}
                            aria-label={`Quitar ${item.name}`}
                            className="flex-shrink-0 text-[var(--color-ink-soft)] transition-colors hover:text-red-400"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                            </svg>
                          </button>
                        </div>
                        <p className="mt-1 text-[12px] text-[var(--color-ink-soft)]">
                          {formatPrice(item.price)}
                          {isM2 ? " / m²" : " c/u"}
                        </p>
                      </div>

                      <div className="mt-3 flex items-end justify-between gap-3">
                        <div>
                          <div className="inline-flex items-center border border-[var(--color-line)]">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.slug, item.quantity - item.step)}
                              disabled={atMin}
                              aria-label="Restar cantidad"
                              className="flex h-9 w-9 items-center justify-center text-[var(--color-ink)] transition-colors hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              −
                            </button>
                            <span className="min-w-[3.5rem] text-center text-[13px] font-medium text-[var(--color-ink)]">
                              {item.quantity}
                              {isM2 ? " m²" : ""}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.slug, item.quantity + item.step)}
                              aria-label="Sumar cantidad"
                              className="flex h-9 w-9 items-center justify-center text-[var(--color-ink)] transition-colors hover:bg-white/5"
                            >
                              +
                            </button>
                          </div>
                          {atMin && isM2 && (
                            <p className="mt-1.5 text-[11px] text-[var(--color-ink-soft)]">
                              Mínimo {minQty} m²
                            </p>
                          )}
                        </div>

                        <p className="text-[15px] font-medium text-[var(--color-ink)]">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Total + pago */}
            <div className="border-t border-[var(--color-line)] bg-[#0b100e] px-7 py-6">
              <div className="flex items-baseline justify-between">
                <p className="text-[13px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                  Subtotal
                </p>
                <p className="font-display text-2xl font-medium text-[var(--color-ink)]">
                  {formatPrice(totalPrice)}
                </p>
              </div>
              <p className="mt-2 flex items-start gap-2 text-[12px] leading-relaxed text-[var(--color-ink-soft)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="mt-px h-4 w-4 flex-shrink-0 text-[var(--color-grass)]">
                  <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" strokeLinejoin="round" />
                  <circle cx="7" cy="18" r="1.4" />
                  <circle cx="17" cy="18" r="1.4" />
                </svg>
                El costo de envío se coordina después de la compra según tu localidad.
              </p>

              {payError && (
                <p className="mt-4 border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-[12px] text-red-400" role="alert">
                  {payError}
                </p>
              )}

              <button
                type="button"
                onClick={handleMercadoPago}
                disabled={paying}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-[var(--color-lime)] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-carbon)] transition-colors hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {paying ? "Redirigiendo…" : "Pagar con Mercado Pago"}
                {!paying && <span aria-hidden>→</span>}
              </button>

              <p className="mt-3 text-center text-[11px] text-[var(--color-ink-soft)]">
                Hasta 3 cuotas sin interés · Pago protegido
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
