import styled from "styled-components";

// export const DropMenu = styled.div`
//   border: none;
//   border: 0px;
//   margin: 0px;
//   padding: 0px;
//   font-size: 18px;
// `;

// export const MenuLi = styled.li`
//   list-style: none;
//   a {
//     text-decoration-line: none;
//   }

//   li {
//     padding: 0px;

//     a {
//       background: #666;
//       color: #fff;
//       display: block;
//       line-height: 100px;
//       margin: 0px;
//       padding: 0px 25px;
//       text-align: center;
//       text-decoration: none;
//     }
//   }
// `;

// export const Header = styled.div`
//   position: fixed;
//   z-index: 999;
//   left: 0;
//   width: 100%;
// `;

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
  /* margin-left: 4vw; */
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
// export const HeaderCenter = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   background-color: #007eff;
//   height: 60px;

//   .menu {
//     display: flex;
//     align-items: center;
//     margin-right: 450px;
//   }

//   .header {
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//     margin: 0 10px 0 10px;
//     span {
//       color: white;
//       margin-left: 5px;
//       font-weight: 700;
//     }
//   }
//   .logoContent {
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//   }

//   .school {
//     margin: 0 23px 0 23px;
//   }

//   .menuContent {
//     display: flex;
//     margin-left: 30px;
//   }
// `;

// export const Logo = styled.img`
//   width: 75px;
//   height: 22px;
//   cursor: pointer;
//   margin-right: 50px;
// `;

// export const noticeImg = styled.img`
//   width: 20px;
//   height: 20px;
// `;

// export const searchContent = styled.div`
//   display: flex;

//   .searchIcon {
//     display: flex;
//     align-items: center;
//     background-color: white;
//     width: 28px;
//     justify-content: center;
//     border: 1px solid #c0c0c0;
//     border-left: 0;

//     .faMagnifyingGlass {
//       color: #636363;
//       font-weight: 500;
//       cursor: pointer;
//     }
//   }

//   span {
//     display: flex;
//     align-items: center;
//     font-weight: 700;
//     color: white;
//     margin-left: 15px;
//     font-size: 16px;
//     cursor: pointer;
//   }
// `;

// export const schoolImg = styled.img`
//   width: 18px;
//   height: 18px;
//   position: relative;
//   bottom: 3px;
// `;

// export const etcImg = styled.img`
//   width: 18px;
//   height: 18px;
// `;

// export const searchInput = styled.input`
//   width: 200px;
//   height: 30px;
//   outline: none;
//   border: 1px solid #c0c0c0;
//   text-indent: 5px;

//   &::placeholder {
//     color: #c0c0c0;
//   }
// `;
