import styled from "styled-components";

export const FooterConainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #dddddd;
  position: relative;
  bottom: 0;
  border-top: 1px solid #c0c0c0;
  display: flex;
  align-items: center;
`;

export const FooterContentCotainer = styled.div`
  width: 100%;
  display: flex;
  color: #636363;
  justify-content: space-around;
  font-size: 14px;
  ul {
    display: flex;
    list-style: none;

    li {
      margin-right: 30px;

      a {
        text-decoration: none;
        color: #636363;
      }
    }
  }
`;
