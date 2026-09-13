import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug, getRelatedProducts } from "@/data/products";
import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";
import ProductGrid from "@/components/ProductGrid";
import TrustStrip from "@/components/TrustStrip";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/producto/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductPage({ params }: PageProps<"/producto/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    category: product.category.name,
    ...(product.price && {
      offers: {
        "@type": "Offer",
        priceCurrency: "ARS",
        price: product.price,
        availability: "https://schema.org/InStock",
      },
    }),
  };

  return (
    <main className="pt-24 xl:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="border-b border-[var(--color-line)] bg-[var(--color-paper)]">
        <div className="mx-auto max-w-[1440px] px-6 py-4 text-sm text-[var(--color-ink-soft)] lg:px-10">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link href="/productos" className="hover:underline">
            {product.category.name}
          </Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-14 lg:grid-cols-2 lg:px-10 lg:py-20">
        <ProductGallery images={product.images} name={product.name} />
        <ProductDetails product={product} />
      </div>

      <TrustStrip />

      {related.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
          <h2 className="font-display text-3xl font-medium tracking-tight text-[var(--color-ink)]">
            También te puede interesar
          </h2>
          <div className="mt-10">
            <ProductGrid products={related} columns={3} />
          </div>
        </section>
      )}
    </main>
  );
}
