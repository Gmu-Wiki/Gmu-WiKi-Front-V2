import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as C from "..";
import { useFetch, useSearchList } from "../../Hooks";
import TokenManager from "../../apis/TokenManager";
import * as I from "../../assets";
import DropMenu from "./dropMenu";
import * as S from "./style.js";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [filteredBoardList, setFilteredBoardList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const { searchList } = useSearchList({ title: search });

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
    let inputValue = e.target.value;
    setSearch(inputValue);

    if (inputValue.length <= 0) {
      setFilteredBoardList([]);
    } else {
      const updatedFilteredList = searchList.filter(item => {
        return item.title.toLowerCase().includes(inputValue.toLowerCase());
      });
      setFilteredBoardList(updatedFilteredList);
    }
  };

  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setSearch("");
        setFilteredBoardList([]);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchList.length > 0) {
      const updatedFilteredList = searchList.filter(item => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredBoardList(updatedFilteredList);
      setIsLoading(false);
    } else {
      setFilteredBoardList([]);
    }
  }, [searchList, search]);

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
                ref={searchInputRef}
                placeholder="search"
                onChange={handleSearchChange}
                value={search}
              />
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
          </S.FixedInput>
          {filteredBoardList.map((item, index) => (
            <Link key={item.id} to={`/board/${item.id}`}>
              <S.SearchItem
                key={item.id}
                top={29 * (index + 1) + 17}
                onMouseEnter={() => setShowMenu(false)}
              >
                {item.title}
              </S.SearchItem>
            </Link>
          ))}
        </S.InfoContainer>
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
      {showLogout && (
        <C.Logout
          showLogout={showLogout}
          setShowLogout={setShowLogout}
          onConfirm={onConfirm}
        />
      )}
    </>
  );
}

export default Header;
