"use client";

import { useEffect, useState } from "react";

export function StoryNav({ chapters }: { chapters: Array<{ number: string; title: string }> }) {
  const [active, setActive] = useState(chapters[0].number);

  useEffect(() => {
    const elements = chapters.map((chapter) => document.getElementById(`chapter-${chapter.number}`)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id.replace("chapter-", ""))),
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <nav className="story-nav" aria-label="스토리 목차">
      <p>Our chapters</p>
      {chapters.map((chapter) => (
        <a className={active === chapter.number ? "is-active" : ""} href={`#chapter-${chapter.number}`} key={chapter.number}>
          <span>{chapter.number}</span>{chapter.title}
        </a>
      ))}
    </nav>
  );
}
