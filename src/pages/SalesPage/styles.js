import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
const fadeAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  background-color: #121212;
  min-height: 100vh;
  padding: 15px;
  color: white;
  main {
    animation: ${fadeAnimation} 1s;
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
    }
  }
`;
