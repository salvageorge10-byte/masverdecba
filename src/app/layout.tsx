import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import MetaPixel from "@/components/analytics/MetaPixel";
import { COMPANY, LOCATIONS } from "@/data/company";
import { CartProvider } from "@/lib/cart-context";
import CartDrawer from "@/components/cart/CartDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const SITE_URL = "https://masverdecba.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Más Verde — Césped sintético para fútbol e instalación de canchas en Córdoba",
    template: "%s — Más Verde",
  },
  description:
    "Césped sintético deportivo, instalación de canchas y paisajismo sintético en Córdoba. Cotizá tu cancha o proyecto con Más Verde.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Más Verde",
    title: "Más Verde — Césped sintético para fútbol e instalación de canchas",
    description:
      "Césped sintético deportivo, instalación de canchas y paisajismo sintético en Córdoba.",
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.legalName,
    telephone: COMPANY.phoneDisplay,
    email: COMPANY.email,
    url: SITE_URL,
    sameAs: [COMPANY.facebookUrl, COMPANY.instagramUrl],
    areaServed: "Córdoba, Argentina",
    location: LOCATIONS.map((loc) => ({
      "@type": "Place",
      name: loc.label,
      address: { "@type": "PostalAddress", addressLocality: loc.city, addressRegion: loc.province, addressCountry: "AR" },
    })),
  };

  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-[var(--color-paper)] text-[var(--color-ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MetaPixel />
        <CartProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <WhatsAppButton />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
