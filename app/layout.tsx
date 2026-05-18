import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thyself Analyzer",
  description:
    "AI-powered personality and productivity insights from digital behavior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-slate-950"
          href="#main-content"
        >
          Skip to content
        </a>
        <Navbar />
        <div className="flex-1" id="main-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
