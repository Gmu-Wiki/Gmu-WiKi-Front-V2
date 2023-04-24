import styled from "styled-components";

export const Header = styled.div`
  background-color: #007eff;
  width: 100%;
  height: 70px;
`;

export const HeaderCenter = styled.div`
  height: 70px;
  display: flex;
  align-items: center;

  .menu {
    display: flex;
  }

  .notice {
    display: flex;
    align-items: center;
    span {
      color: white;
      font-weight: 500;
    }
  }
`;

export const Logo = styled.img`
  width: 90px;
  height: 25px;
`;

export const noticeImg = styled.img`
  width: 20px;
  height: 20px;
`;
