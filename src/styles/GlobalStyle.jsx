import { createGlobalStyle } from "styled-components";
import closeToggle from "../imgs/closeToggle.svg";
import openToggle from "../imgs/openToggle.svg";
const GlobalStyle = createGlobalStyle`

  details {
    width: 100%;
    margin: 60px 0;
  }

  details summary {
  font-weight: 600;
  font-size: 1.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  color: #a3a3a3;
  display: flex;
  align-items: center;
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
  content: none;
}

details summary span {
  content: url(${closeToggle});
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-right: 8px;
}

details[open] summary span {
  content: url(${openToggle});
  font-size: 1.8rem;
}


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
    width: 100%;
  }

  li {
    margin-left: 20px;
  }

  img {
    max-width: 100vw;
    max-height: 80vh;
    object-fit: cover;
  }
`;

export default GlobalStyle;
