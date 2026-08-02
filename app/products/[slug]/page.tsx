import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CommerceActions } from "../../components/CommerceActions";
import { Media, NoteCard, ProductCard, SectionTitle } from "../../components/BrandUI";
import { formatPrice, images, notes, products } from "../../data/content";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

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
  const relatedNote = notes.find((note) =>
    product.line === "salt" ? note.category === "Table" :
    product.line === "renew" ? note.category === "Skin" :
    note.category === "Body",
  ) ?? notes[0];
  const contextual = product.line === "salt" ? images.basalt : product.line === "renew" ? images.renew : images.rest;

  return (
    <main className="product-detail-page">
      <section className="product-detail page-shell">
        <div className="product-thumbnails" aria-label="제품 이미지 목록">
          {[product.image, contextual, images.salt].map((image, index) => <Media src={image} alt={`${product.name} 미리보기 ${index + 1}`} key={`${image}-${index}`} />)}
        </div>
        <div className="product-gallery">
          <Media src={product.image} alt={`${product.name} 제품과 원료`} priority />
          <Media src={contextual} alt={`${product.name} 원료의 질감과 사용 장면`} />
        </div>
        <aside className="product-buy">
          <p className="kicker">MINEVE {product.line.toUpperCase()}</p>
          <h1>{product.name}</h1>
          <p className="product-buy__english">{product.english}</p>
          <p className="product-buy__price"><span>{product.size}</span><strong>{formatPrice(product.price)}</strong></p>
          <p className="product-buy__lead">{product.description}</p>
          <CommerceActions product={product} />
          <div className="product-details">
            <details open><summary>Details</summary><p>{product.detail}</p></details>
            <details><summary>How to use</summary><p>{product.use}</p></details>
            <details><summary>Ingredients</summary><p>{product.ingredients}</p></details>
            <details><summary>Standard</summary><p>원료의 산지와 배합 기준을 확인하고, 제품별 생산 단위로 품질을 기록합니다.</p></details>
            <details><summary>Shipping</summary><p>3만원 이상 무료 배송. 미개봉 제품은 수령 후 7일 이내 교환·반품할 수 있습니다.</p></details>
          </div>
        </aside>
      </section>

      <section className="product-editorial">
        <Media src={contextual} alt={`${product.line} 컬렉션의 원료와 사용 장면`} />
        <div>
          <p className="kicker">From origin to ritual</p>
          <h2>원료가 시작된 곳과<br />사용하는 순간을 함께 봅니다.</h2>
          <p>{product.detail} 제품의 기능만 나열하기보다 손끝에 닿는 질감과 하루 중 사용하는 시간을 함께 설명합니다.</p>
        </div>
      </section>

      <section className="section page-shell">
        <SectionTitle eyebrow="Complete the ritual" title="함께 쓰기 좋은 제품" />
        <div className="related-products">{related.map((item) => <ProductCard product={item} key={item.slug} />)}</div>
      </section>
      <section className="section page-shell">
        <SectionTitle eyebrow="Related reading" title="이 제품과 이어지는 기록" />
        <div className="notes-pair"><NoteCard note={relatedNote} featured /></div>
      </section>
    </main>
  );
}
