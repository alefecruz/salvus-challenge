import styled from 'styled-components';

export const LogoContent = styled.div`
  width: 1030px;
  margin: 0 auto;
  display: flex;
`;

export const Conteiner = styled.div`
  width: 1030px;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  margin-top: 13px;
  padding: 0 60px;
  display: flex;
  flex-direction: column;

  .btn-secundary {
    max-width: 185px;
    margin: 30px 0;
  }

  h1 {
    margin: 17px 0;
  }
  .content {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      max-width: 430px;

      h5 {
        margin-top: 20px;
        margin-bottom: 10px;
      }

      input,
      select {
        width: 430px;
        margin-left: 0;
      }
      & + input {
        margin-top: 27px;
      }
    }

    img {
      max-width: 430px;
      margin: 30px;
    }
  }

  .btn-primary {
    margin: 50px auto;
    width: 320px;
  }
`;
