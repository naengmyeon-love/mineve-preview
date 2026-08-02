import type { Metadata } from "next";
import { Media, SectionTitle } from "../components/BrandUI";
import { images } from "../data/content";

export const metadata: Metadata = { title: "Our Story", description: "제주의 비에서 매일의 리추얼까지, MINEVE의 긴 이야기." };

const chapters = [
  { number: "01", title: "제주에 내리는 비", copy: "섬의 물은 하늘에서 시작합니다. 비는 땅에 닿자마자 현무암의 수많은 틈으로 스며듭니다.", image: images.coast },
  { number: "02", title: "화산암층이 지나는 시간", copy: "빠르게 흐르되 오랜 지층을 지나는 물. 우리는 그 보이지 않는 시간을 원료의 첫 번째 조건으로 봅니다.", image: images.basalt },
  { number: "03", title: "물과 미네랄", copy: "물질을 숫자로만 말하지 않습니다. 어디에서 왔는지, 어떤 과정으로 다뤘는지, 지금 무엇을 확인할 수 있는지를 함께 기록합니다.", image: images.water },
  { number: "04", title: "원료를 선택하는 기준", copy: "출처의 투명성, 감각의 섬세함, 지속 가능한 관계. 화려한 약속보다 확인할 수 있는 기준을 택합니다.", image: images.mineral },
  { number: "05", title: "SALT · RENEW · REST", copy: "식탁, 피부, 몸. 제주의 미네랄은 세 개의 서로 다른 일상 속에서 쓰입니다.", image: images.ritual },
  { number: "06", title: "매일의 균형", copy: "하루를 바꾸는 것은 거대한 결심보다 반복할 수 있는 작은 동작이라고 믿습니다.", image: images.table },
];

export default function StoryPage() {
  return (
    <main className="story-page">
      <section className="story-hero">
        <Media src={images.basalt} alt="제주의 검은 현무암과 흐르는 물" priority />
        <div className="story-hero__copy page-shell">
          <p className="kicker">Our Story</p>
          <h1>From origin to ritual.</h1>
          <p>섬 아래 물의 긴 여정에서 시작해, 매일 손에 닿는 리추얼로 이어지는 이야기.</p>
        </div>
      </section>
      <nav className="story-progress page-shell" aria-label="스토리 챕터">
        {chapters.map((chapter) => <a href={`#chapter-${chapter.number}`} key={chapter.number}><span>{chapter.number}</span>{chapter.title}</a>)}
      </nav>
      <section className="story-documentary">
        <div className="page-shell"><SectionTitle eyebrow="A natural passage" title="보이지 않는 흐름을 오래 기록합니다." /></div>
        {chapters.map((chapter, index) => (
          <article id={`chapter-${chapter.number}`} className="story-chapter page-shell" key={chapter.number}>
            <Media src={chapter.image} alt={`${chapter.title}을 보여주는 제주 자연 이미지`} />
            <div data-reveal>
              <p className="kicker">{chapter.number} · Chapter</p>
              <h2>{chapter.title}</h2>
              <p>{chapter.copy}</p>
              <blockquote>{index === 0 ? "“물은 가장 낮은 곳으로 흐르며 섬의 시간을 담습니다.”" : index === 5 ? "“좋은 균형은 매일 돌아갈 수 있는 작은 자리입니다.”" : `“${chapter.title}, 우리가 오래 바라보는 기준.”`}</blockquote>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
