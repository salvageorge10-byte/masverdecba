import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { whatsapp } from "@/lib/whatsapp";

export const metadata = {
  title: "No pudimos procesar el pago",
  robots: { index: false },
};

export default async function PagoErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ payment_id?: string; external_reference?: string }>;
}) {
  const { payment_id: paymentId } = await searchParams;

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6 py-32">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/15 text-red-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
            <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
          </svg>
        </div>

        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
          Pago no completado
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl">
          No pudimos procesar el pago
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
          El pago fue rechazado o se canceló antes de completarse. No se hizo
          ningún cargo. Tu carrito sigue guardado, así que podés intentar de
          nuevo con otro medio de pago.
        </p>

        {paymentId && (
          <dl className="mx-auto mt-8 w-full max-w-sm border-y border-[var(--color-line)] text-left">
            <div className="flex items-center justify-between gap-4 py-3.5">
              <dt className="text-[13px] text-[var(--color-ink-soft)]">N° de operación</dt>
              <dd className="font-mono text-[13px] font-medium text-[var(--color-ink)]">{paymentId}</dd>
            </div>
          </dl>
        )}

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <CtaButton href="/productos" variant="solid">
            Reintentar el pago
          </CtaButton>
          <a
            href={whatsapp.general()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[var(--color-line)] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-grass)]"
          >
            Coordinar por WhatsApp
          </a>
        </div>

        <Link
          href="/"
          className="mt-7 inline-block text-[13px] font-medium text-[var(--color-ink-soft)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-ink)]"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
