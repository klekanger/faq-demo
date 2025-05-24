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
          <article key={accordion._id}>
            <Accordion
              items={accordionItems}
              key={accordion._id}
              title={accordion.title}
              // singleOnly={true}
            />
          </article>
        );
      })}
    </>
  );
}
