import Link from "next/link";
import type { Product } from "../data/site";
import { formatPrice } from "../data/site";
import { MediaPlaceholder } from "./MediaPlaceholder";

export function ProductCard({
  product,
  variant = "collection",
}: {
  product: Product;
  variant?: "collection" | "compact";
}) {
  const tone = product.line === "salt" ? "stone" : product.line === "renew" ? "sage" : "water";
  return (
    <article className={`product-card product-card--${variant}`} data-reveal>
      <Link href={`/products/${product.slug}`} className="card-link" aria-label={`${product.name} 상세 보기`}>
        <MediaPlaceholder label={`${product.name} 제품 이미지`} ratio="4:5" tone={tone} />
        <div className="product-card__body">
          <p className="product-card__line">{product.line.toUpperCase()}</p>
          <h3>{product.name}</h3>
          <p className="product-card__subtitle">{product.subtitle}</p>
          <div className="product-card__meta">
            <span>{product.size}</span>
            <span>{formatPrice(product.price)}</span>
          </div>
          <p className="product-card__descriptor">{product.descriptor}</p>
          <span className="product-card__cta">제품 상세 보기 <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}
