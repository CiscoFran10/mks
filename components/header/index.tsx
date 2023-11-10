import React from 'react';
import { HeaderContainer, Logo } from './styles';
import CartIndicator from './cart-indicator';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo href="/">
        MKS
        <span>Sistemas</span>
      </Logo>

      <CartIndicator />
    </HeaderContainer>
  );
};

export default Header;
