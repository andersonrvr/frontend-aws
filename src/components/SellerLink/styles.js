import styled from "styled-components";

export const Container = styled.section`
  margin-top: 20px;

  h2 {
    display: flex;
    align-items: center;
  }
  h2 > svg {
    margin-right: 5px;
  }
  .sellerLink {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }
  .sellerLinkCopy {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
  .sellerLinkCopy > p {
    width: 87%;
    display: flex;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px;
    align-items: center;
    border-radius: 10px;
    font-size: 9px;

    background-color: #1e1e1e;
  }
  .sellerLinkCopy > button {
    padding: 5px;
    border-radius: 9px;
    border: none;
    background-color: #3700b3;
  }
  .sellerLinkCopy > button > svg {
    width: 20px;
    height: 20px;
    color: white;
  }
  .sellerLink > span {
    width: 87%;
    display: flex;
    justify-content: center;
    font-size: 7px;
    font-style: capitalize;
    margin-top: 5px;
    color: #03dac5;
  }

  .sellerLinkButton {
    display: flex;
    justify-content: center;
    padding: 5px 0;
  }
  .sellerLinkButton > button {
    padding: 10px;
    width: 200px;
    border: none;
    border-radius: 9px;
    background-color: #3700b3;
    color: #fff;
    font-weight: 700;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px;
  }
  .sellerLinkButton > button:hover {
    background-color: #bb86fc;
  }
  @media (min-width: 550px) {
    .sellerLink {
      align-items: center;
    }
    .sellerLinkCopy > p {
      min-width: 500px;
      margin-right: 10px;
      font-size: 12px;
    }
  }
`;
