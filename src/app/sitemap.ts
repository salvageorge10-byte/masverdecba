import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";

const SITE_URL = "https://masverdecba.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/cesped-deportivo",
    "/cesped-decorativo",
    "/proyectos",
    "/productos",
    "/empresa",
    "/contacto",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = PRODUCTS.map((product) => ({
    url: `${SITE_URL}/producto/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
