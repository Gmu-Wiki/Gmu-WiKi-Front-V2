import styled from "styled-components";

export const dropMenu = styled.div`
  border: none;
  border: 0px;
  margin: 0px;
  padding: 0px;
  font-size: 18px;
`;

export const menuLi = styled.li`
  list-style: none;
  a {
    text-decoration-line: none;
  }

  li {
    padding: 0px;

    a {
      background: #666;
      color: #fff;
      display: block;
      line-height: 100px;
      margin: 0px;
      padding: 0px 25px;
      text-align: center;
      text-decoration: none;
    }
  }
`;

export const Header = styled.div`
  left: 0;
  width: 100%;
  position: fixed;
`;

export const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #007eff;
  height: 60px;

  .menu {
    display: flex;
    align-items: center;
    margin-right: 450px;
  }

  .header {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0 10px 0 10px;
    span {
      color: white;
      margin-left: 5px;
      font-weight: 700;
    }
  }
  .logoContent {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .school {
    margin: 0 23px 0 23px;
  }

  .menuContent {
    display: flex;
    margin-left: 30px;
  }
`;

export const Logo = styled.img`
  width: 75px;
  height: 22px;
  cursor: pointer;
  margin-right: 50px;
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
      cursor: pointer;
    }
  }

  span {
    display: flex;
    align-items: center;
    font-weight: 700;
    color: white;
    margin-left: 15px;
    font-size: 16px;
    cursor: pointer;
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
  width: 200px;
  height: 30px;
  outline: none;
  border: 1px solid #c0c0c0;
  text-indent: 5px;

  &::placeholder {
    color: #c0c0c0;
  }
`;
