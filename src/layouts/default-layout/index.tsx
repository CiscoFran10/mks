import React, { ReactNode } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { AppContainer, MainContainer } from './styles';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AppContainer>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </AppContainer>
  );
};

export default DefaultLayout;
