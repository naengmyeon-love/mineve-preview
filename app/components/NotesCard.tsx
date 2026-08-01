import Link from "next/link";
import type { Note } from "../data/site";
import { MediaPlaceholder } from "./MediaPlaceholder";

export function NotesCard({
  note,
  variant = "standard",
}: {
  note: Note;
  variant?: "standard" | "overlay" | "compact";
}) {
  return (
    <article className={`notes-card notes-card--${variant}`} data-reveal>
      <Link href={`/notes/${note.slug}`} className="card-link">
        <MediaPlaceholder label={note.heroLabel} ratio="4:3" tone={variant === "overlay" ? "ocean" : "sand"} />
        <div className="notes-card__body">
          <div className="notes-card__meta">
            <span>{note.category}</span>
            <span>{note.date}</span>
          </div>
          <h3>{note.title}</h3>
          <p>{note.excerpt}</p>
          <span className="notes-card__cta">글 읽기 <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}
