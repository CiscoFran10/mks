import { Product } from 'interfaces/products';
import { ReactNode, createContext, useState } from 'react';

interface CartContextProviderProps {
  children: ReactNode;
}

export interface CartItemData extends Product {
  count: number;
}

export interface CartContextType {
  cart: CartItemData[];
  isCartOpen: boolean;
  addNewCartItem: (product: Product) => void;
  handleOpenCart: () => void;
  removeItemFromCart: (productId: number) => void;
  decreaseItemQuantity: (productId: number) => void;
}

export const CartContext = createContext({} as CartContextType);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartItemData[] | []>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen((state) => !state);
  };

  const addNewCartItem = (product: Product) => {
    const productAlreadyExist = cart.find((item) => item.id === product.id);

    if (productAlreadyExist) {
      const updatedCart = cart.map((item) =>
        item.id === productAlreadyExist.id
          ? { ...item, count: item?.count + 1 }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const removeItemFromCart = (productId: number) => {
    const filteredCart = cart.filter((item) => item.id !== productId);

    setCart(filteredCart);
  };

  const decreaseItemQuantity = (productId: number) => {
    const updatedCart = cart
      .map((item) =>
        item.id === productId
          ? { ...item, count: Math.max(item.count - 1, 0) }
          : item
      )
      .filter((item) => item.count > 0);

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        addNewCartItem,
        handleOpenCart,
        removeItemFromCart,
        decreaseItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
