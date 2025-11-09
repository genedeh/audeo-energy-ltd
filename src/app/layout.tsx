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
