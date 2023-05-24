import React from "react";
import * as S from "./style";

function Footer() {
  return (
    <S.FooterConainer>
      <ul>
        <li>
          <a href="">NOTIFICATION</a>
        </li>
        <li>
          <a href="">SCHOOL</a>
        </li>
        <li>
          <a href="">ETC</a>
        </li>
        <li>
          <a href="https://github.com/Team-Ampersand" target="__blank">
            GITHUB
          </a>
        </li>
      </ul>

      <span>Copyright 2023. &mpersand All rights reserved.</span>
    </S.FooterConainer>
  );
}

export default Footer;
