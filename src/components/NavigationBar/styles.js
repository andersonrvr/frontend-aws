import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media (min-width: 800px) {
    display: block;
    background-color: #1e1e1e;
    width: 25%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    max-width: 220px;

    .sideBarFix {
      position: fixed;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 20%;
      max-width: 220px;
    }
    .navBarUser {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 80px;
    }
    .navBarUser > img {
      width: 70px;
      height: 70px;
      border-radius: 100%;
    }
    .navBarUser > p {
      color: white;
      margin-top: 15px;
      text-transform: capitalize;
      font-size: 17px;
      font-weight: 700;
      text-align: center;
    }
    .navBarLinksContainer {
      display: flex;
      justify-content: center;
    }

    .navBarLinks {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      margin: 20px auto;
    }
    .navBarLinks > p {
      color: white;
      margin-top: 40px;
      font-size: 15px;
      display: flex;
      font-weight: 700;
      align-items: center;
      text-align: start;
      width: 100%;

      border-bottom: 1px solid white;
    }
    .navBarLinks > p:hover {
      color: #bb86fc;

      border-bottom: 1px solid #bb86fc;
      cursor: pointer;
      svg {
        fill: #bb86fc;
      }
    }

    .navBarLinks > p > svg {
      margin-right: 10px;
      fill: white;
    }
    @media (min-width: 1100px) {
      .sideBarFix {
      }
      .navBarUser > p {
        font-size: 20px;
      }
      .navBarLinks > p {
        font-size: 17px;
      }
    }
  }
`;
