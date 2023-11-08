'use client';

import { GlobalStyle } from '@/styles/global';
import { defaultTheme } from '@/styles/themes/default';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '../lib/registry';
import { Montserrat } from 'next/font/google';
import Header from '@/components/header';
import DefaultLayout from 'layouts/default-layout';

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
        <ThemeProvider theme={defaultTheme}>
          <StyledComponentsRegistry>
            <DefaultLayout>{children}</DefaultLayout>
          </StyledComponentsRegistry>
          <GlobalStyle />
        </ThemeProvider>
      </body>
    </html>
  );
}
