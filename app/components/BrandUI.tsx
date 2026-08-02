import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { collections, formatPrice, notes, products, type Note, type Product } from "../data/content";

export function Media({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  const resolvedSrc = src.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}` : src;
  return (
    <figure className={`media ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={resolvedSrc} alt={alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} />
    </figure>
  );
}

export function ArrowLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <Link className={`arrow-link ${light ? "arrow-link--light" : ""}`} href={href}>{children}<span aria-hidden="true">↗</span></Link>;
}

export function SectionTitle({ index, eyebrow, title, copy }: { index?: string; eyebrow: string; title: string; copy?: string }) {
  return (
    <header className="section-title" data-reveal>
      <p className="kicker">{index && <span>{index}</span>}{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-title__copy">{copy}</p>}
    </header>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card" data-reveal>
      <Link href={`/products/${product.slug}`} aria-label={`${product.name} 상세 보기`}>
        <Media src={product.image} alt={`${product.name} 제품 이미지`} />
        <div className="product-card__info">
          <p className="kicker">{product.line}</p>
          <h3>{product.name}</h3>
          <p className="product-card__english">{product.english}</p>
          <div><span>{product.size}</span><strong>{formatPrice(product.price)}</strong></div>
          <p>{product.description}</p>
        </div>
      </Link>
    </article>
  );
}

export function NoteCard({ note, featured = false }: { note: Note; featured?: boolean }) {
  return (
    <article className={`note-card ${featured ? "note-card--featured" : ""}`} data-reveal>
      <Link href={`/notes/${note.slug}`}>
        <Media src={note.image} alt={`${note.title} 기사 이미지`} />
        <div className="note-card__body">
          <p className="kicker">{note.category} · {note.date} · {note.readTime}</p>
          <h3>{note.title}</h3>
          <p>{note.excerpt}</p>
          <span className="read-more">Read note ↗</span>
        </div>
      </Link>
    </article>
  );
}

export function CollectionPage({ lineId }: { lineId: keyof typeof collections }) {
  const line = collections[lineId];
  const lineProducts = products.filter((product) => product.line === lineId);
  const relatedNotes = notes.filter((note) => lineId === "salt" ? ["Table", "Mineral"].includes(note.category) : lineId === "renew" ? ["Skin", "Body"].includes(note.category) : ["Body", "Island"].includes(note.category));
  const storyImage = lineId === "salt" ? lineProducts[1].image : lineId === "renew" ? lineProducts[0].image : lineProducts[1].image;

  return (
    <main className={`line-page line-page--${line.accent}`}>
      <section className="subhero">
        <Media src={line.image} alt={`${line.title} 컬렉션을 상징하는 제주 자연과 미네랄`} priority />
        <div className="subhero__veil" />
        <div className="subhero__content page-shell">
          <p className="kicker">{line.eyebrow}</p>
          <h1>{line.title}</h1>
          <p className="subhero__headline">{line.headline}</p>
          <p>{line.intro}</p>
        </div>
      </section>

      <section className="section page-shell">
        <SectionTitle index="01" eyebrow="The collection" title="감각을 위한 세 가지 기준" copy="작은 카드의 나열 대신, 각 제품이 만드는 장면과 질감에 충분한 공간을 주었습니다." />
        <div className={`feature-products feature-products--${lineId}`}>
          {lineProducts.map((product, index) => (
            <article className="feature-product" key={product.slug} data-reveal>
              <Media src={product.image} alt={`${product.name} 패키지와 텍스처`} />
              <div>
                <p className="kicker">0{index + 1} · {line.passage[index] ?? "RITUAL"}</p>
                <h2>{product.name}</h2>
                <p className="serif-copy">{product.description}</p>
                <dl>
                  <div><dt>Texture</dt><dd>{product.detail}</dd></div>
                  <div><dt>Use</dt><dd>{product.use}</dd></div>
                  <div><dt>Size</dt><dd>{product.size}</dd></div>
                </dl>
                <ArrowLink href={`/products/${product.slug}`}>제품 자세히 보기</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      {lineId === "salt" && (
        <section className="standards-strip" aria-label="MINEVE SALT 기준">
          {[
            ["JEJU ORIGIN", "제주 단일 원료"],
            ["NATURAL MINERAL", "자연 미네랄"],
            ["CLEAN PROCESS", "깨끗한 공정"],
            ["QUALITY STANDARD", "엄격한 품질 기준"],
          ].map(([title, copy], index) => (
            <div key={title}>
              <span aria-hidden="true">0{index + 1}</span>
              <strong>{title}</strong>
              <p>{copy}</p>
            </div>
          ))}
        </section>
      )}

      <section className="texture-section">
        <div className="page-shell split-story">
          <Media src={storyImage} alt={`${line.title} 원료의 가까운 질감`} />
          <div data-reveal>
            <p className="kicker">02 · Material study</p>
            <h2>{lineId === "salt" ? "결정은 맛의 속도를 바꿉니다." : lineId === "renew" ? "피부에 닿는 순서를 설계합니다." : "몸의 시간은 빛과 함께 달라집니다."}</h2>
            <p>{lineId === "salt" ? "고운 결정은 빠르게 스며들고, 굵은 결정은 식감과 여운을 남깁니다. MINEVE는 음식의 온도와 수분에 맞춰 입자를 나눕니다." : lineId === "renew" ? "POLISH, SOAK, RESTORE. 씻고 머무르고 되돌리는 세 동작이 하나의 느린 리추얼로 이어집니다." : "맑은 낮에는 가볍게 깨우고, 어두운 저녁에는 호흡을 낮춥니다. 두 개의 리듬이 하루를 부드럽게 잇습니다."}</p>
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <SectionTitle index="03" eyebrow="Related notes" title="조금 더 깊이 읽기" />
        <div className="notes-row">{relatedNotes.slice(0, 2).map((note) => <NoteCard note={note} key={note.slug} />)}</div>
      </section>
    </main>
  );
}

export const imageStyle = (src: string) => ({ "--image": `url("${src}")` } as CSSProperties);
