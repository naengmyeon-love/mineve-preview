import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Media, NoteCard, ProductCard } from "../../components/BrandUI";
import { notes, products } from "../../data/content";

export function generateStaticParams() { return notes.map((note) => ({ slug: note.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  return note ? { title: note.title, description: note.excerpt } : {};
}

const body = [
  "제주의 물을 이해하려면 바다보다 먼저 발아래의 시간을 바라봐야 합니다. 비는 섬에 닿은 뒤 빠르게 현무암의 틈으로 스며들고, 눈에 보이지 않는 길을 따라 오래 이동합니다.",
  "우리가 미네랄을 말할 때 중요한 것은 하나의 수치가 아닙니다. 원료가 어디에서 왔는지, 어떤 방식으로 다뤄졌는지, 지금 확인할 수 있는 정보가 무엇인지 함께 읽어야 합니다.",
  "MINEVE는 자연을 과장된 효능의 배경으로 쓰지 않습니다. 출처와 과정, 사용되는 장면을 정직하게 기록하고, 일상에서 반복할 수 있는 작고 구체적인 리추얼을 제안합니다.",
];

export default async function NoteDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) notFound();
  const index = notes.findIndex((item) => item.slug === slug);
  const previous = notes[(index - 1 + notes.length) % notes.length];
  const next = notes[(index + 1) % notes.length];

  return (
    <main className="article-page-new">
      <header className="article-head page-shell">
        <p className="kicker">{note.category} · MINEVE Notes</p>
        <h1>{note.title}</h1>
        <p className="article-dek">{note.excerpt}</p>
        <div><span>{note.date}</span><span>{note.readTime} read</span><span>MINEVE Editorial</span></div>
      </header>
      <Media src={note.image} alt={`${note.title} 대표 이미지`} className="article-cover" priority />
      <article className="article-copy">
        <p className="article-drop">{body[0]}</p>
        <blockquote>“보이지 않는 흐름을 이해하는 일은, 우리가 무엇을 고를지 정하는 첫 번째 기준입니다.”</blockquote>
        <h2>보이지 않는 통로</h2>
        <p>{body[1]}</p>
        <Media src={note.image} alt={`${note.title}의 물질과 표면을 가까이 본 이미지`} />
        <h2>원천에서 일상으로</h2>
        <p>{body[2]}</p>
      </article>
      <section className="article-related page-shell">
        <div><p className="kicker">Related product</p><ProductCard product={products[index % products.length]} /></div>
        <div><p className="kicker">Next reading</p><NoteCard note={next} /></div>
      </section>
      <nav className="article-pagination page-shell">
        <Link href={`/notes/${previous.slug}`}><span>← Previous</span>{previous.title}</Link>
        <Link href={`/notes/${next.slug}`}><span>Next →</span>{next.title}</Link>
      </nav>
    </main>
  );
}
