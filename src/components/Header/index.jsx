import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style.js";
import * as C from "..";
import * as I from "../../assets";
import DropMenu from "./dropMenu";
import { useFetch, useSearchList } from "../../Hooks";
import TokenManager from "../../apis/TokenManager";
import { useNavigate } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const [search, setSearch] = useState("");

  const { searchList } = useSearchList({ title: search });
  const boardList = searchList; // boardList.id, boardList.title을 사용 가능

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

  const handleSearchChange = e => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  const filteredBoardList =
    boardList.length > 0
      ? boardList.filter(item => {
          return item.title.toLowerCase().includes(search.toLowerCase()); // 대소문자 무시
        })
      : [];

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
          <Link to="/">
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
            <S.SearchInput placeholder="search" onChange={handleSearchChange} />
            <S.SearchIcon>
              <I.Search />
            </S.SearchIcon>
          </S.SearchContainer>
          {accessToken ? (
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
          ) : (
            <span
              onClick={() => {
                setShowLogin(true);
              }}
            >
              로그인
            </span>
          )}
        </S.InfoContainer>
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
