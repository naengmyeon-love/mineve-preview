"use client";

import { useState } from "react";

export function Accordion({
  items,
}: {
  items: Array<{ title: string; content: React.ReactNode }>;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `accordion-panel-${index}`;
        return (
          <section key={item.title} className="accordion__item">
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.title}</span>
                <span aria-hidden="true">{open ? "−" : "+"}</span>
              </button>
            </h3>
            <div id={panelId} className="accordion__panel" hidden={!open}>
              {item.content}
            </div>
          </section>
        );
      })}
    </div>
  );
}

