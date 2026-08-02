import type { Metadata } from "next";
import { ProductCard, SectionTitle } from "../components/BrandUI";
import { products } from "../data/content";

export const metadata: Metadata = { title: "Shop", description: "MINEVE의 SALT, RENEW, REST 컬렉션을 만나보세요." };
export default function ShopPage() {
  return (
    <main className="index-page">
      <section className="index-masthead page-shell"><SectionTitle eyebrow="MINEVE Shop" title="매일의 균형을 위한 오브제" copy="SALT · RENEW · REST 전 컬렉션을 한곳에서 살펴보세요." /></section>
      <section className="section page-shell"><div className="product-grid">{products.map((product) => <ProductCard product={product} key={product.slug} />)}</div></section>
    </main>
  );
}
