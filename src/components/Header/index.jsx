import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style.js";
import * as C from "..";
import * as I from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import DropMenu from "./dropMenu";
import TokenManager from "../../apis/TokenManager.js";
import useFetch from "../../Hooks/useFetch.js";

function Header() {
  const navigate = useNavigate();

  // 드롭다운 메뉴의 상태를 관리하기 위해 useState를 사용합니다.
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const tokenManager = new TokenManager();

  const accessToken = tokenManager.accessToken;

  const [queryState, setQueryState] = useState({
    url: "",
    method: "",
    title: "",
  });

  const { fetch } = useFetch({
    url: queryState.url,
    method: queryState.method,
    onSuccess: () => {
      tokenManager.removeTokens();

      navigate("/");
    },
  });

  const onDelete = ({ url, method, title }) => {
    setQueryState({
      url,
      method,
      title,
    });
    setIsShow(true);
  };

  return (
    <S.DropMenu>
      <S.MenuLi>
        <div>
          <S.Header
            onMouseLeave={() => {
              setShowMenu(false);
            }}
          >
            <S.HeaderCenter
              onMouseEnter={() => {
                setShowMenu(true);
              }}
            >
              <S.HeaderCenter
                onMouseEnter={() => {
                  setShowMenu(true);
                }}
              >
                <div className="menu">
                  <div className="logoContent">
                    <Link to="/">
                      <I.Logo />
                    </Link>
                  </div>
                  <div className="menuContent">
                    <div className="notice header">
                      <I.Notice />
                      <span>공지</span>
                    </div>
                    <div className="school header">
                      <I.School />
                      <span>학교</span>
                    </div>
                    <div className="etc header">
                      <I.Etc />
                      <span>기타</span>
                    </div>
                  </div>
                </div>
              </S.HeaderCenter>
              <S.searchContent>
                <S.searchInput placeholder="search" />
                <div className="searchIcon">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="faMagnifyingGlass"
                  />
                </div>
                {accessToken ? (
                  <span
                    onClick={() => {
                      setIsShow(true);
                      onDelete({
                        url: "/auth",
                        method: "delete",
                        title: "로그아웃 하시겠습니까?",
                      });
                    }}
                  >
                    로그아웃
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      setShowLogin(true);
                    }}
                  >
                    로그인
                  </span>
                )}
              </S.searchContent>
            </S.HeaderCenter>
            {/* 드롭다운 메뉴 */}
            {showMenu && <DropMenu onMouseLeave={() => setShowMenu(false)} />}
          </S.Header>
        </div>
        {showLogin && (
          <C.Login showLogin={showLogin} setShowLogin={setShowLogin} />
        )}
        {isShow && <C.Logout isShow={isShow} setIsShow={setIsShow} />}
      </S.MenuLi>
    </S.DropMenu>
  );
}

export default Header;
