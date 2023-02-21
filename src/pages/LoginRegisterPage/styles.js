import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
const fadeAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  background-color: #121212;
  min-height: 100vh;
  padding: 1px;

  .formContainer {
    animation: ${fadeAnimation} 1s;
    width: 95%;
    margin: 100px auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: #1e1e1e;
  }
  .formSwitch {
    width: 100%;
    display: flex;
  }

  .buttonSellected {
    border-bottom: 1px solid #bb86fc !important;
    color: #bb86fc !important;
  }
  .formSwitch > button {
    border-radius: 5px 5px 0 0;
    width: 50%;
    border: none;
    border-bottom: 1px solid gray;
    background-color: #1e1e1e;
    padding: 12px;
    margin-left: 1px;
    font-weight: 800;
    color: white;
    font-size: 17px;
  }
  .formSwitch > button:hover {
    border-bottom: 1px solid #bb86fc !important;
    color: #bb86fc;
  }
  @media (min-width: 500px) {
    .formContainer {
      max-width: 500px;
    }
  }
`;
