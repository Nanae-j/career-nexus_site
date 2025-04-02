import { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import AdobeFont from "./components/utils/AdobeFont";

export const metadata: Metadata = {
  metadataBase: new URL("https://career-nexus-site.vercel.app/"),
  title: {
    template: "%s | Career Nexus",
    default: "Career Nexus",
  },
  description:
    "Career Nexusは、企業と人材をつなぐプロフェッショナルな派遣サービスを提供する企業です。私たちは、業界に特化した専門的なスキルを持つ人材を厳選し、お客様のニーズに最適なソリューションを提案します。柔軟で効率的な人材派遣を通じて、企業の成長を支援し、スタッフ一人ひとりのキャリアアップにも貢献しています。信頼と実績のあるサービスを提供し、企業と人材の双方にとって価値あるパートナーシップを築きます。",
  openGraph: {
    title: "Career Nexus",
    description:
      "Career Nexusは、企業と人材をつなぐプロフェッショナルな派遣サービスを提供する企業です。私たちは、業界に特化した専門的なスキルを持つ人材を厳選し、お客様のニーズに最適なソリューションを提案します。柔軟で効率的な人材派遣を通じて、企業の成長を支援し、スタッフ一人ひとりのキャリアアップにも貢献しています。信頼と実績のあるサービスを提供し、企業と人材の双方にとって価値あるパートナーシップを築きます。",
    url: "https://career-nexus-site.vercel.app/",
    siteName: "Career Nexus",
    images: "/og-image.jpg",
  },
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
