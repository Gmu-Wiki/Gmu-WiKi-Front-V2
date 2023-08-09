import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style.js";
import * as C from "..";
import * as I from "../../assets";
import DropMenu from "./dropMenu";
import { useFetch } from "../../Hooks";
import TokenManager from "../../apis/TokenManager";
import { useNavigate } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const tokenManager = new TokenManager();
  const accessToken = tokenManager.accessToken;
  const navigate = useNavigate();
  const [queryState, setQueryState] = useState({
    url: "",
    method: ""
  });
  const { fetch: deleteQuery } = useFetch({
    url: queryState.url,
    method: queryState.method,
    onSuccess: () => {
      const tokenManager = new TokenManager();
      tokenManager.removeTokens();
      navigate("/");
    },
    errors: {
      404: "유저를 찾을 수 없습니다."
    }
  });
  const onDelete = ({ url, method }) => {
    setQueryState({
      url,
      method
    });
    setShowLogout(true);
  };
  const onConfirm = () => {
    deleteQuery();
  };
  return (
    <>
      <S.Header
        onMouseEnter={() => {
          setShowMenu(true);
        }}
        onMouseLeave={() => {
          setShowMenu(false);
        }}
      >
        <S.MenuContainer>
          <Link to="/main">
            <I.Logo />
          </Link>
          <S.Nav>
            <S.HeaderItem>
              <I.Notice />
              <span>공지</span>
            </S.HeaderItem>
            <S.HeaderItem>
              <I.School />
              <span>학교</span>
            </S.HeaderItem>
            <S.HeaderItem>
              <I.Etc />
              <span>기타</span>
            </S.HeaderItem>
          </S.Nav>
        </S.MenuContainer>
        <S.InfoContainer>
          <S.SearchContainer>
            <S.SearchInput placeholder="search" />
            <S.SearchIcon>
              <I.Search />
            </S.SearchIcon>
          </S.SearchContainer>
          {accessToken && (
            <span
              onClick={() => {
                setShowLogout(true);
                setShowMenu(false);
                onDelete({
                  url: "/auth",
                  method: "delete"
                });
              }}
            >
              로그아웃
            </span>
          )}
        </S.InfoContainer>
        {showLogout && (
          <C.Logout
            showLogout={showLogout}
            setShowLogout={setShowLogout}
            onConfirm={onConfirm}
          />
        )}
      </S.Header>
      {showMenu && (
        <DropMenu
          onMouseEnter={() => {
            setShowMenu(true);
          }}
          onMouseLeave={() => {
            setShowMenu(false);
          }}
        />
      )}
    </>
  );
}

export default Header;
