import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
const fadeAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  background-color: #121212;
  min-height: 100vh;
  padding: 15px;
  color: white;
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${fadeAnimation} 1s;
  }
  .profileInfos {
    padding: 40px 25px;
    background-color: #1e1e1e;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    width: 100%;
  }
  .profileInfos > img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-bottom: 10px;
  }
  .userInfos {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 15px;
  }
  .userInfos > svg {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
  .infoTag {
    font-size: 12px;
    color: #03dac5;
    margin-bottom: 2px;
    font-weight: 800;
  }

  .profileInfos > button {
    margin: 16px auto;
    margin-bottom: 0px;
    width: 100%;
    display: flex;
    border: none;
    box-sizing: border-box;
    border-radius: 3px;
    background: #03dac5;
    padding: 10px;
    color: white;
    justify-content: center;
    font-size: 17px;
  }

  .profileInfos > button:hover {
    background-color: #53ffd0;
  }
  @media (min-width: 500px) {
    .profileInfos {
      width: 70%;
      max-width: 380px;
    }
  }

  @media (min-width: 800px) {
    display: flex;
    padding: 1px;
    main {
      padding: 40px 50px;

      width: 100%;
    }
  }
  @media (min-width: 1100px) {
    main {
      max-width: 80vw;
      padding: 40px 200px;
      margin: 0 auto;
      width: 100%;
      justify-content: start;
    }
  }
`;
