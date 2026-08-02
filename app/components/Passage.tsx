"use client";

import { useEffect, useRef, useState } from "react";
import { passageSteps } from "../data/content";
import { Media } from "./BrandUI";

export function Passage() {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = Array.from(root.current?.querySelectorAll<HTMLElement>("[data-passage-step]") ?? []);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(Number((entry.target as HTMLElement).dataset.passageStep))),
      { rootMargin: "-35% 0px -45% 0px", threshold: 0 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="passage" ref={root}>
      <div className="passage__intro page-shell">
        <p className="kicker">04 · Mineral passage</p>
        <h2>비에서 시작해<br />매일의 리추얼까지</h2>
      </div>
      <div className="passage__layout page-shell">
        <ol className="passage__steps">
          {passageSteps.map((step, index) => (
            <li className={index === active ? "is-active" : ""} data-passage-step={index} key={step.number}>
              <span>{step.number}</span>
              <div><h3>{step.title}</h3><p>{step.copy}</p></div>
              <div className="passage__mobile-media"><Media src={step.image} alt={step.title} /></div>
            </li>
          ))}
        </ol>
        <div className="passage__media" aria-live="polite">
          {passageSteps.map((step) => (
            <Media key={step.number} src={step.image} alt={step.title} />
          ))}
          <div className="passage__media-shade" />
          <p><span>{passageSteps[active].number}</span>{passageSteps[active].title}</p>
        </div>
      </div>
    </section>
  );
}
