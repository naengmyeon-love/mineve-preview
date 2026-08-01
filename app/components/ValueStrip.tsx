import Link from "next/link";
import type { ValueItem } from "../data/site";

export function ValueStrip({
  items,
  tone = "light",
  ariaLabel = "MINEVE의 핵심 가치",
}: {
  items: ValueItem[];
  tone?: "light" | "dark";
  ariaLabel?: string;
}) {
  return (
    <section className={`value-strip value-strip--${tone}`} aria-label={ariaLabel}>
      <div className="value-strip__inner page-shell">
        {items.map((item) => {
          const content = (
            <>
              <span className="value-strip__index">{item.index}</span>
              <span className="value-strip__symbol" aria-hidden="true" />
              <span className="value-strip__copy">
                <strong>{item.title}</strong>
                <span>{item.label}</span>
                <small>{item.description}</small>
              </span>
              {item.href && <span className="value-strip__arrow" aria-hidden="true">↗</span>}
            </>
          );

          return item.href ? (
            <Link className="value-strip__item" href={item.href} key={item.title}>
              {content}
            </Link>
          ) : (
            <div className="value-strip__item" key={item.title}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}
