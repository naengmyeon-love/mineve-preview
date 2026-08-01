import type { MineralEvidence } from "../data/site";

export function MineralCard({
  item,
}: {
  item: MineralEvidence;
}) {
  if (item.status !== "verified" || !item.value) return null;

  return (
    <article className="mineral-card" data-reveal>
      <div className="mineral-card__top">
        <span className="mineral-card__symbol">{item.symbol}</span>
      </div>
      <h3>{item.name}</h3>
      <p className="mineral-card__value">{item.value}{item.unit ? ` ${item.unit}` : ""}</p>
      <dl>
        {item.source && <div><dt>출처</dt><dd>{item.source}</dd></div>}
        {item.testDate && <div><dt>시험일</dt><dd>{item.testDate}</dd></div>}
        {item.testedSubject && <div><dt>시험 대상</dt><dd>{item.testedSubject}</dd></div>}
      </dl>
    </article>
  );
}
