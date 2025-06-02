export const faqQuery = `
  {
    accordionCollection  {
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
