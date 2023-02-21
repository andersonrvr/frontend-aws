import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";
const fadeAnimation = keyframes`${fadeInLeft}`;

export const Container = styled.div`
  background-color: #1e1e1e;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  animation: 0.5s ${fadeAnimation};
  header {
    display: flex;
    justify-content: flex-end;
    padding: 15px;
  }

  .navBurguerUser {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .navBurguerUser > img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
  .navBurguerUser > p {
    color: white;
    margin-top: 15px;
    text-transform: capitalize;
    font-size: 25px;
    text-align: center;
  }
  .navLinksContainer {
    display: flex;
    justify-content: center;
  }

  .navBurguerLinks {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 50px;
    margin: 10px auto;
  }
  .navBurguerLinks > p {
    color: white;
    margin-top: 40px;
    font-size: 25px;
    display: flex;
    align-items: center;
    text-align: start;
    width: 100%;

    border-bottom: 1px solid white;
  }
  .navBurguerLinks > p::after {
    border-bottom: 1px solid white;
  }
  .navBurguerLinks > p > svg {
    margin-right: 10px;
    fill: white;
  }
`;
