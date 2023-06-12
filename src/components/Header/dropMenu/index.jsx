import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

function DropMenu() {
  return (
    <S.dropHeader>
      <S.dropMenu>
        <div className="center">
          <div>
            <div className="notice">
              <Link to="/notice">
                <span className="fontMove">공지사항</span>
              </Link>
              <Link to="/inquiry">
                <span>문의</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="school">
              <Link to="/student">
                <span className="fontMove">학생</span>
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
            </div>
          </div>
          <div>
            <div className="etc">
              <Link to="/event">
                <span className="fontMove">사건</span>
              </Link>
              <Link to="/schedule">
                <span>학사일정</span>
              </Link>
              <a href="https://github.com/Team-Ampersand" target="_blank">
                <span>깃허브</span>
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </S.dropMenu>
    </S.dropHeader>
  );
}

export default DropMenu;
