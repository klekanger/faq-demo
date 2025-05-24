"use client";

import { useState } from "react";
import { AccordionItem } from "../lib/types";

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <section aria-label="accordion" className="pt-8">
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        const buttonId = `accordion-button-${index}`;
        const contentId = `accordion-content-${index}`;

        return (
          <div key={item._id}>
            <h3>
              <button
                id={buttonId}
                className="text-links text-left w-full"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                aria-controls={contentId}
              >
                {item.name}
              </button>
            </h3>
            {isOpen && (
              <div id={contentId} role="region" aria-labelledby={buttonId}>
                <p>{item.text}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
