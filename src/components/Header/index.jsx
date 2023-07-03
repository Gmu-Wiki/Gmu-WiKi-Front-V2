import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style.js";
import * as C from "..";
import * as I from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import DropMenu from "./dropMenu";
import { useFetch } from "../../Hooks";
import TokenManager from "../../apis/TokenManager";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  // 드롭다운 메뉴의 상태를 관리하기 위해 useState를 사용합니다.
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const tokenManager = new TokenManager();

  const accessToken = tokenManager.accessToken;

  const navigate = useNavigate();

  const [queryState, setQueryState] = useState({
    url: "",
    method: "",
  });

  const { fetch: deleteQuery } = useFetch({
    url: queryState.url,
    method: queryState.method,
    onSuccess: () => {
      const tokenManager = new TokenManager();
      tokenManager.removeTokens();

      navigate("/");
    },
  });

  const onDelete = ({ url, method }) => {
    setQueryState({
      url,
      method,
    });
    setShowLogout(true);
  };

  const onConfirm = () => {
    deleteQuery();
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
                      setShowLogout(true);
                      onDelete({
                        url: "/auth",
                        method: "delete",
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
        {showLogout && (
          <C.Logout
            showLogout={showLogout}
            setShowLogout={setShowLogout}
            onConfirm={onConfirm}
          />
        )}
      </S.MenuLi>
    </S.DropMenu>
  );
}

export default Header;
