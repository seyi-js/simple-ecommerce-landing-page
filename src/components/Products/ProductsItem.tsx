import React from 'react';
import Image from 'next/image';
import { StyledProductItem } from './style';

type Props = {
  title: string;
  price: number;
  image: string;
};

const ProductsItem = (props: Props) => {
  const { title, price, image } = props;

  let formatPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <StyledProductItem>
      <Image src={image} alt={title} width={216} height={288} />

      <div>
        <h2>{title}</h2>
        <p>₦{formatPrice}</p>

        <button>Discover</button>
      </div>
    </StyledProductItem>
  );
};

export default ProductsItem;
