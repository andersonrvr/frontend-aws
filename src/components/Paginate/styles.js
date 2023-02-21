import styled from "styled-components";

export const Container = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  .pagination > li {
    margin: 4px;
  }
  .pagination > li > a {
    background-color: #1e1e1e;
    padding: 5px 7px;
    border-radius: 5px;
  }
  .pagination > li > a:hover {
    cursor: pointer;
    background-color: #bb86fc;
  }
`;
