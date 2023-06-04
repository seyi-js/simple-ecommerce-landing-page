import React from 'react';
import Image from 'next/image';
import { StyledBestSellerItem } from './style';

type Props = {
  src: string;
  title: string;
  description: string;
};

const BestSellerItem = (props: Props) => {
  const { src, title, description } = props;
  return (
    <StyledBestSellerItem>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>Discover Now</span>
        <br></br>
        <button>Add to Cart</button>
      </div>

      <Image src={src} width={238} height={270} alt='best-seller' />
    </StyledBestSellerItem>
  );
};

export default BestSellerItem;
