import styled from "styled-components";

export const Container = styled.form`
  padding-top: 15px;
  padding-bottom: 15px;
  button {
    font-size: 17px;
    margin: 16px auto;
    margin-bottom: 20px;
    width: 85%;
    display: flex;
    border: none;
    box-sizing: border-box;
    border-radius: 3px;
    background: #3700b3;
    padding: 8px;
    color: white;
    justify-content: center;
  }
  .requiredField {
    color: red;
    width: 85%;
    margin: 10px auto;
  }
  button:hover {
    background-color: #bb86fc;
  }

  @media (min-width: 1100px) {
    button {
      width: 80%;
      height: 40px;
      display: flex;
      align-items: center;
    }
    .requiredField {
      width: 80%;
    }
  }
`;
