import React from 'react';
import { Skeleton } from './styles';

const ProductSkeleton = () => {
  return (
    <Skeleton>
      <div className='image'></div>
      <div></div>
      <div></div>
    </Skeleton>
  );
};

export default ProductSkeleton;
