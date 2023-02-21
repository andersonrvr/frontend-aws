import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .modalContainer {
    width: 90%;
    max-width: 400px;
    border-radius: 5px;
    background-color: #1e1e1e;
  }
  .modalContainer > span {
    display: flex;
    justify-content: flex-end;
    width: 90%;
    margin: 10px auto;
    height: 12px;
  }
  .modalContainer > span > button {
    background-color: #1e1e1e;
    margin: 5px;
    padding: 5px;
    color: lightgray;
    border: none;
    border-radius: 5px;
  }
  .modalContainer > form > button {
    margin: 16px auto;
    margin-bottom: 20px;
    width: 85%;
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

  .modalContainer > form > button:hover {
    background-color: #53ffd0;
  }
  @media (min-width: 1100px) {
    .modalContainer > form > button {
      width: 80%;
    }
    .modalContainer > span {
      width: 85%;
    }
  }
`;
