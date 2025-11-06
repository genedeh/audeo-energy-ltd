import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Audeo Energy Ltd",
  description: "Energy You Can Rely On",
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
      </body>
    </html>
  );
}
