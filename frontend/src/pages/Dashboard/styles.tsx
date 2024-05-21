import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 100px;
  margin-left: 100px;
  display: grid;
  grid-template-columns: minmax(18rem, 1fr) repeat(auto-fit, minmax(14rem, 1fr));
`;

export const Card = styled.div`
  max-width: 320px;
  margin: 10px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;

  h4 {
    padding: 15px;
    height: 70px;
    background: #ffffff;
    color: #3d3d3d;
  }

  div {
    display: flex;

    img {
      margin: 25px 25px 0 25px;
      width: 34px;
      height: 34px;
    }

    h1 {
      margin: 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 36px;
      line-height: 42px;
      color: #787878;
    }
  }
`;

export const Graph = styled.div`
  min-height: 300px;
  margin-bottom: 14px;
  padding-top: 20px;
  margin-left: 110px;
  display: grid;
  grid-template-columns: 1fr;

  div {
    margin-right: 10px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    h4 {
      padding: 15px;
      height: 70px;
      background: #ffffff;
      color: #3d3d3d;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
    }

    .conteiner {
      border: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));

      ul {
        list-style: none;
        max-width: 300px;
        margin: 15px 40px;
        padding: 0;
        align-items: center;
        height: 100%;

        li {
          margin: 10px 0;
          display: flex;
          justify-content: space-between;
          h3 {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;

            color: #3d3d3d;
          }
        }
      }
      .grafh {
        border: 0;
        div {
          border: 0;
        }
      }
    }
  }
`;
