import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Nanum Gothic", sans-serif;
  }

  body {
    background-color: #F1F1F5;
  }

  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-thumb {
    height: 30%;
    background: #7f7f7f;
    border-radius: 10px;
  }

  blockquote {
    display: inline-block;
    border-left: 8px solid #007eff;
    background-color: #f5f5f5;
    padding: 18px;
    margin: 10px 0;
    font-size: 0.9rem;
  }

  pre {
    display: inline-block;
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 4px;
  }

  code {
    color: #333;
  }

  a {
    text-decoration: none;
    color: #007eff;
  }

  hr {
    margin: 20px 0;
    background-color: #a3a3a3;
    border: 1px solid #a3a3a3;
  }

  li {
    margin-left: 20px;
  }

  img {
    align-items: center;
    width: 30vw;
    height: 45vh;
  }
`;

export default GlobalStyle;
