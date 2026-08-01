import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Accordion } from "../../components/Accordion";
import { Breadcrumb } from "../../components/Breadcrumb";
import { MediaPlaceholder } from "../../components/MediaPlaceholder";
import { ProductGrid } from "../../components/ProductGrid";
import { PurchasePanel } from "../../components/PurchasePanel";
import { RelatedReading } from "../../components/RelatedReading";
import { SectionHeading } from "../../components/SectionHeading";
import { formatPrice, getProduct, notes, products } from "../../data/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? { title: `${product.name} — MINEVE`, description: product.descriptor } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const tone = product.line === "salt" ? "stone" : product.line === "renew" ? "sage" : "water";
  const relatedProducts = products.filter((item) => item.line === product.line && item.slug !== product.slug).slice(0, 3);
  const relatedNotes = notes.filter((note) => {
    if (product.line === "salt") return ["TABLE", "ISLAND", "MINERAL"].includes(note.category);
    if (product.line === "renew") return ["BODY", "RITUAL"].includes(note.category);
    return ["RITUAL", "MINERAL"].includes(note.category);
  });

  return (
    <main className="product-page">
      <div className="page-shell page-top">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: product.name }]} />
      </div>
      <section className="product-detail page-shell">
        <div className="product-gallery">
          {product.gallery.map((image) => <MediaPlaceholder key={image.label} label={image.label} ratio={image.ratio} tone={tone} />)}
        </div>
        <div className="product-summary">
          <p className="eyebrow">MINEVE {product.line.toUpperCase()}</p>
          <h1>{product.name}</h1>
          <p className="product-summary__subtitle">{product.subtitle}</p>
          <div className="product-summary__price"><span>{product.size}</span><strong>{formatPrice(product.price)}</strong></div>
          <p className="product-summary__descriptor">{product.descriptor}</p>
          <PurchasePanel productName={product.name} />
          <Accordion
            items={[
              { title: "Description", content: product.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>) },
              { title: "Ingredients", content: <ul>{product.ingredients.map((item) => <li key={item}>{item}</li>)}</ul> },
              { title: "How to use", content: <ol>{product.howToUse.map((item) => <li key={item}>{item}</li>)}</ol> },
              { title: "Origin / Quality", content: <><p>{product.origin}</p><p>{product.quality}</p></> },
              { title: "Shipping", content: <p>배송비, 출고일, 교환·반품 정책은 판매 운영 정책 확정 후 교체됩니다.</p> },
            ]}
          />
        </div>
      </section>
      {relatedProducts.length > 0 && (
        <section className="section page-shell">
          <SectionHeading eyebrow="Complete the ritual" title="Related products" />
          <ProductGrid products={relatedProducts} />
        </section>
      )}
      <RelatedReading notes={relatedNotes} />
    </main>
  );
}

