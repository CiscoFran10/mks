import React, { useContext } from 'react';
import {
  Card,
  CardButton,
  CardContainer,
  CardDescription,
  CardHeader,
  CardImage,
  CardPrice,
  CardTitle,
} from './styles';
import ShoppingBag from '../../assets/shopping-bag.svg';
import { CartContext } from '@/contexts/cart-context';
import { Product } from 'interfaces/products';

const ProductItem = ({
  name,
  id,
  description,
  price,
  photo,
  brand,
}: Product) => {
  const { addNewCartItem } = useContext(CartContext);

  const handleAddCartItem = () => {
    addNewCartItem({ name, id, description, price, photo, brand });
  };

  return (
    <Card>
      <CardContainer>
        <CardImage
          src={photo}
          alt={name}
          width={160}
          height={160}
          loading="lazy"
        />

        <CardHeader>
          <CardTitle id={`product-${id}`}>
            {brand} {name}
          </CardTitle>

          <CardPrice variant="filled" aria-labelledby={`product-${id}`}>
            R${Number(price).toFixed(0)}
          </CardPrice>
        </CardHeader>

        <CardDescription>{description}</CardDescription>
      </CardContainer>

      <CardButton
        onClick={handleAddCartItem}
        aria-label={`Adicionar ${name} ao carrinho`}
      >
        <ShoppingBag aria-hidden />
        Comprar
      </CardButton>
    </Card>
  );
};

export default ProductItem;
