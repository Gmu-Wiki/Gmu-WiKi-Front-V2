import styled from "styled-components";

export const Header = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap");

  background-color: #007eff;
  width: 100%;
  height: 60px;
`;

export const HeaderCenter = styled.div`
  height: 60px;
  display: flex;
  align-items: center;

  .menu {
    display: flex;
    align-items: center;
  }

  .header {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0 10px 0 10px;
    span {
      color: white;
      margin-left: 5px;
      font-weight: 400;
      font-family: "Nanum Gothic", sans-serif;
    }
  }
`;

export const Logo = styled.img`
  width: 75px;
  height: 20px;
  cursor: pointer;
`;

export const noticeImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const searchContent = styled.div`
  display: flex;

  .searchIcon {
    display: flex;
    align-items: center;
    background-color: white;
    width: 28px;
    justify-content: center;
    border: 1px solid #c0c0c0;
    border-left: 0;

    .faMagnifyingGlass {
      color: #636363;
      font-weight: 500;
    }
  }
`;

export const schoolImg = styled.img`
  width: 18px;
  height: 18px;
  position: relative;
  bottom: 3px;
`;

export const etcImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const searchInput = styled.input`
  width: 150px;
  height: 30px;
  outline: none;
  border: 1px solid #c0c0c0;
  text-indent: 5px;

  &::placeholder {
    color: #c0c0c0;
  }
`;
