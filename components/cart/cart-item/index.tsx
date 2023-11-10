import React, { useContext } from 'react';
import {
  CardImage,
  CardPrice,
  CardTitle,
} from '@/components/product-item/styles';
import CartCounter from './cart-counter';
import { CloseButton } from '../styles';
import { CartItemContainer } from './styles';
import { CartContext, CartItemData } from '@/contexts/cart-context';

const CartItem = ({
  id,
  name,
  brand,
  photo,
  price,
  count,
  description,
}: CartItemData) => {
  const { removeItemFromCart, addNewCartItem, decreaseItemQuantity } =
    useContext(CartContext);

  const handleRemoveItem = () => {
    removeItemFromCart(id);
  };

  const handleAddItem = () => {
    addNewCartItem({ id, name, brand, photo, price, description });
  };

  const handleDecreaseItemQuantity = () => {
    decreaseItemQuantity(id);
  };

  return (
    <CartItemContainer title={name}>
      <CloseButton
        onClick={handleRemoveItem}
        className="delete"
        position="absolute"
        aria-label={`Remover ${name} do carrinho`}
      >
        x
      </CloseButton>

      <CardImage
        src={photo}
        alt={`${name} ${brand}`}
        width={60}
        height={60}
        decoding="async"
        loading="lazy"
      />

      <CardTitle>
        {brand} {name}
      </CardTitle>

      <CartCounter
        handleRemoveItem={handleRemoveItem}
        handleAddItem={handleAddItem}
        handleDecreaseItemQuantity={handleDecreaseItemQuantity}
        count={count}
      />

      <CardPrice variant="outline" data-testid='price' aria-labelledby={`cart-item-${id}`}>
        R${Number(price).toFixed(0)}
      </CardPrice>
    </CartItemContainer>
  );
};

export default CartItem;
