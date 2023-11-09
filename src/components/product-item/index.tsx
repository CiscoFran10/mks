import React from 'react';
import Image from 'next/image';
import ShoppingBag from '../../assets/shopping-bag.svg';
import { Product } from 'interfaces/products';
import { ProductCard } from './styles';

const ProductItem = ({
  name,
  price,
  brand,
  description,
  id,
  photo,
}: Product) => {
  return (
    <ProductCard title={`${brand} ${name}`}>
      <div className="container">
        <Image src={photo} alt={name} width={150} height={150} />

        <header>
          <h2>
            {brand} {name}
          </h2>
          <strong>R${Number(price).toFixed(0)}</strong>
        </header>

        <p>{description}</p>
      </div>

      <button>
        <ShoppingBag />
        Comprar
      </button>
    </ProductCard>
  );
};

export default ProductItem;
