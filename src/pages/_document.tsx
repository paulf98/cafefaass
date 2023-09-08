import { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en" data-theme="pastel">
      <Analytics />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
