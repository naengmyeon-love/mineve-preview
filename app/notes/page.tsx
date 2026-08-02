import type { Metadata } from "next";
import { NoteCard } from "../components/BrandUI";
import { notes } from "../data/content";

export const metadata: Metadata = { title: "Notes", description: "섬과 물, 식탁과 몸에 관한 MINEVE의 기록." };

export default function NotesPage() {
  return (
    <main className="notes-page page-shell">
      <header className="index-masthead">
        <p>MINEVE Editorial</p>
        <h1>Notes</h1>
        <span>제품보다 오래 남는 섬과 물, 일상의 기록</span>
        <nav aria-label="Notes 카테고리">
          {["All", "Island", "Mineral", "Table", "Skin", "Body"].map((label, index) => <a href={index === 0 ? "#notes-grid" : `#${label.toLowerCase()}`} key={label}>{label}</a>)}
        </nav>
      </header>
      <section id="notes-grid" className="notes-index">
        <NoteCard note={notes[0]} featured />
        {notes.slice(1).map((note) => <div id={note.category.toLowerCase()} key={note.slug}><NoteCard note={note} /></div>)}
      </section>
    </main>
  );
}
