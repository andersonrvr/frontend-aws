import styled from "styled-components";

export const Container = styled.section`
  margin: 50px 0;
  h2 {
    display: flex;
    align-items: center;
  }
  h2 > svg {
    margin-right: 5px;
  }
  .rankingLabel {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
    margin-top: 20px;
  }
  .rankingLabel > p {
    padding: 5px 0;
    font-weight: 700;
  }

  .rankingSellerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    background-color: #1e1e1e;
    padding: 15px;
    border-radius: 10px;
  }

  .rankingSellerInfo {
    display: flex;
    align-items: center;
  }
  .rankingSellerInfo > span {
    display: flex;
    align-items: center;
    margin-right: 15px;
    color: #fff;
    width: 22px;
  }
  .rankingSellerNameCity {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .rankingSellerName {
    font-size: 12px;
    font-weight: 700;
    text-transform: capitalize;
  }
  .rankingSellerCity {
    font-size: 9px;
    text-transform: capitalize;
  }
  .rankingSellerInfo > img {
    width: 45px;
    height: 45px;
    border-radius: 100%;
    font-size: 11px;
  }
  .tool {
    position: relative;
    display: inline-block;
    margin-left: 10px;
    font-size: 22px;
  }

  .tool .tooltext {
    font-size: 12px;
    visibility: hidden;
    width: 240px;
    background-color: #3700b3;
    color: #fff;
    text-align: start;
    border-radius: 6px;
    position: absolute;
    width: 130px;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 7px;
  }
  .tool:hover {
    cursor: pointer;
  }
  .tool:hover .tooltext {
    visibility: visible;
  }

  @media (min-width: 800px) {
    .rankingSellerInfo > img {
      width: 60px;
      height: 60px;
      border-radius: 100%;
    }
    .rankingSellerNameCity {
      margin-left: 30px;
    }
    .rankingSellerName {
      font-size: 15px;
      font-weight: 700;
      text-transform: capitalize;
    }
    .rankingSellerCity {
      font-size: 11px;
      text-transform: capitalize;
      color: lightgray;
    }
  }
`;
