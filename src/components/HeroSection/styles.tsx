import styled from 'styled-components';

export const StyledHeroSection = styled.section`
  display: flex;
  margin: 30px 203px;
  justify-content: center;
  height: 505px;

  @media (max-width: 768px) {
    margin: 30px 50px;
    flex-direction: column;
    height: auto;

    .hero-image {
      display: none;
    }
  }

  @media (max-width: 500px) {
    margin: 0;
    .hero-image {
      display: contents;
      height: 100%;
    }
  }
`;

export const StyledHeroSectionRight = styled.div`
  background-color: #96dbdb;
  padding: 118px 91px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 50px 60px;
    flex: 1;
  }

  @media (max-width: 500px) {
    align-items: center;
    text-align: center;
  }

  h1 {
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.02em;
    color: #333333;

    @media (max-width: 500px) {
      font-size: 24px;
    }
  }

  span {
    width: 95px;
    border: 1px solid #000000;
    align-self: baseline;
    margin-top: 76px;

    @media (max-width: 500px) {
      align-self: center;
      width: 160px;
    }
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
