import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";

export default function ProductGrid({
  products,
  columns = 4,
}: {
  products: Product[];
  columns?: 3 | 4;
}) {
  const desktopCols = columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";

  return (
    <div className={`grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 ${desktopCols}`}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
