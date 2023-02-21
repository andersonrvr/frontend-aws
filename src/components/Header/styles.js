import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  color: white;

  svg {
    width: 25px;
    height: 25px;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;
