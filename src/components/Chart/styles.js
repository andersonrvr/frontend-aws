import styled from "styled-components";

export const Container = styled.section`
  margin-top: 50px;
  margin: 50px 0;
  border-radius: 5px;
  margin-top: 5px;
  min-height: 300px;
  tspan {
    margin: 5px;
    padding: 5px;
  }
  .chartsContainer {
    display: flex;
    width: 100%;
    height: 330px;
    justify-content: center;
    background-color: #1e1e1e;
    padding: 10px;
    border-radius: 5px;
    margin-top: 15px;
  }
  .chartsTitle {
    display: flex;
    align-items: flex-start;
    margin-top: 50px;
    font-size: 20px;
  }
  .chartsTitle > span > svg {
    margin-right: 5px;
  }
  @media (min-width: 800px) {
    max-width: 99%;
    .chartsTitle {
      font-size: 24px;
    }
    .chartsContainer {
      height: 450px;
    }
  }
  @media (min-width: 1100px) {
    max-width: 100%;
    .chartsTitle {
      font-size: 24px;
    }
  }
`;
