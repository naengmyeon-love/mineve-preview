import Link from "next/link";

export function RitualCard({
  ritual,
}: {
  ritual: { number: string; title: string; description: string; href: string; label: string };
}) {
  return (
    <article className="ritual-card" data-reveal>
      <p className="ritual-card__number">{ritual.number}</p>
      <p className="eyebrow">{ritual.label}</p>
      <h3>{ritual.title}</h3>
      <p>{ritual.description}</p>
      <Link href={ritual.href} className="text-link">
        {ritual.label} 살펴보기
      </Link>
    </article>
  );
}

