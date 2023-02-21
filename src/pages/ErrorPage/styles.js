import styled from "styled-components";

export const Container = styled.div`
  background-color: #121212;
  color: white;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 100px;
    margin: 150px 0 0 0;
    font-weight: 800;
  }
  h2 {
    margin-top: 0;
    font-weight: 300;
    font-weight: 800;
  }
  p {
    text-align: center;
    padding: 20px;
  }
  a {
    padding-top: 35px;
    font-size: 20px;
    text-decoration: underline;
  }
  @media (min-width: 600px) {
    p {
      font-size: 30px;
    }
  }
`;
