import styled from "styled-components";

export const ScrollButtonContainer = styled.div`
  display: flex;
  position: fixed;
  right: 8%;
  bottom: 13%;

  svg {
    cursor: pointer;
  }

  div {
    display: flex;
  }

  div:nth-child(2) {
    transform: scaleY(-1);
    margin-left: 8px;
  }
`;
