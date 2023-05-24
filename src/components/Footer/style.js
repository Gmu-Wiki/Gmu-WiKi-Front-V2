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
  color: #636363;
  justify-content: space-between;
  font-size: 14px;
  padding: 0 120px 0 120px;

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
