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

  details summary {
    font-weight: 600;
    font-size: 1.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    color: #a3a3a3;
  }

  details[open] summary {
    font-weight: 600;
    font-size: 1.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    color: #191919;
  }

  details summary::marker {
    content: url("../imgs/closeToggle.png");
    font-size: 1.8rem;
  }

  details[open] summary::marker {
    content: url("../imgs/openToggle.png");
    font-size: 1.8rem;
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
    width: 64vw;
    height: 80vh;
  }
`;

export default GlobalStyle;
