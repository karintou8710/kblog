import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/header";
import { cn } from "@/lib/utils";

import "./globals.css";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Home | Karintou Blog",
  description: "かりんとうの気軽なブログ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          inter.variable
        )}
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
