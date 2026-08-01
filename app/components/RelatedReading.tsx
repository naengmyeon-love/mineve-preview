import type { Note } from "../data/site";
import { NotesCard } from "./NotesCard";
import { SectionHeading } from "./SectionHeading";

export function RelatedReading({ notes }: { notes: Note[] }) {
  return (
    <section className="section section--bordered page-shell">
      <SectionHeading eyebrow="Continue reading" title="Related Reading" />
      <div className="notes-grid notes-grid--three">
        {notes.slice(0, 3).map((note) => <NotesCard key={note.slug} note={note} />)}
      </div>
    </section>
  );
}

