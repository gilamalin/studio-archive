import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteMeta } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: siteMeta.pageTitle,
  description: siteMeta.pageDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased"
      >
        <div className="flex min-h-screen flex-col bg-[var(--bg)]">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
