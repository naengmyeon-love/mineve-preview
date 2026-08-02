import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLink, Media, NoteCard } from "../../components/BrandUI";
import { notes } from "../../data/content";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  return note ? { title: note.title, description: note.excerpt } : {};
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) notFound();
  const related = notes.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <main className="article-page">
      <header className="article-head page-shell">
        <p>{note.category}</p>
        <h1>{note.title}</h1>
        <span>{note.excerpt}</span>
        <small>{note.date} · {note.readTime}</small>
      </header>
      <div className="article-cover"><Media src={note.image} alt={`${note.title} 기사 대표 이미지`} priority /></div>
      <article className="article-copy">
        {note.body.map((paragraph, index) => <p className={index === 0 ? "article-drop" : ""} key={paragraph}>{paragraph}</p>)}
        <blockquote>“자연을 빠르게 소비하지 않고, 출처와 과정, 매일의 사용법으로 기록합니다.”</blockquote>
        <h2>매일의 감각으로 이어지기</h2>
        <p>제주의 시간은 거창한 장면보다 반복되는 동작 속에 오래 남습니다. 오늘의 식탁, 물 이후의 피부, 잠들기 전의 호흡에서 자신의 균형을 천천히 발견해보세요.</p>
        <ArrowLink href="/collections">컬렉션 보기</ArrowLink>
      </article>
      <section className="article-related page-shell">
        <p className="kicker">Continue reading</p>
        <div className="notes-pair">{related.map((item) => <NoteCard note={item} key={item.slug} />)}</div>
      </section>
    </main>
  );
}
