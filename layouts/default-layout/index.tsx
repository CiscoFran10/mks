'use client';

import React, { ReactNode } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { AppContainer, MainContainer } from './styles';
import { GlobalStyle } from '@/styles/global';
import { defaultTheme } from '@/styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CartContextProvider } from '@/contexts/cart-context';
import StyledComponentsRegistry from '../../lib/registry';

const queryClient = new QueryClient();

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <StyledComponentsRegistry>
          <CartContextProvider>
            <AppContainer>
              <Header />
              <MainContainer>{children}</MainContainer>
              <Footer />
            </AppContainer>
          </CartContextProvider>
        </StyledComponentsRegistry>
        <GlobalStyle />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default DefaultLayout;
