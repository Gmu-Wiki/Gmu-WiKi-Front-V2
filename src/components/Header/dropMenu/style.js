import styled from "styled-components";

export const DropContainer = styled.div`
  width: 100%;
  background-color: #3e9dff;
  height: 24vh;
  color: #fff;
  padding-left: 15vw;
  position: absolute;
  z-index: 999;
`;
export const DropMenu = styled.div`
  display: flex;
  gap: 3.7vw;
`;

export const DropItem = styled.div`
  margin-top: 1.2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2vw;
  span {
    font-weight: 700;
    cursor: pointer;
    font-size: 16px;
  }
  a {
    color: #fff;
  }
`;
