import styled from 'styled-components';

export const StyledRecentNewsSection = styled.section`
  margin: 100px 203px;
  height: 622.14px;

  .recent-news-content {
    display: flex;
    margin-top: 55px;
    justify-content: center;

    .recent-news-content-item-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      flex: 1;
      padding: 0 20%;

      h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 40px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #333333;
      }

      p {
        font-family: 'Taviraj';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.02em;
        margin-top: 14px;
        margin-bottom: 23px;

        color: #333333;
      }

      button {
        padding: 14px 47px;
        gap: 10px;
        border: 1px solid #333333;
        background-color: transparent;
        width: 160px;
        align-self: center;
        font-size: 14px;

        &:hover {
          cursor: pointer;
          background-color: #96dbdb;
          /* color: #ffffff; */
        }
      }
    }

    .recent-news-content-item-right {
      flex: 1;
    }
  }
`;
