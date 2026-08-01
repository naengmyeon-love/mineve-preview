export function EvidenceCard({
  number,
  title,
  description,
  meta,
}: {
  number: string;
  title: string;
  description: string;
  meta: string;
}) {
  return (
    <article className="evidence-card" data-reveal>
      <span className="evidence-card__number">{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <small>{meta}</small>
      </div>
    </article>
  );
}

