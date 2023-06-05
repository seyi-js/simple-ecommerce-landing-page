import styled from 'styled-components';

export const StyledBestSellerSection = styled.section`
  margin: 100px 203px;
  height: 622.14px;

  @media (max-width: 768px) {
    margin: 50px 50px;
    height: auto;
  }

  @media (max-width: 500px) {
    margin: 50px 5%;
  }

  .best-seller-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    margin-top: 32px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const StyledBestSellerItem = styled.div`
  display: flex;
  height: 270px;

  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;

    img {
      display: none;
    }
  }

  div {
    background: #96dbdb;
    padding: 45px;
    display: block;

    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0.03em;
      color: #333333;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.03em;
      color: #777777;
      margin-bottom: 7px;
    }
    span {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 27px;
      letter-spacing: 0.03em;
      color: #333333;
      text-decoration: underline;
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

  img {
    width: 238px;
    height: 270px;
  }
`;
