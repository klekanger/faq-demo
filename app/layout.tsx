import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FAQ",
  description: "Spørsmål og svar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <main className="min-h-screen p-4 md:p-8 lg:p-24 prose lg:prose-lg xl:prose-xl w-full max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
