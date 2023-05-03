import React, { useState } from "react";
import * as S from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import DropMenu from "./dropMenu/dropMenu.jsx";
import styled from "styled-components";
import * as P from "../../image";

function Header() {
  // 드롭다운 메뉴의 상태를 관리하기 위해 useState를 사용합니다.
  const [showMenu, setShowMenu] = useState(false);

  return (
    <S.dropMenu>
      <S.menuLi>
        <div>
          <S.Header
            onMouseLeave={() => {
              setShowMenu(false);
              console.log(showMenu);
            }}
          >
            <S.HeaderCenter
              onMouseEnter={() => {
                setShowMenu(true);
                console.log(showMenu);
              }}
            >
              <div className="menu">
                <div className="logoContent">
                  <S.Logo src={P.logo}></S.Logo>
                </div>
                <div className="notice header">
                  <S.noticeImg src={P.notice} />
                  <span>공지</span>
                </div>
                <div className="school header">
                  <S.schoolImg src={P.school} />
                  <span>학교</span>
                </div>
                <div className="etc header">
                  <S.etcImg src={P.etc} />
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
            {/* 드롭다운 메뉴 */}
            {showMenu && <DropMenu onMouseLeave={() => setShowMenu(false)} />}
          </S.Header>
        </div>
      </S.menuLi>
    </S.dropMenu>
  );
}

export default Header;
