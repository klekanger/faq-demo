import { OneAccordionQueryResult } from "./types";

// Fetch one FAQ with a specific internalName
export async function fetchOneAccordion(
  internalName: string
): Promise<OneAccordionQueryResult | null> {
  if (!internalName) {
    console.error("Internal name is required");
    return null;
  }

  const query = `
    {
      accordionCollection (where:{internalName:"${internalName}"}) {
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

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  const result = await response.json();
  return result.data.accordionCollection.items[0];
}

// Generic fetch function for Contentful GraphQL queries
export async function fetchGraphQL<T>(query: string): Promise<T> {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  const result = await response.json();
  return result as T;
}
