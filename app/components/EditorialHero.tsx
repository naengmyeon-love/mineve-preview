"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MediaPlaceholder } from "./MediaPlaceholder";

type EditorialHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  mediaLabel: string;
  tone?: "ocean" | "stone" | "sage" | "water" | "sand" | "charcoal";
  cta?: { label: string; href: string };
  immersive?: boolean;
  variant?: "cinematic" | "split" | "article";
};

export function EditorialHero({
  eyebrow,
  title,
  description,
  mediaLabel,
  tone = "ocean",
  cta,
  immersive = false,
  variant = "cinematic",
}: EditorialHeroProps) {
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const update = () => {
      const rect = media.getBoundingClientRect();
      const offset = Math.max(-18, Math.min(18, rect.top * -0.025));
      media.style.setProperty("--parallax-y", `${offset}px`);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className={`editorial-hero editorial-hero--${variant} ${immersive ? "editorial-hero--immersive" : ""}`}>
      <div className="editorial-hero__media" ref={mediaRef}>
        <MediaPlaceholder
          label={mediaLabel}
          ratio={immersive ? "21:9" : "16:9"}
          tone={tone}
        />
      </div>
      <div className="editorial-hero__content page-shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {cta && (
          <Link className="button button--light" href={cta.href}>
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
