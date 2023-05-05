import { createGlobalStyle } from "styled-components";
import NanumGothicRegular from "../assets/fonts/NanumGothic-Regular.ttf";
const GlobalStyle = createGlobalStyle`
    @font-face {
            font-family: 'NanumGothicRegular';
            src: local('NanumGothicRegular'), local('NanumGothicRegular');
            src: url(${NanumGothicRegular}) format('truetype');
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
       font-family: 'NanumGothicRegular';
    }
`;

export default GlobalStyle;
