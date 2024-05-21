import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F6F6F6;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
  width: 0.25rem;

  }
  body::-webkit-scrollbar-track {
    background: #4B625E;

  }
  body::-webkit-scrollbar-thumb {
    background: #3E4A48;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }



  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #306937;
  }

  h5 {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #306937;
  }

  .logo {
    margin-top: 30px;
  }
  .btn-primary {
    background: #4FB394;
    border-radius: 7px;
    height: 50px;
    padding: 0 25px;
    border: 0;
    color: #FFFFFF;
    margin: 0 25px;
    font-size: 20px;
    line-height: 24px;
    &:hover {
    background: ${shade(0.2, '#4FB394')};
    }
  }

  .btn-secundary {
    display:flex;
    justify-content: center;
    align-items: center;
    text-decoration:none;
    background: #fff;
    border-radius: 7px;
    height: 50px;
    padding: 0 25px;
    border: 1px solid #4FB394;
    color: #4FB394;
    margin: 0 25px;
    font-size: 20px;
    line-height: 24px;
    &:hover {
    background: ${shade(0.2, '#fff')};
    }
  }
  input,select{
    background: #FFFFFF;
    border: 1px solid #ACACAC;
    height: 50px;
    padding: 0 25px;
    margin: 0 25px 25px 25px;
    font-size: 20px;
    line-height: 24px;
    color: #676A6C;
    transition: 0.2s;
    &::placeholder {
      color: #A1A2A3;
    }
    &:focus {
      border: 1px solid #306937;
      box-shadow: 1px 1px 10px -5px #306937;
    }
  }

  footer {
    max-width: 1030px;
    margin: 0 auto;
    margin-top: 35px;
    hr {
      color: #B7B2B2;
    }
    div {
      margin-bottom:20px;
      position: bottom;
      display: flex;
      justify-content: space-between;
      span {
        padding-top: 16px;
        font-size: 19px;
        line-height: 22px;
        color: #747373;
      }
    }

  }

`;
