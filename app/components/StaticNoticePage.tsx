import Link from "next/link";

export function StaticNoticePage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <main className="utility-page page-shell">
      <p className="kicker">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="utility-page__links" data-reveal>
        <Link prefetch={false} href="/shop">Shop 둘러보기 ↗</Link>
        <a href="mailto:hello@mineve.co.kr">hello@mineve.co.kr ↗</a>
      </div>
    </main>
  );
}
