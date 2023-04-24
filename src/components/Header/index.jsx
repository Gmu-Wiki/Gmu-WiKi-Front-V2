import React from "react";
import * as S from "./style.js";

function Header() {
  const LogoUrl =
    "https://media.discordapp.net/attachments/956190154454876183/1100056332956082288/image.png?width=388&height=112";

  const noticeImg =
    "https://media.discordapp.net/attachments/956190154454876183/1100057834709852170/image.png?width=88&height=88";

  return (
    <S.Header>
      <S.HeaderCenter>
        <div className="menu">
          <S.Logo src={LogoUrl}></S.Logo>
          <div className="notice">
            <S.noticeImg src={noticeImg} />
            <span>공지</span>
          </div>
        </div>
      </S.HeaderCenter>
    </S.Header>
  );
}

export default Header;
