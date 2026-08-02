import type { Metadata } from "next";
import { NoteCard, SectionTitle } from "../components/BrandUI";
import { notes } from "../data/content";

export const metadata: Metadata = { title: "Notes", description: "섬과 물질, 식탁과 몸에 관한 MINEVE의 기록." };

export default function NotesPage() {
  return (
    <main className="index-page">
      <section className="index-masthead page-shell">
        <SectionTitle eyebrow="MINEVE Editorial" title="섬과 물질, 일상을 읽는 방법" copy="제품을 설명하기보다 우리가 오래 바라보는 것들을 기록합니다." />
        <div className="filter-row" aria-label="노트 카테고리">{["All", "Island", "Mineral", "Table", "Skin", "Body"].map((label, index) => <button type="button" className={index === 0 ? "is-active" : ""} key={label}>{label}</button>)}</div>
      </section>
      <section className="notes-index page-shell">
        <NoteCard note={notes[0]} featured />
        {notes.slice(1).map((note) => <NoteCard note={note} key={note.slug} />)}
      </section>
    </main>
  );
}
