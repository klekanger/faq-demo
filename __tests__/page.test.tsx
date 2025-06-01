import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import type { OneAccordionQueryResult } from "@/app/lib/types";
import Page from "../app/page";
import { fetchOneAccordion } from "@/app/lib/api";

// Mock the fetchGraphQL function
vi.mock("@/app/lib/api", () => ({
  fetchOneAccordion: vi.fn(),
}));

test("renders FAQ page with accordions", async () => {
  // Mock successful API response
  const mockData: OneAccordionQueryResult = {
    title: "Test FAQ",
    accordionItemsCollection: {
      items: [
        {
          _id: "1",
          name: "Test Question",
          text: "Test Answer",
        },
        {
          _id: "2",
          name: "Test Question 2",
          text: "Test Answer 2",
        },
        {
          _id: "3",
          name: "Test Question 3",
          text: "Test Answer 3",
        },
      ],
    },
  };

  (fetchOneAccordion as ReturnType<typeof vi.fn>).mockResolvedValue(mockData);

  render(await Page());

  expect(
    screen.getByRole("heading", { level: 1, name: "Test FAQ" })
  ).toBeDefined();

  // Check if the questions are rendered
  expect(screen.getByText("Test Question")).toBeDefined();
  expect(screen.getByText("Test Question 2")).toBeDefined();
  expect(screen.getByText("Test Question 3")).toBeDefined();

  // Check if the answers are rendered
  expect(screen.getByText("Test Answer")).toBeDefined();
  expect(screen.getByText("Test Answer 2")).toBeDefined();
  expect(screen.getByText("Test Answer 3")).toBeDefined();
});

test("renders error message when no accordions are found", async () => {
  // Mock empty API response
  const mockData: OneAccordionQueryResult | null = null;
  (fetchOneAccordion as ReturnType<typeof vi.fn>).mockResolvedValue(mockData);

  render(await Page());

  // Check if the error message is rendered
  expect(screen.getByText("Fant ingen FAQ")).toBeDefined();
});
