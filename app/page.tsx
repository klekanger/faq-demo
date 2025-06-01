import { fetchOneAccordion } from "@/app/lib/api";
import Accordion from "./components/Accordion";

export default async function Faq() {
  const accordions = await fetchOneAccordion("FAQ");

  if (!accordions) {
    console.error("Accordion not found");
    return (
      <div className="flex justify-center items-center h-screen">
        Fant ingen FAQ
      </div>
    );
  }

  const { title, accordionItemsCollection: accordion } = accordions;

  return (
    <article>
      <Accordion items={accordion.items} title={title} />
    </article>
  );
}
