export type AccordionItem = {
  _id: string;
  name: string;
  text: string;
};

export type AccordionItemsCollection = {
  items: AccordionItem[];
};

export type OneAccordionQueryResult = {
  title: string;
  accordionItemsCollection: AccordionItemsCollection;
};
