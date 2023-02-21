import styled from "styled-components";

export const Container = styled.div`
  margin-top: 25px;

  .salesContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    background-color: #1e1e1e;
    padding: 15px;
    border-radius: 10px;
  }
  .salesHeader {
    margin-bottom: 15px;
  }

  h2 {
    display: flex;
    align-items: center;
  }

  h2 > svg {
    margin-right: 5px;
  }
  h3 {
    text-align: center;
    margin-top: 30px;
    font-size: 20px;
  }
  .salesHeader > p {
    margin-left: 30px;
  }
  .filterAndUpdateContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .updateSales {
    background-color: #1e1e1e;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    height: 40px;
    width: 40px;
    justify-content: center;
    color: white;
  }
  .updateSales > svg {
    color: white;
  }
  .updateSales:hover {
    cursor: pointer;
    background-color: #bb86fc;
  }
  .custom-select select {
    background-color: #1e1e1e;
    border: none;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
    padding: 15px;
    color: #fff;
    border-radius: 5px;
  }

  .custom-select select:hover {
    cursor: pointer;
  }
  .accordion {
    background-color: #121212;
    padding: 5px 0;
  }
  .accordion-item {
    border: none;
  }
  .accordion-header > button {
    background-color: #1e1e1e;
    color: white;
  }
  .accordion-button:after {
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
  }

  .accordion-body {
    display: flex;
    justify-content: space-between;
    background-color: #1e1e1e;
    color: white;
  }
  .accordion-body > p {
    margin: 0;
    font-size: 12px;
    text-transform: capitalize;
    font-weight: 700;
  }
  .accordion-button:not(.collapsed) {
    color: #ffffff;
    background-color: #29008a;
    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
    border: none;
  }
  .accordion-button:focus {
    box-shadow: none;
  }
`;
