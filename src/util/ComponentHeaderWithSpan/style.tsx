import styled from 'styled-components';

export const StyledComponentHeaderWithSpan = styled.div`
  display: flex;
  /* flex-direction: */

  @media (max-width: 768px) {
    justify-content: center;
  }

  span {
    width: 171px;
    border: 1px solid #000000;
    align-self: center;
    margin-right: 20px;

    @media (max-width: 500px) {
      margin-right: 10px;
      width: 40%;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 36px;

    @media (max-width: 500px) {
      font-size: 24px;
    }
  }
`;
