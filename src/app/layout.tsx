'use client';

import { GlobalStyle } from '@/styles/global';
import { defaultTheme } from '@/styles/themes/default';
import StyledComponentsRegistry from 'lib/registry';
import { ThemeProvider } from 'styled-components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider theme={defaultTheme}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <GlobalStyle />
        </ThemeProvider>
      </body>
    </html>
  );
}
