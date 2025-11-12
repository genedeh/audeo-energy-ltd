import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Audeo Energy Limited | Petroleum Trading & Energy Solutions Across Africa",
  description:
    "Audeo Energy Limited is a trusted petroleum trading and supply company delivering reliable, efficient, and sustainable energy solutions across Africa. We provide refined petroleum products, marine fueling, storage, and energy procurement advisory with world-class standards and integrity.",
  keywords: [
    "Audeo Energy",
    "Audeo Energy Limited",
    "Crude oil supplier",
    "Petroleum product supplier",
    "Bulk oil distributor"
  ],
  openGraph: {
    title: "Audeo Energy Limited | Powering Africa’s Growth Through Reliable Energy",
    description:
      "Established in 2006, Audeo Energy Limited is a leading petroleum trading and distribution company serving Africa’s industrial and commercial sectors. We specialize in refined petroleum supply, marine fueling, storage, and procurement advisory — driving reliability, sustainability, and growth across the continent.",
    url: "https://www.audeoenergy.com",
    siteName: "Audeo Energy Limited",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://audeoenergy.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Audeo Energy Limited – Reliable Petroleum and Energy Solutions Across Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audeo Energy Limited | Reliable Petroleum & Energy Solutions in Africa",
    description:
      "Audeo Energy Limited provides petroleum product trading, marine fueling, and energy supply solutions across Africa — delivering reliability, efficiency, and sustainability.",
    images: ["https://audeoenergy.com/images/logo.png"],
  },
  alternates: {
    canonical: "https://www.audeoenergy.com",
  },
  metadataBase: new URL("https://www.audeoenergy.com"),
  authors: [{ name: "Audeo Energy Limited", url: "https://www.audeoenergy.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Audeo Energy Limited",
            "url": "https://www.audeoenergy.com",
            "logo": "https://www.audeoenergy.com/images/logo.png",
            "description": "Audeo Energy Limited is a leading petroleum trading and supply company delivering reliable, efficient, and sustainable energy solutions across Africa.",
            "foundingDate": "2006",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "9B Hope Harriman Street Lekki Phase 1",
              "addressLocality": "Lagos",
              "addressCountry": "NG"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info@audeoenergy.com",
              "telephone": "+2347079393874",
              "contactType": "Customer Support"
            }
          })
        }} />
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
