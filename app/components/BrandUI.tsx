import Image from "next/image";
import Link from "next/link";
import { collections, formatPrice, notes, products, type LineId, type Note, type Product } from "../data/content";

export function Media({
  src,
  alt,
  priority = false,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <figure className="media">
      <Image src={`${basePath}${src}`} alt={alt} fill priority={priority} sizes={sizes} />
    </figure>
  );
}

export function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link prefetch={false} className={`text-link ${light ? "text-link--light" : ""}`} href={href}>
      <span>{children}</span><span aria-hidden="true">↗</span>
    </Link>
  );
}

export function SectionTitle({
  index,
  eyebrow,
  title,
  copy,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <header className="section-title" data-reveal>
      <p className="kicker">{index && <span>{index}</span>}{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </header>
  );
}

export function ProductCard({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <article className={`product-card ${large ? "product-card--large" : ""}`} data-reveal>
      <Link prefetch={false} href={`/products/${product.slug}`}>
        <div className="product-card__image">
          <Media src={product.image} alt={`${product.name} 제품 이미지`} sizes={large ? "(max-width: 900px) 100vw, 62vw" : "(max-width: 900px) 50vw, 28vw"} />
          <span>{product.line.toUpperCase()}</span>
        </div>
        <div className="product-card__info">
          <div>
            <h3>{product.name}</h3>
            <strong>{formatPrice(product.price)}</strong>
          </div>
          <p>{product.english} · {product.size}</p>
        </div>
      </Link>
    </article>
  );
}

export function NoteCard({ note, featured = false }: { note: Note; featured?: boolean }) {
  return (
    <article className={`note-card ${featured ? "note-card--featured" : ""}`} data-reveal>
      <Link prefetch={false} href={`/notes/${note.slug}`}>
        <Media src={note.image} alt={`${note.title} 기사 이미지`} sizes={featured ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 38vw"} />
        <div className="note-card__shade" />
        <div className="note-card__copy">
          <p>{note.category}</p>
          <h3>{note.title}</h3>
          <span>{note.date} · {note.readTime}</span>
        </div>
      </Link>
    </article>
  );
}

const lineCopy = {
  salt: {
    lead: "식탁 위에 놓이는 제주의 미네랄",
    quote: "결정의 크기와 녹는 속도까지, 맛의 마지막 장면을 설계합니다.",
    story: "제주의 바다와 화산암층을 지나온 원료를 고운 입자와 굵은 결정, 향의 블렌드로 나누었습니다. 소금이 앞서기보다 재료의 본연을 또렷하게 만드는 것이 MINEVE SALT의 기준입니다.",
    labels: ["결정의 크기", "녹는 속도", "마지막 한 꼬집"],
  },
  renew: {
    lead: "물 이후 피부를 위한 미네랄 리추얼",
    quote: "덜어내고, 머무르고, 되돌리는 세 번의 조용한 동작.",
    story: "RENEW는 목욕 뒤의 짧은 시간에 집중합니다. 젖은 피부에서 부드럽게 녹는 결정과 얇게 남는 식물성 오일이 피부의 감각을 서두르지 않고 되돌립니다.",
    labels: ["POLISH", "SOAK", "RESTORE"],
  },
  rest: {
    lead: "낮과 저녁의 리듬을 채우는 미네랄",
    quote: "몸의 속도를 늦추는 일은 한 잔의 물에서 시작됩니다.",
    story: "REST는 낮의 수분과 저녁의 호흡 사이에 놓입니다. 마그네슘과 전해질을 거창한 약속이 아니라 매일 이어갈 수 있는 사용 장면으로 제안합니다.",
    labels: ["DAY · HYDRATE", "PAUSE · BREATHE", "NIGHT · SETTLE"],
  },
};

export function CollectionPage({ lineId }: { lineId: LineId }) {
  const line = collections[lineId];
  const copy = lineCopy[lineId];
  const lineProducts = products.filter((product) => product.line === lineId);
  const relatedNotes = notes.filter((note) =>
    lineId === "salt" ? ["Table", "Mineral"].includes(note.category) :
    lineId === "renew" ? ["Skin", "Body"].includes(note.category) :
    ["Body", "Island"].includes(note.category),
  );

  return (
    <main className={`line-page line-page--${lineId}`}>
      <section className="line-hero">
        <Media src={line.image} alt={`${line.title} 컬렉션의 ${line.headline} 이미지`} priority />
        <div className="line-hero__shade" />
        <div className="line-hero__copy page-shell">
          <p className="kicker">MINEVE {line.title}</p>
          <h1>{line.title}</h1>
          <p>{copy.lead}</p>
        </div>
      </section>

      <section className="line-intro page-shell">
        <p className="kicker">01 · Collection philosophy</p>
        <h2>{copy.quote}</h2>
        <p>{copy.story}</p>
      </section>

      <section className="ritual-sequence" aria-label={`${line.title} 사용 리추얼`}>
        {copy.labels.map((label, index) => (
          <div key={label} data-reveal>
            <span>0{index + 1}</span>
            <h3>{label}</h3>
            <p>{lineId === "salt" ? "입자와 온도에 따라 달라지는 한 꼬집" : lineId === "renew" ? "물과 피부 사이에 놓이는 순서" : "하루의 속도를 고르는 작은 동작"}</p>
          </div>
        ))}
      </section>

      <section className="section page-shell">
        <SectionTitle index="02" eyebrow="Collection edit" title="제품이 머무는 장면" copy={line.intro} />
        <div className={`collection-products collection-products--${lineId}`}>
          {lineProducts.map((product, index) => <ProductCard product={product} large={index === 0} key={product.slug} />)}
        </div>
      </section>

      <section className="line-material">
        <Media src={lineId === "salt" ? "/images/mineve-basalt.webp" : lineId === "renew" ? "/images/mineve-renew.webp" : "/images/mineve-rest.webp"} alt={`${line.title} 원료와 사용 장면`} />
        <div className="line-material__copy">
          <p className="kicker">03 · Material study</p>
          <h2>{copy.quote}</h2>
          <ArrowLink href="/our-story" light>원료의 여정 읽기</ArrowLink>
        </div>
      </section>

      <section className="section page-shell">
        <SectionTitle index="04" eyebrow="Related notes" title="조금 더 깊이 읽기" />
        <div className="notes-pair">{relatedNotes.slice(0, 2).map((note) => <NoteCard note={note} key={note.slug} />)}</div>
      </section>
    </main>
  );
}
