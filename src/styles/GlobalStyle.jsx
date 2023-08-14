import { createGlobalStyle } from "styled-components";
import closeToggle from "../imgs/closeToggle.svg";
import openToggle from "../imgs/openToggle.svg";
const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Pretendard';
  font-weight: 900;
  font-display: swap;
  src: local('Pretendard Black'),
    url('/fonts/woff2/Pretendard-Black.woff2') format('woff2'),
    url('/fonts/woff/Pretendard-Black.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 800;
  font-display: swap;
  src: local('Pretendard ExtraBold'),
    url('/fonts/woff2/Pretendard-ExtraBold.woff2') format('woff2'),
    url('/fonts/woff/Pretendard-ExtraBold.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 700;
  font-display: swap;
  src: local('Pretendard Bold'),
    url('/fonts/woff2/Pretendard-Bold.woff2') format('woff2'),
    url('/fonts/woff/Pretendard-Bold.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 600;
  font-display: swap;
  src: local('Pretendard SemiBold'),
    url('/fonts/woff2/Pretendard-SemiBold.woff2') format('woff2'),
    url('/fonts/woff/Pretendard-SemiBold.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 500;
  font-display: swap;
  src: local('Pretendard Medium'),
    url('/fonts/woff2/Pretendard-Medium.woff2') format('woff2'),
    url('/fonts/woff/Pretendard-Medium.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 400;
  font-display: swap;
  src: local('Pretendard Regular'),
    url('/fonts/woff2/Pretendard-Regular.woff2') format('woff2'),
    url('/fonts/woff/Pretendard-Regular.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 300;
  font-display: swap;
  src: local('Pretendard Light'),
    url('/fonts/woff2/Pretendard-Light.woff2') format('woff2'),
    url('/fonts/woff/Pretendard-Light.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 200;
  font-display: swap;
  src: local('Pretendard ExtraLight'),
    url('/fonts/woff2/Pretendard-ExtraLight.woff2') format('woff2'),
    url('/fonts/woff/Pretendard-ExtraLight.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 100;
  font-display: swap;
  src: local('Pretendard Thin'),
    url('/fonts/woff2/Pretendard-Thin.woff2') format('woff2'),
    url('/fonts/woff/Pretendard-Thin.woff') format('woff');
}

  details {
    width: 100%;
    margin: 60px 0;
  }

  .markdownConverter details {
    margin: 0;
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

details summary::before {
  content: url(${closeToggle});
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
}

  details[open] summary::before {
    content: url(${openToggle});
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }


  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Pretendard;
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

    @media screen and (max-width: 1280px) {
    width: 100%;
    height: 100%;
  }
  }
`;

export default GlobalStyle;
