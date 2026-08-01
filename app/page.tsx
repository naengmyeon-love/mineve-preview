import type { Metadata } from "next";
import Link from "next/link";
import { EditorialHero } from "./components/EditorialHero";
import { EvidenceCard } from "./components/EvidenceCard";
import { MediaPlaceholder } from "./components/MediaPlaceholder";
import { NotesCard } from "./components/NotesCard";
import { RitualCard } from "./components/RitualCard";
import { SectionHeading } from "./components/SectionHeading";
import { ValueStrip } from "./components/ValueStrip";
import { brand, homeContent, homeValues, lines, notes, rituals } from "./data/site";

export const metadata: Metadata = {
  title: "MINEVE — Minerals through Jeju",
  description: brand.definition,
};

export default function Home() {
  return (
    <main>
      <EditorialHero
        eyebrow={homeContent.hero.eyebrow}
        title={homeContent.hero.title}
        description={homeContent.hero.description}
        mediaLabel={homeContent.hero.mediaLabel}
        tone="ocean"
        cta={homeContent.hero.cta}
        immersive
      />

      <ValueStrip items={homeValues} />

      <section className="section page-shell">
        <div className="brand-intro">
          <p className="brand-intro__index">01 / Origin</p>
          <div data-reveal>
            <p className="eyebrow">{homeContent.introduction.eyebrow}</p>
            <h2>{homeContent.introduction.title}</h2>
          </div>
          <div className="brand-intro__copy" data-reveal>
            {homeContent.introduction.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Link className="text-link" href={homeContent.introduction.cta.href}>
              {homeContent.introduction.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="section page-shell home-collections">
        <SectionHeading
          eyebrow={homeContent.collections.eyebrow}
          title={homeContent.collections.title}
          description={homeContent.collections.description}
        />
        <div className="line-showcase" aria-label="MINEVE 브랜드 라인">
          {Object.values(lines).map((line, index) => (
            <article key={line.id} className="line-showcase__card" data-reveal>
              <Link href={`/${line.id}`} className="card-link" aria-label={`${line.eyebrow} 컬렉션 보기`}>
                <MediaPlaceholder
                  label={`${line.name} 라인 대표 이미지`}
                  ratio="3:4"
                  tone={line.id === "salt" ? "stone" : line.id === "renew" ? "sage" : "water"}
                />
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p className="eyebrow">{line.eyebrow}</p>
                  <h3>{line.name}</h3>
                  <p>{line.intro}</p>
                  <span className="line-showcase__cta">{line.eyebrow} 살펴보기 <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--tinted">
        <div className="page-shell editorial-pair editorial-pair--wide">
          <MediaPlaceholder label={homeContent.origin.mediaLabel} ratio="16:9" tone="charcoal" />
          <div className="editorial-pair__content" data-reveal>
            <p className="eyebrow">{homeContent.origin.eyebrow}</p>
            <h2>{homeContent.origin.title}</h2>
            <p>{homeContent.origin.description}</p>
            <Link className="button" href={homeContent.origin.cta.href}>{homeContent.origin.cta.label}</Link>
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <SectionHeading
          eyebrow="Daily ritual"
          title="원천에서 리추얼로"
          description="식탁, 피부, 몸을 돌보는 일상의 장면 안에 미네랄을 놓습니다."
        />
        <div className="ritual-grid">
          {rituals.map((ritual) => <RitualCard key={ritual.number} ritual={ritual} />)}
        </div>
      </section>

      <section className="section section--dark">
        <div className="page-shell">
          <SectionHeading
            eyebrow={homeContent.standards.eyebrow}
            title={homeContent.standards.title}
            description={homeContent.standards.description}
          />
          <div className="evidence-list evidence-list--dark">
            <EvidenceCard
              number="01"
              title="Traceable origin"
              description="산지와 원료의 구분을 제품 정보와 함께 기록합니다."
              meta="Origin records"
            />
            <EvidenceCard
              number="02"
              title="Evidence in context"
              description="시험 대상과 방법, 시점을 함께 살펴 정보의 맥락을 지킵니다."
              meta="Source · Subject · Date"
            />
            <EvidenceCard
              number="03"
              title="Responsible language"
              description="확인된 범위 안에서 명확하고 절제된 언어를 사용합니다."
              meta="Claims review"
            />
          </div>
          <Link className="button button--light" href="/our-story#standards">MINEVE의 기준 확인하기</Link>
        </div>
      </section>

      <section className="section page-shell">
        <SectionHeading
          eyebrow={homeContent.notes.eyebrow}
          title={homeContent.notes.title}
          description={homeContent.notes.description}
        />
        <div className="home-notes">
          <NotesCard note={notes[0]} variant="overlay" />
          <div className="home-notes__standard">
            {notes.slice(1, 4).map((note) => <NotesCard key={note.slug} note={note} />)}
          </div>
        </div>
        <div className="section-action"><Link className="button" href="/notes">모든 Notes 읽기</Link></div>
      </section>
    </main>
  );
}
