import styled from 'styled-components';

export const Conteiner = styled.div`
  max-width: 1030px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  max-width: 430px;
  margin-top: 35px;

  h3 {
    margin-top: 35px;
    font-size: 24px;
    line-height: 28px;
    color: #306937;

    u {
      color: #4ea152;
    }
  }

  p {
    width: 430px;
    margin-top: 35px;
    font-size: 18px;
    line-height: 21px;
    color: #3e3d3d;
  }
`;

export const Form = styled.form`
  width: 430px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  h1 {
    margin: 30px;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    color: #306937;
  }

  .forgotPass {
    font-size: 15px;
    line-height: 18px;
    margin: 10px 0 15px 30px;
    text-decoration: none;
    color: #73b6fc;
  }

  span {
    font-size: 15px;
    line-height: 18px;
    margin: 0 auto 16px auto;
    color: #afacac;
  }
  .btn-secundary {
    margin-bottom: 40px;
  }
`;
