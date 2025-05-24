export const faqQuery = `
  {
    accordionCollection (where:{internalName:"FAQ"}) {
      items {
        _id
        title
        accordionItemsCollection {
          items {
            _id
            name
            text
          }
        }
      }
    }
  }
`;
