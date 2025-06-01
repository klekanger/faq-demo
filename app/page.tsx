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
      <p className="text-gray-400 font-light text-sm md:text-base">
        Ble du ikke noe klokere av dette? Ta kontakt på{" "}
        <a href="mailto:kurt@lekanger.no">kurt@lekanger.no</a>
      </p>
    </article>
  );
}
