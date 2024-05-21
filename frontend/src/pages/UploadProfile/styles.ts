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
    max-width: 220px;

    margin: 25px 0 25px auto;
  }

  h5 {
    margin: 17px auto 0px auto;
  }

  .profile {
    margin: 17px auto 0px auto;
    img {
      margin: 0;
      padding: 0;
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    label {
      cursor: pointer;
      position: relative;
      width: 48px;
      height: 48px;
      background: #4b625e;
      border-radius: 50%;
      right: -90px;
      bottom: 50px;
      border: 0;
      transition: background-color 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: green;
      }

      .camera {
        border-radius: 0;
        width: 25px;
        height: 25px;
      }

      input {
        display: none;
      }
    }
  }

  .documents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    .inputfile {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
      & + label {
        max-width: 300px;
        font-size: 1.25em;
        font-weight: 700;
        color: white;
        background-color: #4b625e;
        padding: 10px 25px 0 25px;
        margin: 10px;
        cursor: pointer;
        display: inline-block;
      }

      &:focus + label,
      & + label:hover {
        background-color: green;
      }
      &:focus + label {
        outline: 1px dotted green;
        outline: -webkit-focus-ring-color auto 5px;
      }
      & + label * {
        pointer-events: none;
      }
    }
    label .upload {
      display: flex;
      margin: 10px auto;
    }

    ul {
      list-style: none;
      li {
        display: flex;
        margin: 10px;
        button {
          cursor: pointer;
          border: 1px solid transparent;
          padding: 10px;
          height: 50px;
          text-decoration: none;
          color: #ffffff;
          background: red;
          border-radius: 5px 0 0 5px;
          &:hover {
            color: red;
            background: #ffffff;
            border: 1px solid red;
          }
        }
        a {
          text-decoration: none;
        }
        .docName {
          margin: 0;
          width: 300px;
          height: 50px;
          padding: 10px;
          border: 1px solid #3e4a48;
          font-size: 10px;
          line-height: 14px;
          border-radius: 0 5px 5px 0;

          &:hover {
            background: #4b625e;
            color: #ffffff;
          }
        }
      }
    }
  }
`;
