import type { Metadata } from "next";
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
      <body className="min-h-screen bg-[#FAF7F2] text-[#18181B] antialiased">
        {children}
      </body>
    </html>
  );
}
