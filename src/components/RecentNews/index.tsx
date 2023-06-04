import Image from 'next/image';
import React from 'react';
import { StyledRecentNewsSection } from './styles';
import RecentNewsHeader from '@/util/ComponentHeaderWithSpan';

type Props = {};

const RecentNewsSection = (props: Props) => {
  return (
    <StyledRecentNewsSection>
      <RecentNewsHeader title='Recent News' />

      <div className='recent-news-content'>
        <div className='recent-news-content-item-left'>
          <h1>We’re focused</h1>
          <p>
            We provide an exceptional service by only focusing on hair A. Our
            goal is to provide a different type of experience by using
            responsible products.
          </p>
          <button>Discover</button>
        </div>

        <div className='recent-news-content-item-right'>
          <Image
            src='/img/recent-news.svg'
            width={626}
            height={626}
            alt='recent-news'
          />
        </div>
      </div>
    </StyledRecentNewsSection>
  );
};

export default RecentNewsSection;
