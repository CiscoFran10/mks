'use client';

import DefaultLayout from 'layouts/default-layout';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
