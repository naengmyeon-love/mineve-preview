import Link from "next/link";
import type { Product } from "../data/site";
import { formatPrice } from "../data/site";
import { MediaPlaceholder } from "./MediaPlaceholder";

export function RelatedRitual({ product }: { product: Product }) {
  return (
    <aside className="related-ritual" aria-labelledby="related-ritual-title">
      <MediaPlaceholder label={`${product.name} 제품 이미지`} ratio="1:1" tone="stone" />
      <div>
        <p className="eyebrow">Related Ritual</p>
        <h2 id="related-ritual-title">{product.name}</h2>
        <p>{product.subtitle} · {product.size}</p>
        <p>{formatPrice(product.price)}</p>
        <Link className="text-link" href={`/products/${product.slug}`}>제품 정보 보기</Link>
      </div>
    </aside>
  );
}

