import type { Metadata } from "next";
import Link from "next/link";
import { Media } from "../components/BrandUI";
import { collections } from "../data/content";

export const metadata: Metadata = { title: "Collections", description: "SALT, RENEW, REST. 제주 미네랄을 세 가지 일상의 균형으로." };

export default function CollectionsPage() {
  return (
    <main className="collections-page">
      <section className="collections-masthead page-shell">
        <p>Minerals through Jeju</p>
        <h1>Collections</h1>
        <span>식탁과 피부, 몸으로 이어지는 세 가지 미네랄</span>
      </section>
      <section className="collections-triptych page-shell">
        {Object.values(collections).map((line, index) => (
          <article key={line.id} style={{ "--delay": `${index * 120}ms` } as React.CSSProperties}>
            <Link prefetch={false} href={`/collections/${line.id}`}>
              <Media src={line.image} alt={`${line.title} 컬렉션 — ${line.headline}`} sizes="(max-width: 900px) 100vw, 33vw" />
              <div className="collections-triptych__shade" />
              <div className="collections-triptych__copy">
                <p>0{index + 1} · {line.eyebrow}</p>
                <h2>{line.title}</h2>
                <span>{line.headline}</span>
                <em>Explore ↗</em>
              </div>
            </Link>
          </article>
        ))}
      </section>
      <p className="collections-statement">“자연이 만든 것을 가장 좋은 방식으로,<br />우리의 매일에 놓습니다.”</p>
    </main>
  );
}
