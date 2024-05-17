import type { Metadata } from "next";
import localFont from "next/font/local";
import clsx from "clsx";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/sections/footer";

const atypDisplay = localFont({
  variable: "--font-atyp-display",
  src: "./fonts/AtypDisplay-Medium.woff",
});

const atypText = localFont({
  variable: "--font-atyp-text",
  src: [
    {
      path: "./fonts/AtypText-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AtypText-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/AtypText-Semibold.woff",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  openGraph: {
    title: "Boulder Tech",
    description: "Tokenized Real-World assets, at the tip of your fingers.",
    url: "https://bouldertech.fi",
    siteName: "Boulder Tech",
    images: [
      {
        url: 'https://bouldertech.fi/assets/preview.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          atypDisplay.variable,
          atypText.variable,
          "font-atyp-text",
          'bg-background',
          'text-foreground-heading'
        )}
      >
        <Header />
        <main className="flex flex-col bg-background overflow-x-hidden">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
