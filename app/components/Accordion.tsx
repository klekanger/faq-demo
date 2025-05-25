"use client";

import ChevronIcon from "@/app/icons/chevron";
import { useState } from "react";
import { AccordionItem } from "../lib/types";

export default function Accordion({
  items,
  title,
  singleOnly = false,
}: {
  items: AccordionItem[];
  title: string;
  singleOnly?: boolean;
}) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (singleOnly) {
      setOpenItems([index]);
    } else {
      setOpenItems((prev) => {
        if (prev.includes(index)) {
          return prev.filter((item) => item !== index);
        } else {
          return [...prev, index];
        }
      });
    }
  };

  return (
    <section aria-label={`Accordion for ${title}`} className="pt-8">
      <h1 className="text-heading text-center pb-8 md:pb-16">
        {title ?? "Spørsmål og svar"}
      </h1>

      <div>
        {items.map((item, index) => {
          const isOpen = openItems.includes(index);
          const buttonId = `accordion-button-${index}`;
          const contentId = `accordion-content-${index}`;

          return (
            <div key={item._id}>
              <h2 className="not-prose text-xl md:text-2xl pb-4 md:pb-8 group">
                <button
                  id={buttonId}
                  className="text-links text-left w-full flex justify-between"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="hover:text-links-hover transition-colors duration-200 ease-in-out">
                    {item.name}
                  </span>
                  <ChevronIcon
                    className={`transition-transform duration-200 ease-in-out w-[2rem] h-[2rem] ${
                      isOpen ? " rotate-180" : "group-hover:scale-110"
                    }`}
                  />
                </button>
              </h2>
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className={`overflow-hidden transition-all duration-200 ease-in-out prose lg:prose-lg xl:prose-xl ${
                  isOpen ? "max-h-96 opacity-100 pb-8" : "max-h-0 opacity-0"
                }`}
              >
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
