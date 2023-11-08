import React from 'react';
import CartIndicator from './cart-indicator';
import { HeaderContainer, Logo } from './styles';

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
