import styled from "styled-components";

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  width: 40%;
  background-color: none;
  margin-bottom: 8px;
  padding: 3px 10px;

  svg {
    margin-left: 12px;
    cursor: pointer;
     &:hover {
      transform: scale(1.275);
     }
  }
`;

