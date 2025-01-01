import { Suspense } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import AdobeFont from './components/AdobeFont';

export const metadata: Metadata = {
  title: 'Career Nexus',
  description: '- 架空のコーポレートサイト',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/lsl7nep.css" />
        <Suspense>
          <AdobeFont />
        </Suspense>
      </head>
      <body>{children}</body>
    </html>
  );
}
