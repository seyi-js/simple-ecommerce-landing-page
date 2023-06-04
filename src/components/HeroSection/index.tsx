import React from 'react';
import Image from 'next/image';
import { StyledHeroSection, StyledHeroSectionRight } from './styles';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <StyledHeroSection>
      <div>
        <Image
          src='/img/HeroImage.svg'
          alt='Picture of the author'
          width={477}
          height={505}
        />
      </div>

      <StyledHeroSectionRight>
        <h1>Here at XYZ Hair</h1>
        <span></span>
        <p>
          MATOA Way Kambas Maple comes with a material form of Canadian Maple.
        </p>

        <button>Add to Cart</button>
      </StyledHeroSectionRight>
    </StyledHeroSection>
  );
};

export default HeroSection;
