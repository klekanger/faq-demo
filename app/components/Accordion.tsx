"use client";

import ChevronIcon from "@/app/icons/chevron";
import { useEffect, useRef, useState } from "react";
import { type AccordionItem } from "../lib/types";

export default function Accordion({
  items,
  title,
  singleOnly = false,
}: {
  items: AccordionItem[];
  title: string;
  singleOnly?: boolean;
}) {
  const accordionRef = useRef<HTMLDivElement>(null);
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Toggle the accordion items using their index number
  // If singleOnly is true, only one item can be open at a time
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

  // Close all items when clicking outside the accordion
  const outsideClickHandler = (e: MouseEvent) => {
    if (
      accordionRef.current &&
      !accordionRef.current.contains(e.target as Node)
    ) {
      setOpenItems([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", outsideClickHandler);
    return () => {
      document.removeEventListener("click", outsideClickHandler);
    };
  }, []);

  return (
    <section aria-label={`Accordion for ${title}`} className="pt-8">
      <h1 className="text-heading text-center pb-8 md:pb-16">
        {title ?? "Spørsmål og svar"}
      </h1>

      <div ref={accordionRef}>
        {items.map((item, index) => {
          const isOpen = openItems.includes(index);
          const buttonId = `accordion-button-${index}`;
          const contentId = `accordion-content-${index}`;

          return (
            <div key={item._id}>
              <h2 className="not-prose text-lg md:text-xl lg:text-2xl pb-4 md:pb-8 group">
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
                    className={`ml-2 transition-transform duration-200 ease-in-out w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] ${
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
