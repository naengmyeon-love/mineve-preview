import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Media, NoteCard, ProductCard, SectionTitle } from "../../components/BrandUI";
import { formatPrice, notes, products } from "../../data/content";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return product ? { title: product.name, description: product.description } : {};
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const related = products.filter((item) => item.line === product.line && item.slug !== product.slug).slice(0, 2);
  const relatedNote = notes.find((note) => product.line === "salt" ? note.category === "Table" : product.line === "renew" ? note.category === "Skin" : note.category === "Body") ?? notes[0];

  return (
    <main className="product-detail-page">
      <section className="product-detail-new page-shell">
        <div className="product-thumbnails" aria-label="상품 이미지 목록">
          {[product.image, product.image, product.image].map((image, index) => (
            <Media src={image} alt={`${product.name} 미리보기 ${index + 1}`} key={`${image}-${index}`} />
          ))}
        </div>
        <div className="product-gallery-new">
          <Media src={product.image} alt={`${product.name} 패키지 전면`} priority />
        </div>
        <div className="product-buy">
          <p className="kicker">MINEVE {product.line}</p>
          <h1>{product.name}</h1>
          <p className="product-buy__english">{product.english}</p>
          <p className="product-buy__price">{product.size}<strong>{formatPrice(product.price)}</strong></p>
          <p className="product-buy__lead">{product.description}</p>
          <label htmlFor="quantity">Quantity</label>
          <select id="quantity" defaultValue="1"><option>1</option><option>2</option><option>3</option></select>
          <div className="purchase-actions">
            <button className="add-button add-button--outline" type="button">Add to cart</button>
            <button className="add-button" type="button">Buy now</button>
          </div>
          <details open><summary>제품 특징</summary><p>{product.detail}</p></details>
          <details><summary>사용 방법</summary><p>{product.use}</p></details>
          <details><summary>원료 / 성분</summary><p>{product.ingredients}</p></details>
          <details><summary>배송 및 교환</summary><p>3만원 이상 무료배송. 미개봉 상품은 수령 후 7일 이내 교환·반품이 가능합니다.</p></details>
        </div>
      </section>
      <section className="product-quote"><p>“좋은 균형은 매일 손이 가는 작은 동작에서 시작합니다.”</p></section>
      <section className="section page-shell"><SectionTitle eyebrow="Complete the ritual" title="함께 두기 좋은 제품" /><div className="product-grid product-grid--related">{related.map((item) => <ProductCard product={item} key={item.slug} />)}</div></section>
      <section className="section page-shell"><SectionTitle eyebrow="Related reading" title="이 제품과 이어지는 기록" /><div className="notes-row"><NoteCard note={relatedNote} featured /></div></section>
    </main>
  );
}
