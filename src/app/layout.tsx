'use client';

import DefaultLayout from 'layouts/default-layout';
import StyledComponentsRegistry from '../lib/registry';
import { GlobalStyle } from '@/styles/global';
import { defaultTheme } from '@/styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { Montserrat } from 'next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProductsContextProvider } from 'contexts/products-context';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700'],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <ThemeProvider theme={defaultTheme}>
          <QueryClientProvider client={queryClient}>
            <StyledComponentsRegistry>
              <ProductsContextProvider>
                <DefaultLayout>{children}</DefaultLayout>
              </ProductsContextProvider>
            </StyledComponentsRegistry>
            <GlobalStyle />
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
