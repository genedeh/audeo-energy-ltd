import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Audeo Energy Ltd. | Reliable Petroleum & Energy Solutions",
  description:
    "At Audeo Energy Ltd, we are committed to powering progress across Africa through reliable, efficient, and accessible petroleum and energy solutions.",
  openGraph: {
    title: "Audeo Energy Ltd. | Reliable Petroleum & Energy Solutions",
    description:
      "We take pride in being a trusted partner in the supply and distribution of high-quality petroleum products, ensuring that businesses and communities receive the energy they need to grow and thrive.",
    url: "https://www.audeoenergy.com",
    siteName: "Audeo Energy Ltd.",
    locale: "en_NG",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=BBH+Sans+Hegarty&family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Rubik+Vinyl&family=Ysabeau+SC:wght@1..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white global-font min-h-screen"  >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
