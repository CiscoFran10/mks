import React from 'react';
import { CartCounterContainer } from './styles';

interface CartCounterProps {
  count: number;
  handleAddItem: () => void;
  handleRemoveItem: () => void;
  handleDecreaseItemQuantity: () => void;
}

const CartCounter = ({
  count,
  handleAddItem,
  handleDecreaseItemQuantity
}: CartCounterProps) => {
  return (
    <CartCounterContainer>
      <label>Qtd:</label>
      <div className="counter-box">
        <button aria-label='Diminuir quantidade' onClick={handleDecreaseItemQuantity}>-</button>
        <span>{count}</span>
        <button aria-label='Aumentar quantidade' onClick={handleAddItem}>+</button>
      </div>
    </CartCounterContainer>
  );
};

export default CartCounter;
