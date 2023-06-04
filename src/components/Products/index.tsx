import React from 'react';
import OurProductHeader from '@/util/ComponentHeaderWithSpan';
import { StyledProductSection } from './style';
import ProductsItem from './ProductsItem';

type Props = {};

const products = [
  {
    title: 'Wrist Watch',
    price: 2000,
    image: '/img/product-image.svg',
  },
  {
    title: 'Iphone 12',
    price: 100000,
    image: '/img/product-image.svg',
  },
  {
    title: 'Wrist Watch',
    price: 2000,
    image: '/img/product-image.svg',
  },
  {
    title: 'Iphone 12',
    price: 100000,
    image: '/img/product-image.svg',
  },
  {
    title: 'Wrist Watch',
    price: 2000,
    image: '/img/product-image.svg',
  },
  {
    title: 'Iphone 12',
    price: 100000,
    image: '/img/product-image.svg',
  },
];

const ProductSection = (props: Props) => {
  return (
    <StyledProductSection>
      <OurProductHeader title='Our Products' />

      <div className='products-items'>
        {products.map((product, index) => (
          <ProductsItem key={index} {...product} />
        ))}
      </div>
    </StyledProductSection>
  );
};

export default ProductSection;
