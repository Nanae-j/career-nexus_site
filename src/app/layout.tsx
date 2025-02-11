import { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import AdobeFont from "./components/utils/AdobeFont";

export const metadata: Metadata = {
  title: "Career Nexus",
  description: "- 架空のコーポレートサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <head>
        {/* <!-- preconnect: 接続を早期に確立 --> */}
        <link
          rel="preconnect"
          href="https://use.typekit.net"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://p.typekit.net"
          crossOrigin="anonymous"
        />

        {/* <!-- dns-prefetch: DNS解決を事前に行う --> */}
        <link rel="dns-prefetch" href="https://use.typekit.net" />
        <link rel="dns-prefetch" href="https://p.typekit.net" />

        <link
          rel="preload"
          as="style"
          href="https://use.typekit.net/lsl7nep.css"
        />
        <link rel="stylesheet" href="https://use.typekit.net/lsl7nep.css" />
      </head>
      <Suspense>
        <AdobeFont />
      </Suspense>
      <body>{children}</body>
    </html>
  );
}
