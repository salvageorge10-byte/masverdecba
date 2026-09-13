import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import { getProductsByCategory, formatPrice } from "@/data/products";
import { whatsapp } from "@/lib/whatsapp";

export const metadata = {
  title: "Césped Sintético Decorativo",
  description:
    "Césped sintético decorativo para jardines, balcones y terrazas. Aspecto natural, sin mantenimiento.",
};

export default function CespedDecorativoPage() {
  const products = getProductsByCategory("cesped-decorativo");

  return (
    <main className="pt-24 xl:pt-32">
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
        <p className="text-sm text-[var(--color-ink-soft)]">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <span>Césped decorativo</span>
        </p>
        <SectionHeading
          className="mt-6"
          eyebrow="Césped decorativo"
          title="Verde todo el año, sin mantenimiento."
          description="Pensado para jardines, balcones, terrazas y espacios recreativos. La misma calidad de fibra que usamos en nuestro césped deportivo, en una versión orientada a lo estético."
        />
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-10">
        {products.map((product) => (
          <div key={product.slug} className="grid gap-10 border-t border-[var(--color-line)] py-14 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-3xl font-medium tracking-tight text-[var(--color-ink)]">
                {product.name}
              </h2>
              {product.price && (
                <p className="mt-3 text-lg text-[var(--color-ink)]">
                  {formatPrice(product.price)}{" "}
                  <span className="text-sm text-[var(--color-ink-soft)]">{product.priceUnit}</span>
                </p>
              )}
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                {product.description}
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-[var(--color-ink)]">
                {product.specs.slice(0, 3).map((spec) => (
                  <li key={spec.label}>
                    <span className="font-medium">{spec.label}:</span> {spec.value}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <CtaButton href={`/producto/${product.slug}`} variant="solid">
                  Ver ficha completa
                </CtaButton>
                <CtaButton href={whatsapp.product(product.name)} external variant="outline">
                  Consultar
                </CtaButton>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
