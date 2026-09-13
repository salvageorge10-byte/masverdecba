import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import { getReviews } from "@/lib/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-[var(--color-lime)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1"
          className="h-4 w-4"
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default async function GoogleReviewsSection() {
  const { reviews, summary } = await getReviews();

  // Arquitectura lista (ver lib/reviews.ts + api/reviews). Sin credenciales de
  // Google Places ni reseñas reales cargadas todavía, no mostramos la sección
  // en vez de inventar testimonios.
  if (reviews.length === 0 || !summary) {
    return null;
  }

  return (
    <section className="bg-[var(--color-paper)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Opiniones reales"
            title={
              <>
                {summary.rating.toFixed(1)} de 5 en Google, con {summary.count} reseñas.
              </>
            }
          />
          <CtaButton href={summary.placeUrl} external variant="outline" className="w-fit">
            Ver en Google
          </CtaButton>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((review) => (
            <div key={review.id} className="border border-[var(--color-line)] bg-white p-7">
              <Stars rating={review.rating} />
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink)]">
                “{review.text}”
              </p>
              <p className="mt-5 text-sm font-medium text-[var(--color-ink-soft)]">
                {review.author}
                {review.date && <span className="font-normal text-[var(--color-ink-soft)]/70"> · {review.date}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
