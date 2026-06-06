import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import Script from "next/script";


const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link data-rh="true" rel="icon" href="../public/logo.png" />
      </head>
      <body className={nunito.variable}>
        {children}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&loading=async`}
          strategy="beforeInteractive"
        />
        <Toaster/>
        </body>
    </html>
  );
}
