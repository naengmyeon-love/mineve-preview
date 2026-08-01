import Link from "next/link";
import { lines, notes, products, publishedMineralEvidence, rituals, upcomingProducts } from "../data/site";
import { Breadcrumb } from "./Breadcrumb";
import { EditorialHero } from "./EditorialHero";
import { EvidenceCard } from "./EvidenceCard";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { MineralCard } from "./MineralCard";
import { NotesCard } from "./NotesCard";
import { ProductGrid } from "./ProductGrid";
import { RitualCard } from "./RitualCard";
import { SectionHeading } from "./SectionHeading";

export function LinePage({ lineId }: { lineId: keyof typeof lines }) {
  const line = lines[lineId];
  const lineProducts = products.filter((product) => product.line === lineId);
  const lineNotes = notes.filter((note) => {
    if (lineId === "salt") return ["TABLE", "ISLAND", "MINERAL"].includes(note.category);
    if (lineId === "renew") return ["BODY", "RITUAL", "MINERAL"].includes(note.category);
    return ["RITUAL", "MINERAL", "BODY"].includes(note.category);
  });
  const tone = lineId === "salt" ? "stone" : lineId === "renew" ? "sage" : "water";

  return (
    <main data-theme={lineId}>
      <div className="page-shell page-top">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: line.eyebrow }]} />
      </div>
      <EditorialHero eyebrow={line.eyebrow} title={line.title} description={line.intro} mediaLabel={line.heroLabel} tone={tone} />

      <section className="section page-shell">
        <div className="split-editorial">
          <SectionHeading eyebrow="The collection" title={line.name} description={line.intro} />
          <div className="split-editorial__note" data-reveal><span>Line palette</span><p>{line.accent}</p></div>
        </div>
        <ProductGrid
          products={lineProducts}
          columns={lineId === "renew" ? 3 : lineId === "rest" ? 2 : 4}
          mobileMode="rail"
        />
      </section>

      <section className="section section--tinted">
        <div className="page-shell editorial-pair">
          <MediaPlaceholder label={`${line.name} 원료와 물성`} ratio="3:4" tone={tone} />
          <div className="editorial-pair__content" data-reveal>
            <p className="eyebrow">{lineId === "salt" ? "Jeju origin" : lineId === "renew" ? "Ingredient philosophy" : "Daily mineral wellness"}</p>
            <h2>{line.philosophyTitle}</h2>
            <p>{line.philosophy}</p>
            <ul className="quiet-list">
              <li>원료의 출처를 확인 가능한 범위에서 공개합니다.</li>
              <li>효능보다 사용 경험과 역할을 명확히 설명합니다.</li>
              <li>검증 전 데이터는 상태를 함께 표시합니다.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <SectionHeading eyebrow={lineId === "salt" ? "Salt guide" : lineId === "renew" ? "Routine" : "How to use"} title={line.guideTitle} description={line.guide} />
        <div className="ritual-grid">{rituals.map((ritual) => <RitualCard key={ritual.number} ritual={ritual} />)}</div>
      </section>

      {lineId === "salt" && publishedMineralEvidence.length > 0 && (
        <section className="section section--dark">
          <div className="page-shell">
            <SectionHeading eyebrow="Mineral balance" title="숫자의 배경까지 함께 읽습니다." description="시험 대상과 출처가 확인된 정보만 공개합니다." />
            <div className="mineral-grid">{publishedMineralEvidence.map((item) => <MineralCard key={item.symbol} item={item} />)}</div>
          </div>
        </section>
      )}

      {lineId === "rest" && (
        <section className="section page-shell">
          <SectionHeading eyebrow="Next in REST" title="The ritual will continue" />
          <div className="coming-soon-grid">
            {upcomingProducts.map((item) => (
              <article key={item.name} className="coming-soon-card" data-reveal>
                <MediaPlaceholder label={`${item.name} 개발 예정 이미지`} ratio="4:5" tone="water" />
                <p className="eyebrow">{item.status}</p>
                <h3>{item.name}</h3>
                <p>제품 정보는 확정 전까지 공개하지 않습니다.</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="section page-shell">
        <div className="sets-panel" data-reveal>
          <div><p className="eyebrow">Sets & Gifts</p><h2>매일의 리추얼을 한 흐름으로</h2><p>세트 구성과 패키지 이미지는 대표 검토 후 확정됩니다.</p></div>
          <Link className="button" href="/shop">전체 제품에서 구성 살펴보기</Link>
        </div>
      </section>

      <section className="section page-shell">
        <SectionHeading eyebrow="Notes" title={`Related to ${line.eyebrow}`} />
        <div className="notes-grid notes-grid--three">{lineNotes.slice(0, 3).map((note) => <NotesCard key={note.slug} note={note} />)}</div>
      </section>

      {lineId !== "salt" && (
        <section className="section section--tinted">
          <div className="page-shell evidence-list">
            <EvidenceCard number="01" title="원료 정보" description="전성분 또는 원재료명을 최종 처방과 표시사항 기준으로 공개합니다." meta="Ingredient disclosure" />
            <EvidenceCard number="02" title="사용 기준" description="사용량과 빈도는 제품 시험 및 시장별 표시 기준을 반영합니다." meta="Usage guidance" />
          </div>
        </section>
      )}
    </main>
  );
}
