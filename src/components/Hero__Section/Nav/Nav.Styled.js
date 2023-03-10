import styled from "styled-components";

export const NavStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10;
  opacity: 0.9;
  .app__navbar {
    background: #075aa0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    padding: 1rem 2rem;
    .app__navbar-logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        height: 100%;
        color: white;
        width: 100%;
        margin-top: 10px;
        @media screen and (max-width: 500px) {
          height: 70%;
          width: 70%;
        }
      }
    }

    .app__navbar-links {
      display: flex;
      /* margin-top: 1rem; */
      li {
        margin: 0 1rem;
        list-style-type: none;

        a {
          text-decoration: none;
          color: white;
          text-transform: uppercase;
          &:hover {
            border-bottom: 2px solid white;
          }
        }
      }

      @media screen and (max-width: 760px) {
        display: none;
      }
    }
  }

  ul.app__navbar-links li:nth-last-of-type(1) {
    background: #50b3fb;
    height: 1.7rem;
    border-radius: 20px;
    a {
      padding: 0.11rem 0.5rem 0 0.5rem;
      :hover {
        border: none;
      }
    }
  }
`;

export const NavMenuBar = styled.div`
  .app__navbar-menu {
    position: fixed;
    left: calc(100vw - 70px);
    /* top: 50%; */
    height: 50px;
    width: 50px;
    /* border-radius: 50%; */
    z-index: 10;
    margin-top: 20px;

    svg {
      height: 2.8rem;
      width: 2.8rem;
      /* left: 50%;
      top: 50%;
      transform: translate(10%, 10%); */
      cursor: pointer;
      background: var(--bgColor);
      border-radius: 50%;
      border: 0.2rem solid white;
      padding: 0.5rem;
      @media screen and (max-width: 500px) {
        height: 2.6rem;
        width: 2.6rem;
      }
    }
    ul {
      height: 50rem;
      width: 50rem;
      border-radius: 50%;
      position: absolute;
      left: -50vw;
      top: -70px;
      /* transform: translateY(-50%); */
      z-index: -10;
      background: var(--priColor);
      border: 0.2rem solid white;
      display: flex;
      flex-direction: column;
      padding: 7rem 3rem;
      justify-content: space-evenly;
      backdrop-filter: blur(5px);
      opacity: 0.99;
      li {
        list-style: none;
        font-size: 1.1rem;
        text-transform: uppercase;
        cursor: pointer;
        margin-left: 3.5rem;
        a {
          text-decoration: none;
          color: var(--offsetBgColor);
          &:hover {
            color: var(--secColor);
            border-bottom: 1px solid var(--secColor);
          }
        }
      }
    }
    @media screen and (min-width: 767px) {
      display: none;
    }
  }
`;

//  div {
//           height: 5px;
//           width: 5px;
//           border-radius: 50%;
//           /* background: red; */
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           width: 100%;
//           &:hover {
//             background: var(--secColor);
//           }
//         }
