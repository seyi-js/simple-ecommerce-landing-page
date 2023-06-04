import styled from 'styled-components';

export const StyledProductSection = styled.section`
  margin: 100px 203px;
  height: 622.14px;

  .products-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    margin-top: 32px;
  }
`;

export const StyledProductItem = styled.div`
  display: flex;
  height: 100%;

  div {
    background: #ffffff;
    padding: 30.48px;

    /* display: block; */

    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.03em;
      color: #333333;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      color: #777777;
      margin: 7px 0;
    }

    button {
      margin-top: 25px;
      padding: 14px 47px;
      gap: 10px;
      border: 1px solid #333333;
      background-color: transparent;
      width: 183px;
      align-self: center;
      font-size: 14px;

      &:hover {
        cursor: pointer;
        background-color: #333333;
        color: #ffffff;
      }
    }
  }
`;
