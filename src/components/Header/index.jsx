import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./style.js";
import * as C from "..";
import * as I from "../../assets";
import DropMenu from "./dropMenu";
import { useFetch, useSearchList } from "../../Hooks";
import TokenManager from "../../apis/TokenManager";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [filteredBoardList, setFilteredBoardList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState("");

  // useSearchList 커스텀 훅을 사용하여 검색 결과 리스트를 받아옵니다.
  const { searchList } = useSearchList({ title: search });

  const tokenManager = new TokenManager();
  const accessToken = tokenManager.accessToken;
  const navigate = useNavigate();
  const [queryState, setQueryState] = useState({
    url: "",
    method: ""
  });

  // useFetch 커스텀 훅을 사용하여 HTTP DELETE 요청을 처리합니다.
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

  // 검색어가 변경될 때마다 호출되는 함수로 검색어 상태를 업데이트합니다.
  const handleSearchChange = e => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  useEffect(() => {
    console.log("Connect!");
    // searchList에 데이터가 있으면 실행
    if (searchList.length > 0) {
      // 검색 결과를 필터링
      const updatedFilteredList = searchList.filter(item => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredBoardList(updatedFilteredList);
      setIsLoading(false); // 로딩 상태 변경
      console.log(searchList);
      console.log("123123");
    }
  }, [searchList, search]); // 검색 결과 데이터와 검색어가 변경될 때 실행

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
          <S.FixedInput>
            <S.SearchContainer>
              <S.SearchInput
                placeholder="search"
                onChange={handleSearchChange}
              />
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
          </S.FixedInput>
          {filteredBoardList.map((item, index) => (
            <S.SearchItem
              key={item.id}
              top={29 * (index + 1) + 17}
              onMouseEnter={() => setShowMenu(false)}
            >
              {item.title}
            </S.SearchItem>
          ))}
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
