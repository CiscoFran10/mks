import React, { ContextType } from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { CartContext } from '@/contexts/cart-context';
import ProductsCart from '../components/cart';
import Header from '@/components/header';

jest.mock('@/contexts/cart-context');

const renderWithCartContext = (contextValues: any, component: any) => (
  <CartContext.Provider value={contextValues}>{component}</CartContext.Provider>
);

describe('ProductsCart Components', () => {
  const cartItem = {
    id: 2,
    name: 'AirPods',
    brand: 'Apple',
    description:
      'Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
    price: '1200',
    count: 1,
  };

  test('renders ProductsCart component with items', async () => {
    const contextValues = {
      cart: [cartItem],
      isCartOpen: false,
      addNewCartItem: jest.fn(),
      handleOpenCart: jest.fn(),
      removeItemFromCart: jest.fn(),
      decreaseItemQuantity: jest.fn(),
    };

    contextValues.handleOpenCart.mockImplementation(() => {
      contextValues.isCartOpen = true;
    });

    const headerContainer = render(
      renderWithCartContext(
        contextValues,
        <>
          <Header />
          <ProductsCart />
        </>
      )
    );

    act(() => {
      const openCartButton = headerContainer.getByRole('button');
      fireEvent.click(openCartButton);
    });

    await waitFor(() => {
      expect(contextValues.handleOpenCart).toHaveBeenCalledTimes(1);
      expect(contextValues.isCartOpen).toBe(true);
    });

    const cartContainer = render(
      renderWithCartContext(contextValues, <ProductsCart />)
    );

    expect(cartContainer.getByText('Carrinho de compras')).toBeInTheDocument();
    expect(
      cartContainer.getByText(`Apple ${cartItem.name}`)
    ).toBeInTheDocument();
    expect(
      cartContainer.getByLabelText(`Remover ${cartItem.name} do carrinho`)
    ).toBeInTheDocument();
    expect(cartContainer.getByTestId('price')).toHaveTextContent(
      `R$${cartItem.price}`
    );
    expect(cartContainer.getByText('Finalizar Compra')).toBeInTheDocument();

    const cartItems = cartContainer.getAllByRole('listitem');
    expect(cartItems.length).toBe(1);
  });

  test('renders ProductsCart component with empty cart', () => {
    const contextValues = {
      cart: [],
      isCartOpen: true,
      addNewCartItem: jest.fn(),
      handleOpenCart: jest.fn(),
      removeItemFromCart: jest.fn(),
      decreaseItemQuantity: jest.fn(),
    };

    const cartContainer = render(
      renderWithCartContext(contextValues, <ProductsCart />)
    );

    expect(
      cartContainer.getByText('Nenhum produto adicionado')
    ).toBeInTheDocument();
  });

  test('removes item from the cart', async () => {
    const contextValues = {
      cart: [cartItem],
      isCartOpen: true,
      addNewCartItem: jest.fn(),
      handleOpenCart: jest.fn(),
      removeItemFromCart: jest.fn(),
      decreaseItemQuantity: jest.fn(),
    };

    contextValues.removeItemFromCart.mockImplementation((idToRemove) => {
      contextValues.cart = contextValues.cart.filter(
        (item) => item.id !== idToRemove
      );
    });

    const cartContainer = render(
      renderWithCartContext(contextValues, <ProductsCart />)
    );

    const removeButton = cartContainer.getByLabelText(
      `Remover ${cartItem.name} do carrinho`
    );

    fireEvent.click(removeButton);

    await waitFor(() => {
      expect(contextValues.removeItemFromCart).toHaveBeenCalledWith(
        cartItem.id
      );
    });

    expect(contextValues.cart.length).toBe(0);
  });

  test('decreases item quantity in the cart', async () => {
    const contextValues = {
      cart: [cartItem],
      isCartOpen: true,
      addNewCartItem: jest.fn(),
      handleOpenCart: jest.fn(),
      removeItemFromCart: jest.fn(),
      decreaseItemQuantity: jest.fn(),
    };

    contextValues.decreaseItemQuantity.mockImplementation(() => {
      contextValues.cart[0].count = contextValues.cart[0].count - 1;
    });

    const cartContainer = render(
      renderWithCartContext(contextValues, <ProductsCart />)
    );

    const decreaseButton = cartContainer.getByLabelText(`Diminuir quantidade`);

    fireEvent.click(decreaseButton);

    await waitFor(() => {
      expect(contextValues.decreaseItemQuantity).toHaveBeenCalledTimes(1);
    });

    expect(contextValues.cart[0].count).toBe(0);
  });

  test('increases item quantity in the cart when clicking the "increase" button', async () => {
    const contextValues = {
      cart: [cartItem],
      isCartOpen: true,
      addNewCartItem: jest.fn(),
      handleOpenCart: jest.fn(),
      removeItemFromCart: jest.fn(),
      decreaseItemQuantity: jest.fn(),
    };

    contextValues.addNewCartItem.mockImplementation(() => {
      contextValues.cart[0].count = contextValues.cart[0].count + 1;
    });

    const cartContainer = render(
      renderWithCartContext(contextValues, <ProductsCart />)
    );

    const increaseButton = cartContainer.getByLabelText(`Aumentar quantidade`);

    fireEvent.click(increaseButton);

    await waitFor(() => {
      expect(contextValues.addNewCartItem).toHaveBeenCalledTimes(1);
    });

    expect(contextValues.cart[0].count).toBe(1);
  });
});
