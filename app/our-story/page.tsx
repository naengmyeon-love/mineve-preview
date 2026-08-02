import type { Metadata } from "next";
import { ArrowLink, Media } from "../components/BrandUI";
import { StoryNav } from "../components/StoryNav";
import { images, storyChapters } from "../data/content";

export const metadata: Metadata = { title: "Our Story", description: "제주의 비에서 매일의 리추얼까지, MINEVE의 긴 이야기." };

export default function StoryPage() {
  return (
    <main className="story-page">
      <section className="story-hero">
        <Media src={images.coast} alt="제주의 검은 해안과 새벽 바다" priority />
        <div className="story-hero__shade" />
        <div className="story-hero__copy page-shell">
          <p>Our Story</p>
          <h1>제주와 시간에서<br />시작된 이야기</h1>
          <span>From origin to ritual.</span>
        </div>
      </section>

      <div className="story-editorial page-shell">
        <StoryNav chapters={storyChapters} />
        <div className="story-chapters">
          <header>
            <p className="kicker">A natural passage</p>
            <h2>보이지 않는 흐름을<br />오래 기록합니다.</h2>
            <p>제주의 비가 현무암층을 지나 원료가 되고, 다시 식탁과 피부, 몸의 일상으로 이어지는 여섯 장면입니다.</p>
          </header>
          {storyChapters.map((chapter, index) => (
            <article id={`chapter-${chapter.number}`} className={`story-chapter story-chapter--${index % 3}`} key={chapter.number}>
              <Media src={chapter.image} alt={`${chapter.title}을 보여주는 제주와 미네랄 이미지`} />
              <div data-reveal>
                <p>{chapter.number} · {chapter.subtitle}</p>
                <h2>{chapter.title}</h2>
                <p>{chapter.copy}</p>
              </div>
            </article>
          ))}
          <section className="story-next">
            <p>Continue to the collections</p>
            <div>
              <ArrowLink href="/collections/salt">SALT</ArrowLink>
              <ArrowLink href="/collections/renew">RENEW</ArrowLink>
              <ArrowLink href="/collections/rest">REST</ArrowLink>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
