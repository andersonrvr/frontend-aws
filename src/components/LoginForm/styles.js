import styled from "styled-components";

export const Container = styled.form`
  padding: 15px 0;
  button {
    margin: 16px auto;
    margin-bottom: 20px;
    width: 85%;
    display: flex;
    align-items: center;
    border: none;
    box-sizing: border-box;
    border-radius: 3px;
    background: #3700b3;
    padding: 10px;
    color: white;
    justify-content: center;
    font-size: 17px;
  }
  button:hover {
    background-color: #bb86fc;
  }
  .showPasswordContainer {
    display: flex;
    width: 85%;
    margin: 10px auto;
    align-items: center;
  }
  .showPasswordContainer > input:hover {
    cursor: pointer;
  }
  .showPasswordContainer > label {
    color: #fff;
    font-size: 15px;
    margin-left: 5px;
  }

  @media (min-width: 1100px) {
    button {
      width: 80%;
      height: 40px;
    }
    .showPasswordContainer {
      width: 80%;
    }
  }
`;
