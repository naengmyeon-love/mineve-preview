import type { Metadata } from "next";
import Link from "next/link";
import { Media, SectionTitle } from "../components/BrandUI";
import { collections } from "../data/content";

export const metadata: Metadata = { title: "Collections", description: "SALT, RENEW, REST. 제주의 미네랄을 세 가지 일상의 균형으로." };

export default function CollectionsPage() {
  return (
    <main className="index-page">
      <section className="index-masthead page-shell">
        <SectionTitle eyebrow="Collections" title="하나의 섬에서 시작한 세 가지 균형" copy="식탁에서, 물 이후의 피부에서, 낮과 저녁의 몸에서. 각 컬렉션은 서로 다른 감각과 속도를 가집니다." />
      </section>
      <section className="collection-index page-shell">
        {Object.values(collections).map((line, index) => (
          <article key={line.id}>
            <Link href={`/collections/${line.id}`}>
              <Media src={line.image} alt={`${line.title} 컬렉션 이미지`} />
              <div>
                <p className="kicker">0{index + 1} · {line.eyebrow}</p>
                <h2>{line.title}</h2>
                <p>{line.intro}</p>
                <span>Explore collection ↗</span>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
