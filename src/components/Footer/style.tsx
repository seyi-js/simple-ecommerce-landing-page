import styled from 'styled-components';

export const StyledFooterSection = styled.footer`
  display: flex;
  height: 300px;
  padding: 30px 0;
  background-color: #008080;
  justify-content: space-around;

  .footer-left {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    /* grid-template-rows: repeat(2, 1fr); */
    text-align: left;

    a {
      font-weight: 500;
      font-size: 16px;
      line-height: 50px;
      letter-spacing: -0.4px;
      color: #ffffff;
    }
  }

  .footer-right {
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: right;
    text-align: right;

    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 51px;
      letter-spacing: -1.125px;
      color: #ffffff;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 51px;
      letter-spacing: -1.125px;
      color: #000000;
      text-decoration: underline;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
