import React, { useContext } from 'react';
import CartIcon from '../../../assets/cart.svg';
import { CartIndicatorButton } from './styles';
import { CartContext } from '@/contexts/cart-context';

const CartIndicator = () => {
  const { cart, handleOpenCart } = useContext(CartContext);

  const itemCount = cart?.reduce(
    (accumulator, item) => accumulator + item.count,
    0
  );

  return (
    <CartIndicatorButton
      onClick={handleOpenCart}
      aria-label="Abrir carrinho"
      aria-haspopup="true"
    >
      <CartIcon />
      <span
        aria-label={`Produtos no carrinho: ${itemCount}`}
        aria-live="polite"
      >
        {itemCount}
      </span>
    </CartIndicatorButton>
  );
};

export default CartIndicator;
