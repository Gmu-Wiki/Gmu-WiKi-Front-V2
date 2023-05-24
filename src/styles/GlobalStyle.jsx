import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
       font-family: "Nanum Gothic", sans-serif;
       a {text-decoration: none; outline: none}
    }

    body{
        background-color: #F1F1F5;
    }
  
`;

export default GlobalStyle;
