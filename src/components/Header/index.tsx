'use client';
import React from 'react';
import Image from 'next/image';
import {
  StyledHeader,
  StyledHeaderLeft,
  StyledHeaderRight,
  StyledLogo,
} from './styles';

type Props = {};

function Header({}: Props) {
  return (
    <StyledHeader>
      <StyledHeaderLeft>
        <StyledLogo>Logo</StyledLogo>
      </StyledHeaderLeft>

      <StyledHeaderRight>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Image src='/img/search.svg' alt='logo' width={32} height={32} />

          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
            }}
          >
            <Image
              src='/img/user.svg'
              alt='logo'
              style={{
                marginRight: '10px',
              }}
              width={24}
              height={24}
            />
            <h2
              style={{
                color: '#333333',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '31px',
                letterSpacing: '0.02em',
              }}
            >
              Log In
            </h2>
          </div>

          <div>
            <Image
              style={{
                margin: '0',
              }}
              src='/img/cart.svg'
              alt='logo'
              width={24}
              height={24}
            />
          </div>
        </div>

        <Image src='/img/menu.svg' alt='logo' width={20} height={14} />
      </StyledHeaderRight>
    </StyledHeader>
  );
}

export default Header;
