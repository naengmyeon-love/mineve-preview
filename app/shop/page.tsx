import type { Metadata } from "next";
import { ProductCard } from "../components/BrandUI";
import { products } from "../data/content";

export const metadata: Metadata = { title: "Shop", description: "MINEVE의 SALT, RENEW, REST 컬렉션." };

export default function ShopPage() {
  return (
    <main className="shop-page page-shell">
      <header className="index-masthead index-masthead--shop">
        <p>MINEVE Shop</p>
        <h1>Rituals for balance</h1>
        <span>제주의 미네랄을 식탁과 피부, 몸의 시간으로</span>
      </header>
      <nav className="shop-filter" aria-label="제품 컬렉션">
        <a href="#all">All</a><a href="#salt">Salt</a><a href="#renew">Renew</a><a href="#rest">Rest</a>
      </nav>
      <section id="all" className="shop-editorial">
        {products.map((product, index) => <div id={index === 0 ? product.line : undefined} key={product.slug}><ProductCard product={product} large={index === 0 || index === 3} /></div>)}
      </section>
    </main>
  );
}
