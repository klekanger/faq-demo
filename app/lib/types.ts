export type AccordionItem = {
  _id: string;
  name: string;
  text: string;
};

export type AccordionItemsCollection = {
  items: AccordionItem[];
};

export type Accordion = {
  _id: string;
  title: string;
  accordionItemsCollection: AccordionItemsCollection;
};

export type AccordionCollection = {
  accordionCollection: {
    items: Accordion[];
  };
};

export type AccordionCollectionQueryResult = {
  data: AccordionCollection;
};
