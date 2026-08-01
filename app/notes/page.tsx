import type { Metadata } from "next";
import { Breadcrumb } from "../components/Breadcrumb";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
import { NotesCard } from "../components/NotesCard";
import { SectionHeading } from "../components/SectionHeading";
import { Tabs } from "../components/Tabs";
import { notes, type NoteCategory } from "../data/site";

export const metadata: Metadata = {
  title: "Notes — MINEVE",
  description: "섬, 미네랄, 몸, 리추얼, 식탁과 사람을 기록하는 MINEVE의 에디토리얼",
};

const categories: NoteCategory[] = ["ISLAND", "MINERAL", "BODY", "RITUAL", "TABLE", "PEOPLE"];

export default function NotesPage() {
  const featured = notes[0];
  return (
    <main>
      <div className="page-shell page-top"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Notes" }]} /></div>
      <section className="notes-masthead page-shell">
        <SectionHeading eyebrow="MINEVE Editorial" title="Notes on origin, matter and everyday life." description="제품을 설명하기보다 우리가 오래 바라보는 섬과 물질, 몸과 생활의 이야기를 기록합니다." level="h1" />
        <article className="notes-feature" data-reveal>
          <MediaPlaceholder label={featured.heroLabel} ratio="16:9" tone="ocean" />
          <div>
            <p className="eyebrow">{featured.category} · Featured note</p>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <a className="button" href={`/notes/${featured.slug}`}>에디터 추천 글 읽기</a>
          </div>
        </article>
      </section>

      <section className="section page-shell">
        <Tabs
          label="Notes 카테고리"
          tabs={[
            { id: "all", label: "ALL", content: <div className="notes-grid notes-grid--three">{notes.map((note) => <NotesCard key={note.slug} note={note} />)}</div> },
            ...categories.map((category) => ({
              id: category.toLowerCase(),
              label: category,
              content: <div className="notes-grid notes-grid--three">{notes.filter((note) => note.category === category).map((note) => <NotesCard key={note.slug} note={note} />)}</div>,
            })),
          ]}
        />
      </section>
    </main>
  );
}
