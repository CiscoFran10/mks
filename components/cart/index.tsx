import React, { useContext } from 'react';
import { CartButton, CartContainer, CloseButton } from './styles';
import CartItem from './cart-item';
import { CartContext } from '@/contexts/cart-context';

const ProductsCart = () => {
  const { cart, isCartOpen, handleOpenCart } = useContext(CartContext);

  const totalPrice = cart.reduce((accumulator, currentItem) => {
    const subtotal = +currentItem.price * currentItem.count;
    return accumulator + subtotal;
  }, 0);

  return (
    isCartOpen && (
      <CartContainer>
        <header>
          <h1 id="cartTitle">
            Carrinho <br /> de compras
          </h1>

          <CloseButton
            onClick={handleOpenCart}
            size="large"
            aria-label="Fechar carrinho"
          >
            x
          </CloseButton>
        </header>

        <ul aria-labelledby="cartTitle">
          {cart.length > 0 ? (
            cart.map((product) => <CartItem key={product.id} {...product} />)
          ) : (
            <p>Nenhum produto adicionado</p>
          )}
        </ul>

        <footer>
          <h2>Total:</h2>
          <span aria-live="polite" aria-atomic="true" id="totalPrice">
            R${totalPrice}
          </span>
        </footer>

        <CartButton aria-describedby="totalPrice">Finalizar Compra</CartButton>
      </CartContainer>
    )
  );
};

export default ProductsCart;
