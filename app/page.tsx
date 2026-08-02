import Link from "next/link";
import { ArrowLink, Media, NoteCard, ProductCard, SectionTitle } from "./components/BrandUI";
import { collections, images, notes, products } from "./data/content";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <Media src={images.coast} alt="새벽빛이 비치는 제주 현무암 해안과 푸른 바다" priority />
        <div className="home-hero__overlay" />
        <div className="home-hero__copy page-shell">
          <p className="kicker">SALT · RENEW · REST</p>
          <h1>제주의 미네랄을,<br />매일의 균형으로.</h1>
          <p>Minerals through Jeju</p>
          <ArrowLink href="/collections" light>컬렉션 탐색하기</ArrowLink>
        </div>
        <p className="scroll-cue">SCROLL TO DISCOVER <span>↓</span></p>
      </section>

      <section className="section page-shell manifesto">
        <div data-reveal>
          <p className="kicker">01 · Brand manifesto</p>
          <h2>제주의 물은<br />화산의 시간을 지나며<br />긴 균형을 담습니다.</h2>
          <p>우리는 그 보이지 않는 흐름을 식탁과 피부, 몸의 리듬으로 옮깁니다. 자연을 장식처럼 쓰지 않고, 출처와 과정의 언어로 오래 기록합니다.</p>
          <ArrowLink href="/our-story">Our Story</ArrowLink>
        </div>
        <Media src={images.basalt} alt="물과 이끼가 머문 제주 현무암의 표면" />
      </section>

      <section className="section collections-section">
        <div className="page-shell">
          <SectionTitle index="02" eyebrow="Three collections" title="하나의 섬, 세 가지 균형" copy="SALT는 식탁, RENEW는 물 이후의 피부, REST는 몸의 시간에 집중합니다." />
        </div>
        <div className="collection-panels">
          {Object.values(collections).map((line, index) => (
            <article className={`collection-panel collection-panel--${line.id}`} key={line.id}>
              <Media src={line.image} alt={`${line.title} 컬렉션 이미지`} />
              <div className="collection-panel__shade" />
              <div className="collection-panel__copy">
                <p className="kicker">0{index + 1} · {line.eyebrow}</p>
                <h2>{line.title.replace("MINEVE ", "")}</h2>
                <p>{line.headline}</p>
                <ArrowLink href={`/collections/${line.id}`} light>Explore</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section page-shell">
        <SectionTitle index="03" eyebrow="Featured products" title="매일의 장면에 놓이는 것들" copy="기능을 앞세우기보다 손에 닿는 질감과 쓰이는 순간을 먼저 보여줍니다." />
        <div className="product-grid">{products.slice(0, 4).map((product) => <ProductCard product={product} key={product.slug} />)}</div>
        <div className="section-action"><ArrowLink href="/shop">모든 제품 보기</ArrowLink></div>
      </section>

      <section className="passage">
        <div className="passage__image"><Media src={images.sea} alt="깊은 푸른빛의 제주 바다와 물결" /></div>
        <div className="passage__content page-shell">
          <p className="kicker">04 · Jeju passage</p>
          <h2>비에서 시작해<br />일상의 리추얼까지</h2>
          <ol>
            {["제주의 내리는 비", "화산암층", "현무암 지하수", "미네랄 원료", "MINEVE의 제품", "매일의 리추얼"].map((step, index) => (
              <li key={step}><span>0{index + 1}</span><strong>{step}</strong><p>{index === 0 ? "섬의 표면에 닿은 물" : index === 5 ? "식탁과 피부, 몸의 균형" : "천천히 지나며 남기는 시간"}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section page-shell">
        <SectionTitle index="05" eyebrow="MINEVE Notes" title="섬과 물질, 일상에 관한 기록" />
        <div className="notes-editorial">
          <NoteCard note={notes[0]} featured />
          <div>{notes.slice(1, 4).map((note) => <NoteCard note={note} key={note.slug} />)}</div>
        </div>
        <div className="section-action"><Link className="quiet-button" href="/notes">모든 Notes 읽기</Link></div>
      </section>
    </main>
  );
}
