import type { Metadata } from "next";
import "./globals.css";
import "./creator.css";

export const metadata: Metadata = {
  title: "Harshit | Software Engineer Portfolio",
  description:
    "Personal portfolio of Harshit — Software Engineer building modern web experiences at Lowe's.",
  icons: {
    icon: "/travel_logo_bw.svg",
  },
};

import MouseSpotlight from "./components/MouseSpotlight";

import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollToTop />
        <MouseSpotlight />
        <Header />
        {children}
      </body>
    </html>
  );
}
