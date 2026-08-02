import type { Metadata } from "next";
import Link from "next/link";
import { Media } from "../components/BrandUI";
import { collections } from "../data/content";

export const metadata: Metadata = { title: "Collections", description: "SALT, RENEW, REST. 제주의 미네랄을 세 가지 일상의 균형으로." };

export default function CollectionsPage() {
  return (
    <main className="index-page collections-page">
      <section className="collections-masthead page-shell">
        <p className="kicker">Minerals through Jeju</p>
        <h1>Collections</h1>
      </section>
      <section className="collections-triptych page-shell">
        {Object.values(collections).map((line, index) => (
          <article key={line.id}>
            <Link href={`/collections/${line.id}`}>
              <Media src={line.image} alt={`${line.title} 컬렉션 이미지`} />
              <div className="collections-triptych__shade" />
              <div className="collections-triptych__copy">
                <p className="kicker">0{index + 1}</p>
                <h2>{line.title.replace("MINEVE ", "")}</h2>
                <p>{line.headline}</p>
                <span>Explore →</span>
              </div>
            </Link>
          </article>
        ))}
      </section>
      <section className="collections-statement page-shell">
        <p>“자연이 만든 것을 가장 좋은 방식으로,<br />우리는 매일의 균형을 제안합니다.”</p>
        <span aria-hidden="true">—</span>
      </section>
    </main>
  );
}
