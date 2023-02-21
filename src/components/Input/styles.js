import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  margin: 0 auto;
  width: 85%;
  div {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 2px;
    margin-top: 10px;
    color: #fff;
  }
  input {
    width: 100%;
    border: none;
    box-sizing: border-box;
    border-radius: 3px;
    background: #a9a9a9;
    padding: 10px;
    color: black;
  }
  .error {
    color: red;
  }
  @media (min-width: 1100px) {
    width: 80%;
    input {
      height: 40px;
    }
  }
`;
