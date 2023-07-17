import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #007eff;
  display: flex;
  align-items: center;
  padding: 0 8vw;
  display: flex;
  justify-content: space-between;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #fff;
    font-weight: 700;
    margin-left: 20px;
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  display: flex;
  padding-left: 3vw;
  gap: 3vw;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
  span {
    color: #fff;
    font-weight: 700;
    margin-left: 8px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #c0c0c0;
  cursor: pointer;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  width: 10vw;
  height: 30px;
  outline: none;
  border: none;
  padding-left: 16px;
`;
export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-left: 1px solid #c0c0c0;

  svg {
    width: 16px;
    height: 16px;
  }
`;
