import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  scroll-behavior:smooth;
  font-family: 'Montserrat', sans-serif;
}
button {
 cursor: pointer;

}
a {
  text-decoration: none;
  color: white;
}
p {
  margin-bottom:0;
}

`;
