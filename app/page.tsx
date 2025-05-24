import { fetchGraphQL } from "@/app/lib/api";
import { faqQuery } from "@/app/lib/queries";
import Accordion from "./components/Accordion";
import { AccordionCollectionQueryResult } from "./lib/types";

export default async function Faq() {
  const { data } = await fetchGraphQL<AccordionCollectionQueryResult>(faqQuery);
  const accordions = data?.accordionCollection?.items ?? [];

  if (accordions.length === 0) {
    console.error("Accordion not found");
    return (
      <div className="flex justify-center items-center h-screen">
        Fant ingen FAQ
      </div>
    );
  }

  return (
    <>
      {accordions.map((accordion) => {
        const accordionItems = accordion.accordionItemsCollection.items;

        return (
          <article
            key={accordion._id}
            aria-labelledby={`faq-title-${accordion._id}`}
          >
            <h1
              id={`faq-title-${accordion._id}`}
              className="text-heading text-center"
            >
              {accordion?.title ?? "Spørsmål og svar"}
            </h1>

            <Accordion items={accordionItems} key={accordion._id} />
          </article>
        );
      })}
    </>
  );
}
