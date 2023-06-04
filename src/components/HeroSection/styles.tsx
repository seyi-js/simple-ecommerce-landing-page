import styled from 'styled-components';

export const StyledHeroSection = styled.section`
  display: flex;
  margin: 30px 203px;
  justify-content: center;
  height: 505px;
`;

export const StyledHeroSectionRight = styled.div`
  background-color: #96dbdb;
  padding: 118px 91px;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.02em;
    color: #333333;
  }

  span {
    width: 95px;
    border: 1px solid #000000;
    align-self: baseline;
    margin-top: 76px;
  }

  p {
    margin-top: 19px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #333333;
  }

  button {
    margin-top: 35px;
    width: 183px;
    padding: 15px 47px;
    border: 1px solid #333333;
    background-color: transparent;
  }

  button:hover {
    cursor: pointer;
    background-color: #333333;
    color: #ffffff;
  }
`;
