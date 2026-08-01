import type { Metadata } from "next";
import { Breadcrumb } from "../components/Breadcrumb";
import { ProductGrid } from "../components/ProductGrid";
import { SectionHeading } from "../components/SectionHeading";
import { Tabs } from "../components/Tabs";
import { products } from "../data/site";

export const metadata: Metadata = {
  title: "Shop — MINEVE",
  description: "MINEVE SALT, RENEW, REST 전체 제품",
};

export default function ShopPage() {
  return (
    <main className="shop-page page-shell">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
      <SectionHeading eyebrow="MINEVE Shop" title="Everyday minerals, considered." description="식탁과 피부, 몸의 일상에 놓이는 MINEVE의 전체 컬렉션입니다." level="h1" />
      <Tabs
        label="상품 카테고리"
        tabs={[
          { id: "all", label: `ALL (${products.length})`, content: <ProductGrid products={products} /> },
          { id: "salt", label: "SALT", content: <ProductGrid products={products.filter((product) => product.line === "salt")} /> },
          { id: "renew", label: "RENEW", content: <ProductGrid products={products.filter((product) => product.line === "renew")} /> },
          { id: "rest", label: "REST", content: <ProductGrid products={products.filter((product) => product.line === "rest")} /> },
          { id: "gifts", label: "SETS & GIFTS", content: <div className="empty-state"><p>세트 구성과 가격은 대표 검토 후 확정됩니다.</p></div> },
        ]}
      />
    </main>
  );
}
