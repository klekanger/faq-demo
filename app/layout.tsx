import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";

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
        <Navbar />
        <main className="min-h-screen px-4 md:px-8 lg:px-24 prose lg:prose-lg xl:prose-xl w-full max-w-6xl mx-auto pt-24 lg:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
