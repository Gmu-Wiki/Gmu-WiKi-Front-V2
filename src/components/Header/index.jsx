import React from "react";
import * as S from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const LogoUrl =
    "https://media.discordapp.net/attachments/956190154454876183/1100056332956082288/image.png?width=388&height=112";

  const noticeImg =
    "https://media.discordapp.net/attachments/956190154454876183/1100057834709852170/image.png?width=88&height=88";

  const schoolImg =
    "https://media.discordapp.net/attachments/956190154454876183/1100336868173824030/image.png?width=76&height=76";

  const etcImg =
    "https://media.discordapp.net/attachments/956190154454876183/1100337621693124658/image.png?width=88&height=88";

  return (
    <S.Header>
      <S.HeaderCenter>
        <div className="menu">
          <div className="logoContent">
            <S.Logo src={LogoUrl}></S.Logo>
          </div>
          <div className="notice header">
            <S.noticeImg src={noticeImg} />
            <span>공지</span>
          </div>
          <div className="school header">
            <S.schoolImg src={schoolImg} />
            <span>학교</span>
          </div>
          <div className="etc header">
            <S.etcImg src={etcImg} />
            <span>기타</span>
          </div>
        </div>
        <S.searchContent>
          <S.searchInput placeholder="search" />
          <div className="searchIcon">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="faMagnifyingGlass"
            />
          </div>
          <span>로그인</span>
        </S.searchContent>
      </S.HeaderCenter>
    </S.Header>
  );
}

export default Header;
