import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { whatsapp } from "@/lib/whatsapp";

export const metadata = {
  title: "Pago pendiente",
  robots: { index: false },
};

export default async function PagoPendientePage({
  searchParams,
}: {
  searchParams: Promise<{ payment_id?: string; external_reference?: string }>;
}) {
  const { payment_id: paymentId, external_reference: reference } = await searchParams;

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6 py-32">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-lime)]/15 text-[var(--color-lime)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
          Pago en proceso
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Tu pago está pendiente
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
          Mercado Pago todavía está procesando la operación. Esto es normal en
          pagos por transferencia o efectivo. Apenas se acredite, nos
          comunicamos con vos para coordinar la entrega.
        </p>

        {(paymentId || reference) && (
          <dl className="mx-auto mt-8 w-full max-w-sm divide-y divide-[var(--color-line)] border-y border-[var(--color-line)] text-left">
            {paymentId && (
              <div className="flex items-center justify-between gap-4 py-3.5">
                <dt className="text-[13px] text-[var(--color-ink-soft)]">N° de pago</dt>
                <dd className="font-mono text-[13px] font-medium text-[var(--color-ink)]">{paymentId}</dd>
              </div>
            )}
            {reference && (
              <div className="flex items-center justify-between gap-4 py-3.5">
                <dt className="text-[13px] text-[var(--color-ink-soft)]">N° de pedido</dt>
                <dd className="font-mono text-[12px] font-medium text-[var(--color-ink)]">{reference}</dd>
              </div>
            )}
          </dl>
        )}

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <CtaButton href="/" variant="solid">
            Volver al inicio
          </CtaButton>
          <a
            href={whatsapp.general()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[var(--color-line)] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-grass)]"
          >
            Consultar por WhatsApp
          </a>
        </div>

        <Link
          href="/productos"
          className="mt-7 inline-block text-[13px] font-medium text-[var(--color-ink-soft)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-ink)]"
        >
          Ver productos
        </Link>
      </div>
    </main>
  );
}
