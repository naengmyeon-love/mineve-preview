import type { Note } from "../data/site";

export function ArticleMeta({ note }: { note: Note }) {
  return (
    <dl className="article-meta">
      <div><dt>Category</dt><dd>{note.category}</dd></div>
      <div><dt>Published</dt><dd>{note.date}</dd></div>
      <div><dt>Reading time</dt><dd>{note.readTime}</dd></div>
      <div><dt>Words by</dt><dd>{note.author}</dd></div>
    </dl>
  );
}

