import React from 'react';
import { StyledComponentHeaderWithSpan } from './style';

type Props = {
  title: string;
};

const ComponentHeaderWithSpan = (props: Props) => {
  return (
    <StyledComponentHeaderWithSpan>
      <span></span>
      <h2>{props.title}</h2>
    </StyledComponentHeaderWithSpan>
  );
};

export default ComponentHeaderWithSpan;
