'use client';

import React from 'react';
import { useQuery } from 'react-query';
import { ProductsList } from './styles';
import ProductsCart from '@/components/cart';
import ProductItem from '@/components/product-item';
import ProductSkeleton from '@/components/product-item/skeleton';
import { Product } from 'interfaces/products';
import { getAllProducts } from '../api';

export interface ProductData {
  products: Product[];
  count: number;
}

export const fakeProducts = Array.from({ length: 8 }, (_, index) => index + 1);

const Home = () => {
  const { data, isLoading, isError } = useQuery<ProductData>(
    'products',
    getAllProducts
  );

  if (isError) {
    return <div>Erro ao carregar produtos</div>;
  }

  if ((!isLoading && !data) || data?.products.length === 0) {
    return <div>Nenhum produto encontrado</div>;
  }

  return (
    <>
      <ProductsList>
        {isLoading
          ? fakeProducts.map((_, index) => (
              <React.Fragment key={index}>
                <ProductSkeleton />
              </React.Fragment>
            ))
          : data.products.map((product) => (
              <React.Fragment key={product.id}>
                <ProductItem {...product} />
              </React.Fragment>
            ))}
      </ProductsList>

      <ProductsCart />
    </>
  );
};

export default Home;
