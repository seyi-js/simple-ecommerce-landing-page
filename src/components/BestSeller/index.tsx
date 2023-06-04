import React from 'react';
import { StyledBestSellerSection } from './style';
import BestSellerHeader from '@/util/ComponentHeaderWithSpan';
import BestSellerItem from './bestSellerItem';

type Props = {};

const bestSellerItems = [
  {
    src: '/img/best-seller-1.svg',
    title: 'Luxury Watch',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.',
  },
  {
    src: '/img/best-seller-2.svg',
    title: 'Luxury Watch',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.',
  },
  {
    src: '/img/best-seller-3.svg',
    title: 'Luxury Watch',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.',
  },
  {
    src: '/img/best-seller-4.svg',
    title: 'Luxury Watch',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.',
  },
];

const BestSellerSection = (props: Props) => {
  return (
    <StyledBestSellerSection>
      <BestSellerHeader title='Bestseller' />

      <div className='best-seller-items'>
        {bestSellerItems.map((item, index) => (
          <BestSellerItem key={index} {...item} />
        ))}
      </div>
    </StyledBestSellerSection>
  );
};

export default BestSellerSection;
