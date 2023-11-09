import { getAllProducts } from 'api';
import { ReactNode, createContext } from 'react';
import { useQuery } from 'react-query';

interface ProductsContextProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextType);

export const ProductsContextProvider = ({
  children,
}: ProductsContextProviderProps) => {
  return <ProductsContext.Provider>{children}</ProductsContext.Provider>;
};
