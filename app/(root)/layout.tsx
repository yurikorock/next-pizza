import type { Metadata } from "next";
import { Header } from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Pizza Next | Головна",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <main className="min-h-screen" data-scroll-behavior="smooth">
        <Header />
        {children}
      </main>
    
  );
}
