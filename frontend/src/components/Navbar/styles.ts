import styled from 'styled-components';

import BGprofile from '../../assets/BGprofile.svg';

export const Bar = styled.nav`
  width: 80px;
  height: 100vh;
  background: #4b625e;
  position: fixed;
  z-index: 9999;
  transition: width 50ms ease;

  .profile {
    display: none;
  }

  &:hover {
    width: 225px;
  }

  &:hover span {
    display: block;
  }

  &:hover .shortLogo {
    display: none;
  }

  &:hover .profile {
    display: block;
  }

  &:hover li:first-child {
    height: 120px;
    width: 225px;
    background: url(${BGprofile}) no-repeat content-box;
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: column;
    align-items: center;
    height: 100%;

    li {
      &:first-child {
        background-size: contain;
        background: #3e4a48;

        .profile {
          margin: 8px;
          margin-left: 15px;
        }

        h5 {
          width: 200px;
          font-weight: bold;
          font-size: 14px;
          line-height: 16px;
          color: #b7b2b2;
        }

        h6 {
          width: 150px;
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;
          color: #b7b2b2;
        }
      }

      &:last-child {
        margin-top: auto;
      }

      div {
        width: 80px;
        height: 70px;
        .shortLogo {
          margin-top: 10px;
          margin-left: 24px;
        }

        .profile {
          img {
            margin: 0;
            padding: 0;
            width: 68px;
            height: 68px;
            border-radius: 50%;
          }
        }
      }

      a,
      button {
        background: #4b625e;
        border: 0;
        display: flex;
        align-items: center;
        height: 60px;
        text-decoration: none;

        &:hover {
          width: 225px;
          background: #5f7d77;
        }
        img {
          min-width: 20px;
          margin: 0 24px;
        }
        span {
          width: 100px;
          display: none;
          color: #7ca095;
          margin-left: 16px;
        }
      }
    }
  }
`;
