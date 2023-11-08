import React from 'react';
import CartIcon from '../../../assets/cart.svg';
import { CartIndicatorButton } from './styles';

const CartIndicator = () => {
  return (
    <CartIndicatorButton>
      <CartIcon aria-hidden />
      <span aria-label="Produtos no carrinho">0</span>
    </CartIndicatorButton>
  );
};

export default CartIndicator;
