'use client';

import React from 'react';
import ProductItem from '@/components/product-item';
import { Product } from 'interfaces/products';
import { getAllProducts } from 'api';
import { useQuery } from 'react-query';
import { ProductsList } from './styles';

export interface ProductData {
  products: Product[];
  count: number;
}

const Home = () => {
  const { data, isLoading, isError } = useQuery<ProductData>(
    'products',
    getAllProducts
  );

  console.log(data);

  if (data && !isError)
    return (
      <ProductsList>
        {data.products.length ? (
          data.products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))
        ) : (
          <div>Nenhum produto encontrado</div>
        )}
      </ProductsList>
    );
};

export default Home;
