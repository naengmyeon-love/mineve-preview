import Link from "next/link";
import { ArrowLink, Media, NoteCard, ProductCard, SectionTitle } from "./components/BrandUI";
import { Passage } from "./components/Passage";
import { collections, images, notes, products } from "./data/content";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <Media src={images.coast} alt="푸른 새벽빛 아래 검은 현무암과 파도가 만나는 제주 해안" priority />
        <div className="home-hero__overlay" />
        <div className="home-hero__copy page-shell">
          <p>SALT · RENEW · REST</p>
          <h1>제주의 미네랄을,<br />매일의 균형으로.</h1>
          <span>Minerals through Jeju</span>
          <ArrowLink href="/collections" light>컬렉션 탐색하기</ArrowLink>
        </div>
        <a className="scroll-cue" href="#manifesto"><span>Scroll</span><i /></a>
      </section>

      <section id="manifesto" className="manifesto page-shell">
        <div className="manifesto__copy" data-reveal>
          <p className="kicker">01 · Brand manifesto</p>
          <h2>제주의 물은<br />화산암층을 지나며<br />긴 시간을 통과합니다.</h2>
          <p>MINEVE는 그 흐름 속에서 얻은 미네랄을 식탁과 피부, 몸의 리듬으로 옮깁니다.</p>
          <p>자연을 장식처럼 소비하지 않고, 출처와 과정, 매일의 사용법으로 기록합니다.</p>
          <ArrowLink href="/our-story">Our Story</ArrowLink>
        </div>
        <div className="manifesto__media" data-reveal>
          <span>JEJU · 33°29′N</span>
          <Media src={images.basalt} alt="젖은 검은 현무암 표면을 흐르는 물과 미네랄 결정" />
        </div>
      </section>

      <section className="collections-scene">
        <div className="page-shell">
          <SectionTitle index="02" eyebrow="Three collections" title="하나의 섬, 세 가지 감각" copy="같은 제주 미네랄에서 시작해 식탁과 피부, 몸의 서로 다른 시간으로 이어집니다." />
        </div>
        <div className="collection-panels">
          {Object.values(collections).map((line, index) => (
            <article className={`collection-panel collection-panel--${line.id}`} key={line.id}>
              <Link prefetch={false} href={`/collections/${line.id}`} aria-label={`${line.title} 컬렉션 보기`}>
                <Media src={line.image} alt={`${line.title} — ${line.headline}`} sizes="(max-width: 900px) 100vw, 34vw" />
                <div className="collection-panel__shade" />
                <div className="collection-panel__copy">
                  <p>0{index + 1} · {line.eyebrow}</p>
                  <h2>{line.title}</h2>
                  <span>{line.headline}</span>
                  <em>Explore ↗</em>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Passage />

      <section className="featured-ritual">
        <div className="page-shell">
          <SectionTitle index="05" eyebrow="Featured ritual" title="매일의 장면에 놓이는 것들" copy="기능을 앞세우기보다 손에 닿는 질감과 사용하는 시간을 먼저 보여줍니다." />
          <div className="featured-products">
            <ProductCard product={products[0]} large />
            <div>
              <ProductCard product={products[3]} />
              <ProductCard product={products[6]} />
            </div>
          </div>
          <div className="section-action"><ArrowLink href="/shop">모든 제품 보기</ArrowLink></div>
        </div>
      </section>

      <section className="notes-scene page-shell">
        <SectionTitle index="06" eyebrow="MINEVE Notes" title="섬과 물, 일상을 읽는 방법" copy="제품보다 오래 남는 제주의 시간과 매일의 감각을 기록합니다." />
        <div className="notes-masonry">
          <NoteCard note={notes[0]} featured />
          <NoteCard note={notes[3]} />
          <NoteCard note={notes[1]} />
          <NoteCard note={notes[4]} />
        </div>
        <div className="section-action"><ArrowLink href="/notes">모든 Notes 읽기</ArrowLink></div>
      </section>

      <section className="closing-statement">
        <Media src={images.coast} alt="제주 해안의 검은 바위와 깊은 바다" />
        <div className="closing-statement__shade" />
        <div className="closing-statement__copy page-shell">
          <p className="kicker">Minerals through Jeju</p>
          <h2>제주의 자연이<br />당신의 오늘을 채웁니다.</h2>
          <ArrowLink href="/our-story" light>Learn more</ArrowLink>
        </div>
      </section>
    </main>
  );
}
