import styled from 'styled-components';

export const StyledHeader = styled.header<{ styleProps?: any }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 150px;
  padding: 35px 166px;
  align-items: center;
`;

export const StyledHeaderLeft = styled.div<{ styleProps?: any }>`
  display: flex;
  flex: 2;
`;

export const StyledLogo = styled.h1<{ styleProps?: any }>`
  font-size: 28px;
  font-weight: 600;
  font-style: normal;
  line-height: 48px;
  letter-spacing: 0.2rem;
  color: #80753d;
  text-transform: uppercase;
  font-family: 'Taviraj', sans-serif;
`;

export const StyledHeaderRight = styled.div<{ styleProps?: any }>`
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;

  & > :hover {
    cursor: pointer;
  }
`;
