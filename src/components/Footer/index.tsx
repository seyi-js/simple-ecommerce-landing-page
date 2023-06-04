import React from 'react';
import { StyledFooterSection } from './style';

type Props = {};

const FooterSection = (props: Props) => {
  return (
    <StyledFooterSection>
      <div className='footer-left'>
        <a href='#'>Terms of Service</a>
        <a href='#'>Privacy Policy</a>
        <a href='#'>Contact Us</a>
        <a href='#'>Press</a>
      </div>

      <div className='footer-right'>
        <h2>We invite you to join our team.</h2>
        <p>Apply Now</p>
      </div>
    </StyledFooterSection>
  );
};

export default FooterSection;
