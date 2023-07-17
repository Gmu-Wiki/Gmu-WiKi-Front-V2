import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import GetRole from "../../../lib/GetRole";

function DropMenu({ onMouseEnter, onMouseLeave }) {
  const data = GetRole();

  return (
    <S.DropContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <S.DropMenu>
        <S.DropItem>
          <Link to="/notice">
            <span>공지사항</span>
          </Link>
          <Link to="/inquiryWrite">
            <span>문의</span>
          </Link>
          {data === "관리자" ? (
            <Link to="/inquiry">
              <span>문의 리스트</span>
            </Link>
          ) : null}
          {data === "관리자" ? (
            <Link to="/role">
              <span>권한 부여</span>
            </Link>
          ) : null}
        </S.DropItem>
        <S.DropItem>
          <Link to="/student">
            <span>학생</span>
          </Link>
          <Link to="/teacher">
            <span>선생님</span>
          </Link>
          <Link to="/club">
            <span>동아리</span>
          </Link>
          <Link to="/major">
            <span>전공</span>
          </Link>
        </S.DropItem>
        <S.DropItem>
          <Link to="/event">
            <span>사건</span>
          </Link>
          <Link to="/schedule">
            <span>학사일정</span>
          </Link>
          <Link to="https://github.com/Team-Ampersand">
            <span>깃허브</span>
          </Link>
        </S.DropItem>
      </S.DropMenu>
    </S.DropContainer>
  );
}

export default DropMenu;
