import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <S.FooterConainer>
      <ul>
        <li>
          <Link to="/notice">NOTIFICATION</Link>
        </li>
        <li>
          <Link to="/student">SCHOOL</Link>
        </li>
        <li>
          <Link to="/event">ETC</Link>
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
