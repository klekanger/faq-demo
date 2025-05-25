import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        heading: "var(--heading)",
        links: "var(--links)",
        "links-hover": "var(--links-hover)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--foreground)",
            "--tw-prose-headings": "var(--heading)",
            "--tw-prose-links": "var(--links)",
            "--tw-prose-bold": "var(--heading)",
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
