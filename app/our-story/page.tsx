import type { Metadata } from "next";
import { Breadcrumb } from "../components/Breadcrumb";
import { EditorialHero } from "../components/EditorialHero";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
import { storySections } from "../data/site";

export const metadata: Metadata = {
  title: "Our Story — MINEVE",
  description: "제주의 원천에서 일상의 리추얼로 이어지는 MINEVE의 긴 이야기",
};

export default function OurStoryPage() {
  return (
    <main>
      <div className="page-shell page-top"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Our Story" }]} /></div>
      <EditorialHero
        eyebrow="Our Story"
        title="From origin to ritual"
        description="보이지 않는 물의 통로에서 시작해 매일의 균형으로 이어지는 MINEVE의 이야기"
        mediaLabel="제주의 물길과 화산 지층 · Our Story hero"
        tone="charcoal"
      />

      <nav className="story-index page-shell" aria-label="Our Story 섹션">
        {storySections.map((section) => <a key={section.id} href={`#${section.id}`}><span>{section.number}</span>{section.kicker}</a>)}
      </nav>

      <div className="story-sections">
        {storySections.map((section, index) => (
          <section key={section.id} id={section.id} className={`story-section ${index % 2 ? "story-section--reverse" : ""}`}>
            <div className="page-shell story-section__inner">
              <MediaPlaceholder label={section.media} ratio={section.media.includes("3:4") ? "3:4" : "16:9"} tone={index % 3 === 0 ? "ocean" : index % 3 === 1 ? "sand" : "stone"} />
              <div className="story-section__content" data-reveal>
                <p className="story-section__number">{section.number}</p>
                <p className="eyebrow">{section.kicker}</p>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

