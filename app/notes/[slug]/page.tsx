import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleMeta } from "../../components/ArticleMeta";
import { Breadcrumb } from "../../components/Breadcrumb";
import { MediaPlaceholder } from "../../components/MediaPlaceholder";
import { RelatedReading } from "../../components/RelatedReading";
import { RelatedRitual } from "../../components/RelatedRitual";
import { getNote, getProduct, notes } from "../../data/site";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  return note ? { title: `${note.title} — MINEVE Notes`, description: note.excerpt } : {};
}

export default async function NoteArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();
  const relatedProduct = note.relatedProduct ? getProduct(note.relatedProduct) : undefined;
  const relatedNotes = notes.filter((item) => item.slug !== note.slug && (item.category === note.category || relatedProduct));

  return (
    <main className="article-page">
      <div className="page-shell page-top"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Notes", href: "/notes" }, { label: note.title }]} /></div>
      <header className="article-header page-shell">
        <p className="eyebrow">{note.category}</p>
        <h1>{note.title}</h1>
        <p className="article-header__dek">{note.excerpt}</p>
        <ArticleMeta note={note} />
      </header>
      <div className="article-hero page-shell"><MediaPlaceholder label={note.heroLabel} ratio="16:9" tone="ocean" /></div>
      <article className="article-body">
        {note.body.map((section, index) => (
          <section key={`${section.heading ?? "intro"}-${index}`}>
            {section.heading && <h2>{section.heading}</h2>}
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
      </article>
      {relatedProduct && <div className="page-shell"><RelatedRitual product={relatedProduct} /></div>}
      <RelatedReading notes={relatedNotes} />
    </main>
  );
}

