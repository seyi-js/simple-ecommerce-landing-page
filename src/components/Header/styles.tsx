import styled from 'styled-components';

export const StyledHeader = styled.header<{ styleProps?: any }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 150px;
  padding: 35px 166px;
  align-items: center;

  @media (max-width: 500px) {
    padding: 0px 10%;
  }
`;

export const StyledHeaderLeft = styled.div<{ styleProps?: any }>`
  display: flex;
  flex: 2;

  //media query
  /* @media (max-width: 768px) {
    flex: 1;
  } */
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

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const StyledHeaderRight = styled.div<{ styleProps?: any }>`
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: center;

  & > :hover {
    cursor: pointer;
  }

  div > div,
  div > div > img {
    margin: 0 20px;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    .login,
    .search {
      display: none !important;
    }
  }
`;
