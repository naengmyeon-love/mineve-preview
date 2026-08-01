import type { Product } from "../data/site";
import { ProductCard } from "./ProductCard";

export function ProductGrid({
  products,
  columns = 4,
  mobileMode = "stack",
}: {
  products: Product[];
  columns?: 2 | 3 | 4;
  mobileMode?: "stack" | "rail";
}) {
  return (
    <div
      className={`product-grid product-grid--columns-${columns} product-grid--${mobileMode}`}
    >
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
